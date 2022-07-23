/* eslint-disable jsx-a11y/alt-text */
//浮动窗口
import * as React from "react";
import { Dialog, DialogType, DialogFooter } from "office-ui-fabric-react";
import { PrimaryButton, DefaultButton, ActionButton } from "office-ui-fabric-react";
//import { ContextualMenu } from "office-ui-fabric-react/lib/ContextualMenu";
//import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from "office-ui-fabric-react";
//import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { apiPublicPath, RootPath } from "../../settings";
//import { Consumer } from "../WebAddinContext";
import { connect } from "react-redux";
//import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Link } from "office-ui-fabric-react";
import DialogAlert from "../WebAddinCommon/DynamicModal";
import { login, logout, signup, showModal, hideModal } from "../../actions";
const Cookies = require("js-cookie"); //登录过就不要再注册了
const md5 = require("js-md5");
let signInf = [];
function isPoneAvailable(poneInput) {
  if (!/^1[3456789]\d{9}$/.test(poneInput)) {
    return false;
  } else {
    return true;
  }
}
function isEmail(str) {
  var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  if (re.test(str) !== true) {
    return false;
  } else {
    return true;
  }
}
/*
function isValidReg(chars) {
  var re = /<|>|\[|\]|\{|\}|『|』|※|○|●|◎|§|△|▲|☆|★|◇|◆|□|▼|㊣|﹋|⊕|⊙|〒|ㄅ|ㄆ|ㄇ|ㄈ|ㄉ|ㄊ|ㄋ|ㄌ|ㄍ|ㄎ|ㄏ|ㄐ|ㄑ|ㄒ|ㄓ|ㄔ|ㄕ|ㄖ|ㄗ|ㄘ|ㄙ|ㄚ|ㄛ|ㄜ|ㄝ|ㄞ|ㄟ|ㄢ|ㄣ|ㄤ|ㄥ|ㄦ|ㄧ|ㄨ|ㄩ|■|▄|▆|\*|@|#|\^|\\/;
  if (re.test(chars) === true) {
    return false;
  } else {
    return true;
  }
}
 */
//对字符串进行加密
 
function isValidInf(userInf, checkEmail) {
  //console.log("(userInf  ", userInf);
  //console.log("(userInf ).length", (userInf["code"] + "").length);
  if ((userInf["code"] + "").length < 4) {
    return "验证码错误";
  }
  if (checkEmail === true) {
    console.log("userInf[email]:", userInf["email"]);
    if (isEmail(userInf["email"]) === false) {
      return "邮箱格式不合法";
    }
  }
  if (isPoneAvailable(userInf["phone"]) === false) {
    return "手机格式不合法";
  }
  if ((userInf["psw"] + "").length < 6) {
    return "密码长度不够或者不合法";
  }
  return true;
}
//字符串进行解密
function uncompileStr(code) {
  code = unescape(code);
  var c = String.fromCharCode(code.charCodeAt(0) - code.length);
  for (var i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
  }
  return c;
}
 

class WebAddinSignInOut extends React.Component {
  constructor(props) {
    super(props);
    signInf["phone"] = uncompileStr(Cookies.get("phone"));
    signInf["psw"] =  uncompileStr(Cookies.get("pswen"));
    signInf["email"] = uncompileStr(Cookies.get("email"));
    signInf["code"] ="";
  }
  _dragOptions = {
    moveMenuItemText: "移动",
    closeMenuItemText: "关闭",
    //menu: ContextualMenu
  };
  state = {
    hideEmail: false,
  };
  
