/* global wps:false */
//import axios from "axios";
import { apiPublicPath } from "../../../settings";
import { handlePost, saveDocByte } from "../../WebAddinCommon";
//const iconv = require('iconv-lite')
const Cookies = require("js-cookie");
export function arrayBufferToBase64(buffer) {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
export function updateStatus(message) {
  let report = document.getElementById("status");
  //console.log("updateStatus_report",report);
  //console.log("updateStatus_message",message);
  if (report !== null) {
    report.innerHTML = message;
  }
}

// function checkName(inputvalue) {
//   let str = inputvalue.toString();
//   let checked = "";
//   let spStr = "￥#$~!@%^&*();'\"?><[]{}\\|,:/=+—'";
//   for (let i = 0; i < str.length; i++)
//     if (spStr.indexOf(str.charAt(i)) !== -1) {
//     } else {
//       checked = checked + str.substr(i, 1);
//     }
//   return checked;
// }
// function sendSlice(slice, state, url, action, fileName) {
//   let data = slice.data;
//   // If the slice contains data, create an HTTP request.
//   if (data) {
//     // Encode the slice data, a byte array, as a Base64 string.
//     // NOTE: The implementation of myEncodeBase64(input) function isn't
//     // included with this example. For information about Base64 encoding with
//     // JavaScript, see https://developer.mozilla.org/docs/Web/JavaScript/Base64_encoding_and_decoding.
//     //var fileData = myEncodeBase64(data);
//     let base64Str = arrayBufferToBase64(data);
//     let fileData = new FormData();
//     fileData.append("docCnt", base64Str);
//     fileData.append("file_ext", ".docx");
//     //formData = JSON.stringify({ "docCnt": base64Str });
//     // Create a new HTTP request. You need to send the request
//     // to a webpage that can receive a post.
//     let xhr = new XMLHttpRequest();
//     // Create a handler function to update the status
//     // when the request has been sent.
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           //updateStatus("发送了 " + slice.size + " 个字节");
//           action(xhr, fileName);
//         } else {
//           updateStatus("上传失败,检查上传地址是否正确" + xhr.responseText);
//         }
//       }
//     };

//     xhr.open("POST", url, true);
//     //console.log("doc_id", state.doc_id);
//     fileData.append("doc_id", state.doc_id);
//     xhr.send(fileData);
//   }
// }
function Str2Uint8(str){
  //假设字符串”abc“ length=3,使用16位，则每一个字母占据2字节，总字节为length乘以2
  var arraybuffer =new ArrayBuffer(str.length);
  var view = new Uint8Array(arraybuffer);
  for(var i=0,l=str.length;i<l;i++){
      view[i] = str.charCodeAt(i);
  }
  return view;
}   
function updateDirect(url, useType, action, user_id, fileName) {
  console.log("updateDirect_fileName:", fileName);
  if (fileName === "") {
    fileName = "未命名.docx";
  }
  console.log("updateDirect_start_fileName:", fileName);
  //wps.alert(fileName);
  try {
    //使用axios上传文件

    //  let formdata = new FormData();
    //  formdata.append("file", fileName) ;
    //  formdata.append("user_id", user_id) ;
    //   wps.alert(formdata);
    //  axios({
    //      url:url,
    //      method: 'post',
    //      headers:{'Content-Type':'multipart/form-data'},
    //      data:formdata
    //  }).then(
    //      request =>{
    //          wps.alert("成功了：" ,request.data);
    //          console.log(request.data)
    //      },
    //      error =>{
    //          wps.alert("失败了" ,error.data);
    //      }
    //  )
      
    if (!wps.FileSystem.Exists(fileName)) {
      wps.alert("没有找到文件：", fileName);
    } else {
      //formData = JSON.stringify({ "docCnt": base64Str });
      // Create a new HTTP request. You need to send the request
      // to a webpage that can receive a post.
      let fileData = new FormData();
      // var blob = new Blob([wps.FileSystem.readAsBinaryString(fileName)], {
      //   type: 'application/octet-stream'
      //   });
      var blob = new Blob([Str2Uint8(wps.FileSystem.readAsBinaryString(fileName))], {
        type: 'application/octet-stream'
        });
     let file = new window.File([blob], "lite.docx", {type: blob.type})
      //wps.alert("blob.size"+file.size);
      
      fileData.append("file", file);
      fileData.append("user_id", user_id);
      //console.log(fileData);
      let xhr = new XMLHttpRequest();
      // Create a handler function to update the status
      // when the request has been sent.
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
          if (xhr.responseText.length>35){
            wps.alert("上传出错了："+xhr.responseText);
          }else{
            action(xhr, fileName);
          }
            //如果xhr.responseText中有false，那么不处理
          } else {
            updateStatus("上传失败,检查上传地址是否正确" + xhr.responseText);
          }
        }
      };
      //wps.alert("上传文件：", fileData);
      xhr.open("POST", url,true);
      
      xhr.send(fileData);
    }
  } catch {
    // console.log("Error: " + JSON.stringify(error));
  }
}

