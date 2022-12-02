/* eslint-disable no-useless-escape */
import React from 'react';
import ribbon from './ribbon';
import "./App.scss";
import { connect } from "react-redux";
import Loadable from "react-loadable";
import { Provider } from "./WebAddinContext";
import WebAddinSignInOut from "./WebAddinSignInOut";
//import Relogin from "./WebAddinReglogin";
import DialogAlert from "./WebAddinCommon/DynamicModal";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
//import { Dialog, DialogType, DialogFooter } from "office-ui-fabric-react/lib/Dialog";
import { apiPublicPath } from "../settings";
import { handlePost, handleFetch } from "./WebAddinCommon";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { checklogin  } from "../actions";
const md5 = require("js-md5");
const Cookies = require("js-cookie");
initializeIcons(); 
/*
              <Route path="/OtherFun" component={WebAddinOtherFun} />
              <Route path="/UserCenter/:id" component={WebAddinUserCenter} />
              <Route path="/UserCenter" component={WebAddinUserCenter} />
              <Route path="/Helper/:id" component={WebAddinHelper} />
              <Route path="/Helper" component={WebAddinHelper} />
              <Route path="/DemoVideo" component={WebAddinDemoVideo} />
              <Route path="/AboutUs" component={WebAddinAboutUs} />
              <Route path="/Reglogin" component={WebAddinReglogin} />
              <Route path="/FindPsw" component={WebAddinFindPsw} />
*/
const loadingComponent = (props) => {
  if (props.error) {
    return (
      <div align="center" marginTop="50px" marginBotton="50px">
        <h2>
          对不起，加载遇到错误，请刷新界面！<button onClick={props.retry}>刷新</button>
        </h2>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div align="center" marginTop="50px" marginBotton="50px">
        <h2>
          对不起，加载超时，请刷新界面！ <button onClick={props.retry}>重试</button>
        </h2>
      </div>
    );
  } else if (props.pastDelay) {
    return <p />;
  } else {
    return <p />;
  }
};

