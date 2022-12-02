import React, { Component } from "react";

import Button from "antd/es/button";

/* global wps:false */

class Merge extends Component {
  // ComineDocContent(url, useType, user_id, action) {
  //   let wpsapp = wps.WpsApplication();
  //   let docOpend = [];
  //   let documents = wpsapp.Documents;
  //   let docNum = documents.Count;
  //   console.log("test wpsapp.Documents:", documents);
  //   for (let i = 1; i <= docNum; i++) {
  //     //console.log("wpsapp.Documents[i].WordOpenXML:",documents.Item(i).WordOpenXML);
  //     docOpend.push(wpsapp.Documents.Item(i).WordOpenXML);
  //   }
  //   try {
  //     let newdoc = documents.Add(null, null, 0, true);
  //     newdoc.Activate(); //你加粗的问题，是不是需要添加这句代码？
  //     //let TempPath =wps.Env.GetTempPath()+ "/TempDoc";  // wpsapp.NormalTemplate.Path;
  //     //TempPath = TempPath.replace (/\\/g, '/');
  //     //let docName = TempPath + "/TempDoc" +(new Date()).getTime().toString() +  documents.Count +".docx"; //linux下分隔符可能有问题
  //     //遍历得到所有的xml，并插入到新加的文档中，在开头插入，以后可以完善
  //     for (let i = 0; i < docNum; i++) {
  //       console.log(docOpend[i]);
  //       newdoc.Range(0, 0).InsertXML(docOpend[i]);
  //     }

  //     //newdoc.SaveAs2(docName,12,null,null,false);
  //     // newdoc.Close(false);
  //     //newdoc.Visible=true;

  //     console.log("newdoc_text:", newdoc);
  //   } catch(err) {}
  // }

  // handleClick(param) {
  //   // console.log(param)
  //   handle(param);
  // }

  ComineDocContent(url, useType, user_id, action) {
    let wpsapp = wps.WpsApplication();
    let docOpend = [];
    let documents = wpsapp.Documents;
    let docNum = documents.Count;
    console.log("test wpsapp.Documents:", documents);
    for (let i = 1; i <= docNum; i++) {
      //console.log("wpsapp.Documents[i].WordOpenXML:",documents.Item(i).WordOpenXML);
      docOpend.push(wpsapp.Documents.Item(i).WordOpenXML);
    }
    try {
      let newdoc = documents.Add(null, null, 0, true);
      newdoc.Activate(); //你加粗的问题，是不是需要添加这句代码？
      //let TempPath =wps.Env.GetTempPath()+ "/TempDoc";  // wpsapp.NormalTemplate.Path;
      //TempPath = TempPath.replace (/\\/g, '/');
      //let docName = TempPath + "/TempDoc" +(new Date()).getTime().toString() +  documents.Count +".docx"; //linux下分隔符可能有问题
      //遍历得到所有的xml，并插入到新加的文档中，在开头插入，以后可以完善
      for (let i = 0; i < docNum; i++) {
        console.log(docOpend[i]);
        newdoc.Range(0, 0).InsertXML(docOpend[i]);
      }

      //newdoc.SaveAs2(docName,12,null,null,false);
      // newdoc.Close(false);
      //newdoc.Visible=true;

      console.log("newdoc_text:", newdoc);
    } catch (err) {}
  }

  // handleClick(param) {
  //   // console.log(param)
  //   handle(param);
  // }

  base64toBlob(base64, type) {
    // 将base64转为Unicode规则编码
    let bstr = atob(base64, type),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n); // 转换编码后才可以使用charCodeAt 找到Unicode编码
    }
    return new Blob([u8arr], {
      type,
    });
  }

  onSelectDoc = (event) => {
    let DocNum = event.target.files.length;
    console.log("event.target.files num:", DocNum);
    if (DocNum > 0) {
      let wpsapp = wps.WpsApplication();
      let TempPath = wps.Env.GetTempPath() + "/TempDoc";
      TempPath = TempPath.replace(/\\/g, "/");
      if (!wps.FileSystem.Exists(TempPath)) {
        wps.FileSystem.Mkdir(TempPath);
      }
      let newdoc = wpsapp.Documents.Add(null, null, 0, true);
      for (let j = 0; j < DocNum; j++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          let newName =
            TempPath +
            "/TempDoc" +
            new Date().getTime().toString() +
            e.total +
            ".docx"; //linux下分隔符可能有问题
          console.log("byteArr:", e.target.result);
          wps.FileSystem.writeAsBinaryString(newName, e.target.result); //等价于复制数据,也可以预防文件被占用问题
          if (wps.FileSystem.Exists(newName)) {
            //wpsapp.Selection.Range.InsertFile(newName); //也应该可以
            newdoc.Range(0, 0).InsertFile(newName);
            //console.log(newName);//保留，方便检查
            wps.FileSystem.Remove(newName);
          }
        };
        reader.readAsBinaryString(event.target.files[j]);
      }
    }
  };
  render() {
    return (
      <div style={{ margin: "10px 10px 50px 10px", padding: "10px" }}>
        <h2>文档合并</h2>
        <Button onClick={this.ComineDocContent}>合并当前打开的文档</Button>
        <br />
        <br />
        <p>合并目录下文件示例 </p>
        <input
          type="file"
          id="docfile"
          multiple="multiple"
          accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={this.onSelectDoc}
        />
        {/* <Btn text="选择文件" />
          <div>
            <p>文件一：</p>
            <p>文件二：</p>
          </div>
          <Btn text="合并文件" /> */}
      </div>
    );
  }
}

export default Merge;
