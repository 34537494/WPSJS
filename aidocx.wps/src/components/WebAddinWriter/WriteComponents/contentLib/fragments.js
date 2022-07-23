import { array } from "js-md5";

/* global wps:false */
const Fragments = {
  fragments: function (fileList) {
    let result = [];
    let DocNum = fileList.length;
    console.log("fileList num:", DocNum);
    if (DocNum > 0) {
      let wpsapp = wps.WpsApplication();
      let TempPath = wps.Env.GetTempPath() + "/TempDoc";
      TempPath = TempPath.replace(/\\/g, "/");
      if (!wps.FileSystem.Exists(TempPath)) {
        wps.FileSystem.Mkdir(TempPath);
      }
      for (let j = 0; j < DocNum; j++) {
        let reader = new FileReader();

        reader.onload = (e) => {
          let newName =
            TempPath +
            "/TempDoc" +
            new Date().getTime().toString() +
            e.total +
            ".docx"; //linux下分隔符可能有问题
          // console.log("byteArr:", e.target.result);
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
            // 文章段落
            var paraNum = document.Paragraphs.Count;
            console.log(paraNum);
            // if (paraNum < 2 && ) {
            //   var temp = { title: "" };
            // }
            // 段落大纲级别 Paragraph.OutlineLevel
            var paraLvs = new Array(paraNum + 1);
            for (let index = 0; index < paraNum; index++) {
              // console.log(document.Paragraphs.Item(index + 1).OutlineLevel);
              paraLvs.push(document.Paragraphs.Item(index + 1).OutlineLevel);
            }
            // 获取前一个一级标题i  下一个一级标题j k从i到j遍历 如果存在k段落的级别大于i段落的级别  则为i的正文(10)或子标题(>1)
            // 用t从k开始到下一个子标题(级别!=10) i到t之间就是一级标题的正文  置i=t 此时i指向遍历的第一个子标题 k再从i到j重复
            // 如果存在k段落的级别小于i段落的级别 说明上一个标题内容已经遍历完了  这是下一个上级标题了
            // console.log(document.WordOpenXML);
            wps.FileSystem.Remove(newName);
          }
        };
        reader.readAsBinaryString(fileList[j]);
      }
    }
  },
};
export default Fragments;
