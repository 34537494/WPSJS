import { apiWritePath } from "../../../../settings";
import { handlePost } from "../../../WebAddinCommon/index";
import { UploadXml } from "./uploadXml";
import FileUpload from "./fileUpload";
/* global wps:false */
const Fragments = {
  handleSuccess: null,
  handleFiled: null,
  fragments: async function (fileList) {
    var _this = this;
    let DocNum = fileList.length;
    console.log("fileList num:", DocNum);
    if (DocNum > 0) {
      let wpsapp = wps.WpsApplication();
      let TempPath = wps.Env.GetTempPath() + "/TempDoc";
      TempPath = TempPath.replace(/\\/g, "/");
      if (!wps.FileSystem.Exists(TempPath)) {
        wps.FileSystem.Mkdir(TempPath);
      }
      for (let index = 0; index < DocNum; index++) {
        let reader = new FileReader();

        reader.onload = (e) => {
          let newName =
            TempPath +
            "/TempDoc" +
            new Date().getTime().toString() +
            e.total +
            ".docx"; //linux下分隔符可能有问题
          wps.FileSystem.writeAsBinaryString(newName, e.target.result); //等价于复制数据,也可以预防文件被占用问题
          if (wps.FileSystem.Exists(newName)) {
            // 碎片化
            var document = wpsapp.Documents.Open(
              newName,
              null,
              true,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              false
            );
            _this.fragDetail(document);
            // 获取前一个一级标题i  下一个一级标题j k从i到j遍历 如果存在k段落的级别大于i段落的级别  则为i的正文(10)或子标题(>1)
            // 用t从k开始到下一个子标题(级别!=10) i到t之间就是一级标题的正文  置i=t 此时i指向遍历的第一个子标题 k再从i到j重复
            // 如果存在k段落的级别小于i段落的级别 说明上一个标题内容已经遍历完了  这是下一个上级标题了

            wps.FileSystem.Remove(newName);
          }
        };
        reader.readAsBinaryString(fileList[index]);
      }
    }
  },
  fragDetail: async function (document) {
    var paraNum = document.Paragraphs.Count; // 段落数量
    var paraLvs = new Array(paraNum + 1); // 段落大纲级别 Paragraph.OutlineLevel
    var isIntable = new Array(paraNum + 1);

    var totalNum = 0;
    var i = 0;
    var lastIndex = 0;

    var MainLvlIndex = await getTextRepositoryLastID(); //数据库最后一个ID
    var paraRange = new Array(paraNum); //每段的XML
    for (i = 0; i < paraNum; i++) {
      paraRange[i] = document.Paragraphs.Item(i + 1); //每段的range
    }
    paraLvs[i] = 10;
    for (i = 0; i < paraNum; i++) {
      var XmlPart = new Array(); //知识单元文段xml
      var PartLvl = new Array(); //知识单元大纲级别
      var headText = new Array(); //知识单元标题文本
      var TextPart = new Array(); //知识单元文段文本
      var TextNote = new Array(); //知识单元批注
      var ParaRef = new Array(); //知识单元partRange
      getParaInfo(i); // 获取第i段落的信息
      if (paraLvs[i] == 1 && isIntable[i] == 0) {
        // 如果选中部分开头部分不是一级大纲标题，那么找到第一个一级标题后开始
        for (var j = i + 1; j < paraNum; j++) {
          getParaInfo(j); // 获取第j段落的信息--从开始找下一个一级标题
          if (paraLvs[j] == 1 && isIntable[j] == 0) {
            break;
          }
        }
        // 拿到了i,j两个一级标题的位置  从i遍历到j获取树形结构
        for (var k = i; k < j; k++) {
          // k级别高i级别 可能是子标题也可能是正文
          if (paraLvs[k] > paraLvs[i]) {
            for (var t = k + 1; t < j; t++) {
              // 不是正文就退出  此时t在下一个子标题或者高级标题
              if (paraLvs[t] != 10) {
                break;
              }
            }
            // 获取part
            var PartRange = document.Range(
              paraRange[i].Range.Start,
              paraRange[t - 1].Range.End
            );
            // console.log("PartRange", PartRange);
            // 用于获取批注
            var FirstParaRange = paraRange[i].Range.Paragraphs.Item(1).Range;
            ParaRef.push(PartRange);

            var tmpOpenxml = PartRange.WordOpenXML;
            // console.log("tmpOpenxml:" + tmpOpenxml);

            // 删除批注存在问题

            // tmpOpenxml = DeleteComments(tmpOpenxml);
            //文段文本
            GetParaText(tmpOpenxml);
            XmlPart.push(tmpOpenxml);
            if (FirstParaRange.Comments.Count > 0) {
              TextNote.push(FirstParaRange.Comments[1].Range.Text);
            } else {
              TextNote.push("");
            }
            PartLvl.push(paraLvs[i]);
            i = t;
            lastIndex = i;
            if (t > k) {
              k = t - 1;
            }
          } else {
            //独立部分，独立的标题段
            if (paraLvs[k + 1] < 10) {
              ParaRef.push(paraRange[k].Range);
              tmpOpenxml = paraRange[k].Range.WordOpenXML;
              tmpOpenxml = DeleteComments(tmpOpenxml);
              GetParaText(tmpOpenxml);
              XmlPart.push(tmpOpenxml);
              if (paraRange[k].Range.Comments.Count > 0) {
                TextNote.push(paraRange[k].Range.Comments[1].Range.Text);
              } else {
                TextNote.push("");
              }

              PartLvl.push(paraLvs[k]);
              i = k + 1;
              lastIndex = i;
            }
          }
        }
        UploadXml.handleSuccess = this.handleSuccess;
        UploadXml.handleFiled = this.handleFiled;
        // console.log("handleSuccess" + this.handleSuccess);
        UploadXml.keyStart = MainLvlIndex + 1;
        UploadXml.head = headText;
        UploadXml.level = PartLvl;
        UploadXml.xml = XmlPart;
        UploadXml.textpart = TextPart;
        UploadXml.textnote = TextNote;
        UploadXml.PartRange = PartRange;
        UploadXml.upload(this.handleSuccess, this.handleFiled);
        // MainLvlIndex = UploadXml.keyStart - 1;
        // console.log("PartLvl.Count:" + PartLvl.length);
        MainLvlIndex = MainLvlIndex + PartLvl.length;
        // console.log("MainLvlIndex:" + MainLvlIndex);
        if (j >= paraNum) {
          break;
        }
        if (j >= i) {
          i = j - 1;
        }
      }
      UploadXml.strJson = "";
    }

    // console.log("XmlPart", XmlPart);

    // 获取数据库最后一条记录
    function getTextRepositoryLastID() {
      const Company = {};
      Company.公司ID = 1;
      return handlePost(
        `${apiWritePath}getinf/getStruct/getTextRepositoryLastID`,
        Company
      ).then(
        (result) => {
          console.log("getTextRepositoryLastID", parseInt(result["msg"]));
          return parseInt(result["msg"]);
        },
        (error) => {}
      );
    }
    // 获取文段级别和表格信息
    function getParaInfo(i) {
      if (!paraLvs[i]) {
        paraLvs[i] =
          paraRange[i].OutlineLevel > 6 ? 10 : paraRange[i].OutlineLevel; //大于6级标题认为正文
        isIntable[i] = paraRange[i].Range.Tables.Count; //统计表格数量
      }
    }
    // 删除批注
    function DeleteComments(Xml) {
      var packPart = Xml.split('<pkg:part pkg:name="/word/document.xml"');
      var documentXml = packPart[1].substring(
        0,
        packPart[1].indexOf("</pkg:part>")
      );
      packPart[1] = packPart[1].replace(
        packPart[1].substr(0, documentXml.length),
        ""
      );
      var FirstParaStart = documentXml.substring(
        0,
        documentXml.indexOf("<w:body>") + 8
      );
      documentXml = documentXml.slice(0, FirstParaStart.Length);
      var StartMarks = new Array(
        "<w:commentRangeStart ",
        "<w:commentRangeEnd ",
        "<w:commentReference "
      );
      var EndMarks = new Array("/>", "/>", "/>");
      for (let i = 0; i < 3; i++) {
        documentXml = deletePart(documentXml, StartMarks[i], EndMarks[i]);
      }
      documentXml = FirstParaStart + documentXml;
      packPart[1] = documentXml + packPart[1];

      Xml = packPart.join('"<pkg:part pkg:name="/word/document.xml"');
      return Xml;
    }
    function deletePart(documentXml, StartMark, EndMark) {
      if (documentXml.indexOf(StartMark) != -1) {
        var delPart = documentXml.split(StartMark);
        //如果原来有<w:numPr></w:numPr>，那么先删除掉
        for (var i = 1; i < delPart.Length; i++) {
          var numPrEnd = delPart[i].indexOf(EndMark);
          if (numPrEnd > 0) {
            delPart[i] = delPart[i].substring(numPrEnd + EndMark.Length);
            //string RightPart = delPart[i].substring(numPrEnd + EndMark.Length);
            //delPart[i] = delPart[i].substring(0, delPart[i].IndexOf(EndMark)) + RightPart;
          }
        }
        documentXml = delPart.join("");
      }
      return documentXml;
    }
    // 获取文段标题和正文信息
    function GetParaText(tmpOpenxml) {
      let packPart = tmpOpenxml.split(
        '<pkg:part pkg:name="/word/document.xml"'
      );

      let documentXml = packPart[1].substring(
        0,
        packPart[1].indexOf("</pkg:part>")
      );

      packPart[1] = packPart[1].slice(0, documentXml.Length);
      var FirstParaStart = documentXml.substring(
        0,
        documentXml.indexOf("<w:body>") + 8
      );
      documentXml = documentXml.slice(0, FirstParaStart.Length);
      let paraPart = documentXml.split("</w:p>");
      var tmpText = new Array();
      paraPart.forEach((Para) => {
        var wtPart = Para.split("</w:t>");
        var txtPart = new Array();
        wtPart.forEach((Part) => {
          txtPart.push(Part.substring(Part.lastIndexOf(">") + 1));
        });
        tmpText.push(txtPart.join(""));
      });

      TextPart.push(tmpText.join("\r\n"));
      headText.push(tmpText[0]);
    }
  },
};
export default Fragments;