const TaskHome = Loadable({
  loader: () => import("./WebAddinTaskPane"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});
const WebAddinDemoVideo = Loadable({
  loader: () => import("./WebAddinDemoVideo"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});
const WebAddinWriter = Loadable({
  loader: () => import("./WebAddinWriter"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});
const WebAddinAboutUs = Loadable({
  loader: () => import("./WebAddinAboutUs"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});
const WebAddinCompose = Loadable({
  loader: () => import("./WebAddinCompose"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});

export const fillFinanceTable = Loadable({
  loader: () => import("./WebAddinWriter/WriteComponents/pages/fillFinanceTable"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});


export const WebAddinTemplate = Loadable({
  loader: () => import("./WebAddinCompose/WebAddinTemplate"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});

export const WebAddinTplDetail = Loadable({
  loader: () => import("./WebAddinCompose/WebAddinTplDetail"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});
export const WebAddinGenTpl = Loadable({
  loader: () => import("./WebAddinCompose/WebAddinGenTpl"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});
 
export const WebAddinWriterFillTable = Loadable({
  loader: () => import("./WebAddinWriter/WriteComponents/pages/fillTable"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});

export const WebAddinWriterRepository = Loadable({
  loader: () => import("./WebAddinWriter/WriteComponents/pages/Repository"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});

export const WebAddinWriterMergeDocs = Loadable({
  loader: () => import("./WebAddinWriter/WriteComponents/pages/merge"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});

export const WebAddinWriterExpand = Loadable({
  loader: () => import("./WebAddinWriter/WriteComponents/pages/expand"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});

export const WebAddinWriterHeader = Loadable({
  loader: () => import("./WebAddinWriter/WriteComponents/pages/header"),
  loading: loadingComponent,
  delay: 1500,
  timeout: 10000,
});
/*
const WebAddinOtherFun = Loadable({
    loader: () => import("./WebAddinOtherFun"),
    loading: loadingComponent,
    delay: 1500,
    timeout: 10000
});

const WebAddinUserCenter = Loadable({
    loader: () => import("./WebAddinUserCenter"),
    loading: loadingComponent,
    delay: 1500,
    timeout: 10000
});

const WebAddinReglogin = Loadable({
    loader: () => import("./WebAddinReglogin"),
    loading: loadingComponent,
    delay: 1500,
    timeout: 10000
});

const WebAddinFindPsw = Loadable({
    loader: () => import("./WebAddinFindPsw"),
    loading: loadingComponent,
    delay: 1500,
    timeout: 10000
});

const MoblieResetPsw = Loadable({
    loader: () => import("./WebAddinResetPsw"),
    loading: loadingComponent,
    delay: 1500,
    timeout: 10000
});
*/


// function Str2Uint16(str){
//   //假设字符串”abc“ length=3,使用16位，则每一个字母占据2字节，总字节为length乘以2
//   var arraybuffer =new ArrayBuffer(str.length*2);
//   var view = new Uint16Array(arraybuffer);
//   for(var i=0,l=str.length;i<l;i++){
//       view[i] = str.charCodeAt(i);
//   }
//   return view;
// }   

// function Str2Uint8(str){
//   //假设字符串”abc“ length=3,使用16位，则每一个字母占据2字节，总字节为length乘以2
//   var arraybuffer =new ArrayBuffer(str.length);
//   var view = new Uint8Array(arraybuffer);
//   for(var i=0,l=str.length;i<l;i++){
//       view[i] = str.charCodeAt(i);
//   }
//   return view;
// }    
 
// export function readwrite() {

//     let data = wps.FileSystem.readAsBinaryString("d:\\1.docx")
//     //let file = new window.File([blob], "no_fileName", {type: blob.type})
// //     var link = document.createElement("a"); // Or maybe get it from the current document
// // link.href = blob;
// // link.download = "aDefaultFileName.docx";
// // link.innerHTML = "Click here to download the file";
// // document.body.appendChild(link); // Or append it whereever you wan
//    let buffer = Buffer.from(data);
//    console.log("data.length:",data.length);
//    console.log("buffer:",buffer.buffer);
//    var blob = new Blob([Str2Uint8(data)], {
//     type: 'application/octet-stream'
//     });
//     let file = new window.File([blob], "lite.docx", {type: blob.type})
//     //wps.alert("blob.size"+file.size);
//     console.log("file:",file); 
//     console.log("msSaveOrOpenBlob:",navigator); 
//     //wps.FileSystem.writeAsBinaryString("d:\\2.docx",data)
//   let newName= "d:\\2.docx"

//   var reader = new FileReader();
//   reader.readAsBinaryString(blob);
//   reader.onload = function(){
//       //读取完毕后输出结果
//      // console.log(this.result);
//       wps.FileSystem.writeAsBinaryString(newName,this.result);
//       console.log("this.result");
//   }
  
//   if (navigator.msSaveOrOpenBlob) {
    
//     navigator.msSaveOrOpenBlob(blob, newName);
    
//   } else {
//     let temp_link = document.createElement('a');
//     let evt = document.createEvent("HTMLEvents");
//     evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
//     temp_link.href = URL.createObjectURL(blob);
//     temp_link.download = newName;
//     temp_link.type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
//     document.body.appendChild(temp_link);
//     temp_link.click();
//     temp_link.remove();
//   }

// }
export function arrayBufferToBase64(buffer) {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // readwrite();
    console.log("init ribbon");
    window.ribbon = ribbon;
  }
  
  componentDidUpdate(newPros, newState) {
    //console.log("trigger:componentDidUpdate");
   // console.log("app_componentDidUpdate", this.props.curUser);


  }
  componentDidMount() {
    if (this.props.user_id===undefined){
      console.log("app_componentDidMount")
      this.props.checklogin();
    }

    //读cookie登陆,发现没有登录时才启动
    //自动登录，要写入到action中
    /*
    handleFetch(`${apiPublicPath}users/reglogin/index`, { method: "GET" }).then((res) => {
      if (res !==undefined && res.success === true) {
        this.setState({ curUser: res, hideSignDlg: true, hideEmail: true });
        // this.props.getCookie(res);
      } else {
        this.setState({ curUser: { user_id: "" } });
      }
    });
       

      if (this.props.isLoginIn === true) {
        this.setState({ curUser: this.props.curUser, isModalVisible: true, hideEmail: true });
         
      } else {
        this.setState({ curUser:"" ,SelectID:""});
      } ;

      console.log("app_componentDidMount_this.props.curUser", this.props.curUser);
      console.log("app_componentDidMount_state", this.state);
      */
     
  }
    
  selectData = (e) => {
    this.setState({ SelectID: e });
    console.log("selectData_e", e);
    console.log("app_componentDidMount_this.props.curUser", this.props.curUser);
    console.log("app_componentDidMount_state", this.state);
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    Cookies.set("FinanceYear",e);
  };
  useData = (e) => {
    console.log("app_componentDidMount_this.props.curUser", this.props.curUser);
    console.log("app_componentDidMount_state", this.state);
    console.log("read cookie",Cookies.get("FinanceYear"))
  };
  render() {
    //如果在浏览器打开网页，那么会显示下面内容
    //之前的结构就不修改了
    return (
      
      <div className="App">
        <Provider
          value={{
            state: this.state,
            selectData: this.selectData,
            useData:this.useData
          }}
        >
          <Router>
            <Switch>
              <Route exact path="/" component={TaskHome} />
              <Route path="/DemoVideo" component={WebAddinDemoVideo} />
              <Route path="/AboutUs" component={WebAddinAboutUs} />
              <Route path="/Compose" component={WebAddinCompose} />
              <Route path="/Writer" component={WebAddinWriter} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Router>
          <WebAddinSignInOut />
         
          </Provider>
      </div>
    );
  }
}
 

const mapState = state => {
 
  return {
    curUser: state.current,
    user_id:  state.current.user_id ,
    isModalVisible: state.modalVisible
  };
};
const mapDispatch = {
  checklogin,
};

export default connect(
  mapState,
  mapDispatch
)(App);
 