export function UploadDocContent(url, useType, user_id, action) {
  let wpsapp = wps.WpsApplication();
  let docName = wpsapp.ActiveDocument.FullName;
  let needbeDelte=false; 
  if (!wps.FileSystem.Exists(docName)) {
    let docxml = wpsapp.ActiveDocument.WordOpenXML;
    let newdoc = wpsapp.Documents.Add(null, null, 0, false);
    
    let TempPath =wps.Env.GetTempPath()+ "\\TempDoc";  // wpsapp.NormalTemplate.Path;
    if (!wps.FileSystem.Exists(TempPath)){
      wps.FileSystem.Mkdir(TempPath);
    }
    docName = TempPath + "\\TempDoc.docx"; //linux下分隔符可能有问题
    newdoc.Range(0, 0).InsertXML(docxml);
    needbeDelte=true;
    newdoc.SaveAs2(docName,12,null,null,false);
    newdoc.Close(false);
  }
  try {
    updateDirect(url, useType, action, user_id, docName);
    if (needbeDelte===true){
      try {
        wps.FileSystem.Remove(docName);
      } catch {}
    }
  } catch {}
}

function RandomName(length) {
  const data =
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",
      "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
      "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
      "s", "t", "u", "v", "w", "x", "y", "z"];
  let nums = "";
  for (let i = 0; i < length; i++) {
    const r = parseInt(Math.random() * 61, 10);
    nums += data[r];
  }
  return nums;
}
export function composeDocInsert(state, tplData, xhr, fileName) {
  //启动排版，并下载打开！cores/Composeext/${fileId}/${tempId}/${composeOpt}/${comptype}`);
  console.log("composeInsert_fileName", fileName);
  const newName = fileName.slice(0, fileName.length - 5) +RandomName(12)+ ".aidocx.docx";
  console.log("composeInsert_newName", newName);
  let tpl_id = tplData.id;
  //let actiontype = this.state.mainInf.searchType;
  let docIndex = Cookies.get("ComposeGetType");
  console.log("schema_direct_docIndex:", docIndex);
  if (docIndex === undefined) {
    docIndex = 1;
  }
  if (docIndex < 1) {
    docIndex = 1;
  }

  let optioninf = Cookies.get("ComposeSet");
  if (optioninf === undefined) {
    optioninf = "111111116";
  }
  console.log("schema_direct_optioninf：", optioninf);
  // console.log("ckserial：", NewData.ckserial.join(""));
  if (tplData !== undefined) {
    if (tplData.ownerid !== undefined) {
      if (tplData.ownerid === "0") {
      } else {
        tpl_id = `${tplData.ownerid}_${tplData.id}`;
      }
    }
  }
  const user_id = state.curUser.user_id;
    let data = {};
    data.action = "1";
    data.doc_id = JSON.parse(xhr.responseText).id;
    data.tpl_id = tpl_id;
    data.options = optioninf;
    handlePost(`${apiPublicPath}cores/Composeext`, data).then(result => {
      if (result.success === true) {
        //插入结果！
        console.log("composeInsert_finished_extend_data_插入结果:", data);
        //调用offcie webapi
        updateStatus("排版完成，正在下载");
        console.log("InsertSource_path:", result.doc_id);
        let fileData = new FormData();
        fileData.append("numName", 1);
        fileData.append("ownerid", user_id);
        fileData.append("tpl_id", tpl_id);
        fileData.append("index", docIndex);
        fileData.append("doc_id", result.doc_id);
        // var id = "Base64DocxFile.txt";
        let url = `${apiPublicPath}tools/downresult/downInsert`;
        let xhr = new XMLHttpRequest();
        // xmlHttp.withCredentials = true;
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            updateStatus("下载完成");
            saveDocByte(newName, xhr,1);
          } else {
            if (  xhr.status !== 200) {
            updateStatus("正在下载中")}}
        };
        xhr.open("POST", url, true); //同步方式请求
        xhr.responseType = "arraybuffer";
        xhr.send(fileData);
      }
      //this.setState({});
    },
    () => {}
  );
}
