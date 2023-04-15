import { handlePost } from "../../../WebAddinCommon";
import { apiWritePath } from "../../../../settings";
import { Result } from "antd";
/* global wps:false */
export const UploadXml = {
  head: new Array(),
  level: new Array(),
  xml: new Array(),
  textpart: new Array(),
  textnote: new Array(),
  PartRange: new Array(),
  keyStart: 0,
  strJson: "",
  upload: async function (combine = true) {
    var HeadNum = this.level.length;
    var keyIndex = new Array(HeadNum);
    keyIndex[0] = this.keyStart.toString();

    for (let i = 1; i < HeadNum; i++) {
      if (this.level[i] - this.level[i - 1] > 1) {
        this.level[i] = this.level[i - 1] + 1;
      }
      keyIndex[i] = (this.keyStart + i).toString();
    }
    if (combine) {
      for (let i = 0; i < HeadNum; i++) {
        if (this.textnote[i].length > 0) {
          keyIndex[i] = this.textnote[i];
        }
      }
    }
    // console.log("keyIndex :" + keyIndex);
    this.CreateJsonStr(this.head, this.level, keyIndex);
    console.log("strJson:" + this.strJson);
    console.log("this.head" + this.head);
    console.log("textpart:" + this.textpart);
    return await this.PostXml(keyIndex);
    // var bArr = new TextEncoder().encode(xmlStr);
  },
  PostXml: async function (keyIndex) {
    var xmlStr = this.xml.join("<w:cutewordzny/>");
    var reader = new FileReader();
    var fileBlob = new Blob([xmlStr], { type: "text/plain" });
    reader.onload = (e) => {
      let TempPath = wps.Env.GetTempPath() + "/TempDoc";
      let newName =
        "D:/Desktop/wpsProject/TempXml/" +
        new Date().getTime().toString() +
        this.head[0] +
        ".xml";
      // let newName =
      //   TempPath +
      //   "/TempXml" +
      //   new Date().getTime().toString() +
      //   this.head[0] +
      //   ".xml"; //linux下分隔符可能有问题
      wps.FileSystem.writeAsBinaryString(newName, reader.result);
    };
    reader.readAsBinaryString(fileBlob);

    var file = new File([fileBlob], this.head[0].toString() + ".xml");
    var data = new FormData();
    data.append("file", file);
    // test
    data.append("用户ID", "25910");
    data.append("公司ID", "1");
    data.append("文本项标题", this.head[0]);
    data.append("文本元列表", this.head.join("<,>"));
    data.append("文本元结构", this.strJson);
    data.append("文本元来源", keyIndex.join("<,>"));
    data.append("文本元文本", this.textpart.join("<,cutewordzny>"));
    //   文本元列表: this.head.join("<,>"),
    //   文本元结构: this.strJson,
    //   文本元来源: keyIndex.join("<,>"),
    //   文本元文本: this.textpart.join("<,cutewordzny>"),

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        var res = JSON.parse(this.responseText);
        if (res.success) {
          return true;
        } else {
          return false;
        }
      }
    });

    xhr.open("POST", `${apiWritePath}upload/uploadXmls`);

    xhr.send(data);
  },

  CreateJsonStr: function (text, level, keyIndex) {
    var itemNum = level.length;
    var father = new Array(itemNum);
    for (let i = 0; i < itemNum; i++) {
      father[i] = -1;
      for (let j = i; j > -1; j--) {
        if (level[i] - level[j] == 1) {
          father[i] = j;
          break;
        }
      }
    }
    var jsonPart = new Array(itemNum);
    for (let j = 9; j > 0; j--) {
      for (let i = 0; i < itemNum; i++) {
        var ChildStr = "";
        if (level[i] == j) {
          //所有以这个为父级别的先列出
          for (let k = 0; k < itemNum; k++) {
            if (father[k] == i) {
              if (ChildStr.length > 0) {
                ChildStr = ChildStr.substring(0, ChildStr.length - 1) + ",";
                ChildStr = ChildStr + jsonPart[k].substring(1);
              } else {
                ChildStr = jsonPart[k];
              }
            }
          }
          //构造字符串
          if (ChildStr == "") {
            ChildStr = '""';
          }

          jsonPart[i] =
            '{"' +
            i.toString() +
            "_" +
            text[i].trim() +
            ":" +
            keyIndex[i].toString() +
            '":' +
            ChildStr +
            "}";
        }
      }
    }
    var MultiRoot = false;
    for (let i = 0; i < itemNum; i++) {
      if (father[i] == -1) {
        if (this.strJson.length == 0) {
          this.strJson = jsonPart[i];
        } else {
          MultiRoot = true;
          this.strJson = this.strJson + "," + jsonPart[i];
        }
      }
    }
    if (MultiRoot == true) {
      this.strJson = "{" + this.strJson + "}";
    }
  },
};