  componentDidUpdate(newPros, newState) {
    console.log("trigger:componentDidUpdate");
    //console.log("app_componentDidUpdate", this.props.curUser);

  }
  componentDidMount(){
    //读cookie登陆,发现没有登录时才启动
    //console.log("app_componentDidMount", this.props.curUser);
        /*
      if (this.props.isLoginIn === true) {
        this.setState({ curUser: this.props.curUser, isModalVisible: true, hideEmail: true });
        // this.props.getCookie(res);
      } else {
        this.setState({ curUser: { user_id: "" } ,SelectID:""});
      } ;
      */
  }
  
logoutHandler = (e) => {
  this.props.logout({});
  /*
  handlePost(`${apiPublicPath}users/reglogin/logout`, {}).then((result) => {
    // this.props.history.push("/");
    this.setState({ curUser: { user_id: "" }, isModalVisible: false, hideEmail: true });
    //console.log("logout_ok:",this.state)
  });
  */
};

loginHandler = (userInf, e) => {
  this.regLogin(userInf, false);
};
signHandler = (userInf, e) => {
  this.regLogin(userInf, true);
};
signShowHandler = (e) => {
  //this.setState({ isModalVisible: false });
  this.props.showModal();
};
signHideHandler = (e) => {
 // this.setState({ isModalVisible: true });
  this.props.hideModal();
};

  handleChangePhone = (e, value) => {
    //console.log("sign_up_change_e:",e);
    //console.log("sign_up_change_value:",value);
    signInf["phone"] = value;
    //console.log("this.state:",this.state)
  };

  handleChangePsw = (e, value) => {
    //console.log("sign_up_change_e:",e);
    //console.log("sign_up_change_value:",value);
    signInf["psw"] = value;
  };

  handleChangeCode = (e, value) => {
    signInf["code"] = value;
  };
  handleCodeKeypress = (e ) => {
      
    console.log("handleCodeKeypress_handleCodeKeypress_e:",e);
    if (e!=undefined && e.key === "Enter") {
     
    }
  };
  handleEmailKeypress = (e ) => {
    
     console.log("EmailKeypress_handleCodeKeypress_e:",e);
    if (e!=undefined && e.key === "Enter") {
 
    }
  };

  handleChangeEmail = (e, value) => {
    signInf["email"] = value;
  };

regLogin = (userInf, checkEmail) => {
  const checkInf = isValidInf(userInf, checkEmail);
  if (isValidInf(userInf, checkEmail) === true) {
    let encryptedValues = {};
    encryptedValues = {
      tel: userInf["phone"].replace(/\s+/g, ""),
      password: md5.hex(userInf["psw"] + md5.hex(userInf["psw"])),
      captcha: userInf["code"].replace(/\s+/g, ""),
      email: userInf["email"].replace(/\s+/g, ""),
    };
    if (this.state.isModelLoading) {
      return;
    }
    if (checkEmail === true) {
      //注册
      this.props.signup(encryptedValues);

      /*
      const loginRes = `${apiPublicPath}users/reglogin/register`;
      //console.log(" JSON.stringify(encryptedValues):",  JSON.stringify(encryptedValues));
      handlePost(loginRes, encryptedValues).then((result) => {
        try {
          if (result.success === true) {
            this.setState({ curUser: result, isModalVisible: true, hideEmail: true });
            console.log("checkEmail === true,this.state.curUser:", this.state.curUser);
            //写入本地cookie
            Cookies.set("phone", compileStr(telphone), { expires: 365 });
            Cookies.set("email", compileStr(email), { expires: 365 });
            Cookies.set("pswen", compileStr(userInf["psw"]), { expires: 365 });
          } else {
            DialogAlert.success({
              title: "注册错误",
              content: result.msg,
              time: 2000,
            });
            document.getElementById("captchain").src = `${apiPublicPath}tools/codepic?` + Math.random();
          }
        } catch (e) {
          DialogAlert.success({
            title: "注册错误",
            content: "数据获取错误，请检查网络！",
            time: 2000,
          });
        }
      });
    */
    } else {
      //登录{"tel": "13886186111", "password": "338cedb8182d67647893fea981e3ffac", "deviceid": "husteducntestjames"}
      this.props.login(encryptedValues);

      /*
      const loginRes = `${apiPublicPath}users/reglogin/login`;
      //console.log(" JSON.stringify(encryptedValues):",  JSON.stringify(encryptedValues));
      handlePost(loginRes, encryptedValues).then((result) => {
        try {
          if (result.success === true) {
            this.setState({ curUser: result, isModalVisible: true, hideEmail: true });
             console.log("checkEmail === false,this.state.curUser:", this.state.curUser);
            //写入本地cookie
            Cookies.set("phone", compileStr(telphone), { expires: 365 });
            Cookies.set("email", compileStr(email), { expires: 365 });
            Cookies.set("pswen", compileStr(userInf["psw"]), { expires: 365 });
          } else {
            DialogAlert.success({
              title: "登录错误",
              content: result.msg,
              time: 2000,
            });
            document.getElementById("captchain").src = `${apiPublicPath}tools/codepic?` + Math.random();
          }
        } catch (e) {
          //console.log(e);
          // message.error("数据获取错误，请检查网络！");
          DialogAlert.success({
            title: "登录错误",
            content: "数据获取错误，请检查网络！",
            time: 2000,
          });
        }
      });
      */
    }
//判断是否应该隐藏
console.log("webaddinSigninout_onclick",this.props.user_id)

  } else {
    //显示提示信息
    //alert(checkInf);
    //console.log("userInf:", userInf);
    DialogAlert.success({
      title: "输入错误",
      content: checkInf,
      time: 2000,
    });
  }
};
//onKeyPress={this.handleEmailKeypress(   )}
// onKeyPress={this.handleEmailKeypress(  )}

