/* eslint-disable no-unused-vars */
//import {apiPublicPath} from "../../settings";
/* global wps:false */
import {updateStatus} from "./UploadDocContent";

export async function handleFetch(url, options = {}) {
  const defaultOptions = {
    method: "GET",
    credentials: "same-origin"
  };
  /*
  if (path(["method"], options) === "POST") {
    defaultOptions.headers = {
      "Content-Type": "application/json"
    };
  }
  */

console.log("handleFetch_url：", url);
  //const resultOptions = mergeDeepRight(defaultOptions, options);
  try {
    const res = await fetch(url, defaultOptions);
    //checkStatus(res);
    if (typeof res !== "string") {
      if (res !==undefined && typeof res === "object" && res) {
        let result="";
        try {
            result= res.json(); //错误在这里,如果出错，那么会保持result属性
         }catch (e) {
            //message.error("数据请求错误，请检查网络！");
         }
     
        if ((typeof result)!=="object"){
          return {"success":false};
        }else{
          return result;
        }
      }
    } else {
     // message.error("返回数据格式错误，网站可能在维护！");
    }
  } catch (e) {
   // message.error("数据请求错误，请检查网络！");
  }
}
//    credentials: "same-origin",
export  async function handlePost(url, jsonStr) {
 //console.log(" _typeof_jsonStr:", typeof jsonStr);
 //console.log("_json:", jsonStr);
  const defaultOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonStr)
  };
  console.log("handlePost_url：", url);
  //const resultOptions = mergeDeepRight(defaultOptions, options);
  try {
     const res =  await fetch(url, defaultOptions);
     //console.log("handlePost_res：", res);
     if (typeof res !== "string") {
      if (res !==undefined &&  typeof res === "object" && res ) {
        return res.json();
      }
    } else {
      
     //console.log("返回数据格式错误，网站可能在维护！");
     // message.error("返回数据格式错误，网站可能在维护！");
    }
  } catch (e) {
    //message.error("数据请求错误，请检查网络！");
   //console.log("数据请求错误，请检查网络！");
  }
}

export function saveDocByte(newName,xhr,action) {
//wps支持写入本地文件，是否也支持呢
  let blob = new Blob([xhr.response]);
  var reader = new FileReader();
  reader.readAsBinaryString(blob);
  reader.onload = function(){
      //读取完毕后输出结果
     // console.log(this.result);
    if (newName.indexOf("\\")===-1  && newName.indexOf("/")===-1){
      let TempPath =wps.Env.GetTempPath()+ "\\TempSource";  // wpsapp.NormalTemplate.Path;
      if (!wps.FileSystem.Exists(TempPath)){
        wps.FileSystem.Mkdir(TempPath);
      }
        newName=TempPath+"/"+newName;
    }
      wps.FileSystem.writeAsBinaryString(newName,this.result);
      if (action===1){
        //直接打开文档
        if (wps.FileSystem.Exists(newName)){
          wps.WpsApplication().Documents.Open(newName);
          }else{
            updateStatus("下载失败！");
          }
      }
      if (action===2){
        //直接插入文档
        if (wps.FileSystem.Exists(newName)){
          let wpsapp = wps.WpsApplication();
          wpsapp.Selection.Range.InsertFile(newName);
          wps.FileSystem.Remove(newName);
        }
      }      
  }
  // if (navigator.msSaveOrOpenBlob) {
  //   navigator.msSaveOrOpenBlob(blob, newName);
  // } else {
  //   let temp_link = document.createElement('a');
  //   let evt = document.createEvent("HTMLEvents");
  //   evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  //   temp_link.href = URL.createObjectURL(blob);
  //   temp_link.download = newName;
  //   temp_link.type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  //   document.body.appendChild(temp_link);
  //   temp_link.click();
  //   temp_link.remove();
  // }
}
/*
export async function handleDataFetch(url, options) {
  const defaultOptions = { method: "GET", credentials: "same-origin" };

  //缓存机制：https://www.cnblogs.com/jztan/p/8367384.html
  //字节流图缓存：https://blog.csdn.net/programmeryu/article/details/77162186
  //'Cache-control':'max-age=3600,must-revalidate',

  defaultOptions.headers = { "Content-Type": "application/json" };
  const resultOptions = mergeDeepRight(defaultOptions, options);
  try {
    const res = await fetch(url, resultOptions);
    checkStatus(res);
   // console.log("handleDataFetch_result", res);
    return res.json();
  } catch (e) {
    message.error("数据请求错误，请检查网络！");
  }
}
 */

export function synGetFile(url) {
  //console.log(url);
  try {
    var elemIF = document.createElement("iframe");
    elemIF.src = url;
    elemIF.style.display = "none";
    //elemIF.setAttribute("src", 'data:text/plain,');
    document.body.appendChild(elemIF);
    // console.log('elemIF', elemIF);
  } catch (e) {
    // console.log(e);
  }
}
export function iframeNav(url) {
  //console.log(url);
  try {
    var elemIF = document.createElement("iframe");
    elemIF.src = url;
    elemIF.style.display = "none";
    //elemIF.setAttribute("src", 'data:text/plain,');
    document.body.appendChild(elemIF);
    elemIF.click();
    // console.log('elemIF', elemIF);
  } catch (e) {
    // console.log(e);
  }
}