  render() {
    console.log("websinginout_this.props.isModalVisible:",this.props.isModalVisible);
    return (
          <Dialog
            hidden={!this.props.isModalVisible}
            onDismiss={this.props.hideModal}
            dialogContentProps={{
              type: DialogType.normal,
              closeButtonAriaLabel: "关闭",
              title: "注册登录",
            }}
            modalProps={{
              isBlocking: false,
              styles: { main: { maxWidth: 450 } },
              dragOptions: this._dragOptions,
            }}
          >
            <TextField
              label="手机号"
              onChange={this.handleChangePhone}
             
              required
            />

            <TextField
              label="密码"
              type="password"
              onChange={this.handleChangePsw}
             
              required
            />
            <div className="piccode">
              <div style={{ display: "flex", width: "90px" }}>
                <TextField
                  label="验证码"
                  styles={{ fieldGroup: { width: 100 } }}
                  onChange={this.handleChangeCode}
                  
                  required
                />
              </div>

              <img
                style={{ cursor: "pointer" }}
               // className={styles["changeinImg"]}
                onClick={() =>
                  (document.getElementById("captchain").src = `${apiPublicPath}tools/codepic?` + Math.random())
                }
                id="captchain"
                className="captchain"
                src={`${apiPublicPath}tools/codepic`}
              />
            </div>

            <div hidden={!!this.state.hideEmail}>
              <TextField
                label="Email"
                onChange={this.handleChangeEmail}
              />
            </div>
            <DialogFooter>
              <Link href={RootPath + "FindPsw"}>
                <ActionButton iconProps={{ iconName: "ProtectRestrict" }} allowDisabledFocus></ActionButton>
              </Link>
              <PrimaryButton onClick={()=>this.regLogin(signInf,false)} text="登录" />
              <DefaultButton onClick={()=>this.regLogin(signInf,true )} text="注册" />
            </DialogFooter>
          </Dialog>
        )}
}

const mapState = state => {
 
  return {
    curUser: state.current,
    user_id:  state.current.user_id ,
    isModalVisible: state.modalVisible
  };
};
const mapDispatch = {
    signup,
    login,
    logout,
    showModal,
    hideModal
};

export default connect(
  mapState,
  mapDispatch
)(WebAddinSignInOut);