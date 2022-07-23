/* eslint-disable jsx-a11y/alt-text */
import React from "react";
//import { Pivot, PivotLinkFormat, PivotLinkSize } from "office-ui-fabric-react/lib/Pivot";
import { TooltipHost } from "office-ui-fabric-react/lib/Tooltip";
import { ActionButton } from "office-ui-fabric-react/lib/Button";
import logopng from "../../assets/aidocx-logo.png";
import {   apiPublicPath,RootPath } from "../../settings";
//import WebAddinSignIn from "components/WebAddinReglogin";
//import styles from "./WebAddinHeader.scss";
//const personAdress = new Array("/Compose/genTpl");
//import { Consumer } from "../WebAddinContext";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { connect } from "react-redux";
import { login, logout, signup, showModal, hideModal } from "../../actions";
//import { Link } from "office-ui-fabric-react/lib/Link";
import {handlePost} from "../WebAddinCommon";
const Cookies = require("js-cookie");
//const myImg = src => <img src={`${src}`} className="am-icon am-icon-xs" alt="" />;
const linkAdress = new Array("/Compose");
let btnClr= {
  backGrClr1: "#0078D4",
  frontClr1: "#ffffff",
  backGrClr2: "#ffffff",
  frontClr2: "#0078D4",
};
class WebAddinHeader extends React.Component {

  onLinkClick = item => {
    if (item.props.itemKey === 0) {
      Cookies.set("composing", false, { expires: 365 });
    }
    this.props.history.push({ pathname: linkAdress[item.props.itemKey], state: {} });
    //console.log(item.props.headerText);
  };
  onComposeClick = item => {
    btnClr={
      backGrClr2: "#0078D4",
      frontClr2: "#ffffff",
      backGrClr1: "#f3f2f1",
      frontClr1: "#0078D4",
    };
    this.props.history.push({ pathname: linkAdress[0], state: {} });

    //console.log(item.props.headerText);
  };
  onMainClick = item => {
    Cookies.set("composing", false, { expires: 365 });
    this.props.history.push({ pathname: "/TaskHome", state: {} });
  };

  onPersonSchemaClick = (curState, e) => {
    btnClr={
      backGrClr1: "#0078D4",
      frontClr1: "#ffffff",
      backGrClr2: "#f3f2f1",
      frontClr2: "#0078D4",
    };
    this.props.history.push({ pathname: "/Compose/genTpl", state: curState });

  };
  componentDidMount(){
    //let report = document.getElementById("status");
   // console.log("schema_updateStatus_report",report);
  }

  handleAvatarClick = (state, e) => {
    let url="_UserCenter_profile";
    if (state.curUser.user_id!==""){
      const data = {};
      data.tel = state.curUser.tel;
      data.user_id = state.curUser.user_id;
      handlePost(`${apiPublicPath}users/reglogin/addtoken`, data).then(
          result => {
            if (result.success) {
              let fullurl=RootPath+'LoginOnce/tel/'+state.curUser.tel + '/ID/' +state.curUser.user_id+ '/direct/'+url;
              console.log("fullurl:", fullurl);
              window.open(fullurl);
            }
          },
          error => {}
      );
    }
  };
 
  render() {
    const calloutProps = { gapSpace: 0 };
    const hostStyles = { root: { display: "inline-block", paddingRight: "10px" } };
     //usersAvatar=usersAvatar.replace('//','/');
    console.log("webaddinheader_",this.props.curUser.user_id);
    return (
     
       
          <div className="checkTop">
            <Stack horizontal horizontalAlign="start" tokens={{ childrenGap: 5 }} verticalAlign="center">
              <Stack.Item>
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: "5px",
                    marginTop: "2px",
                    float: "left",
                    cursor: "pointer"
                  }}
                  onClick={this.onMainClick}
                >
                  <img src={logopng} height="45px" />
                </div>
              </Stack.Item>
              <Stack.Item grow>
                <div style={{fontSize:"16px",color:"#0078D4"}} id="status"></div>
              </Stack.Item>
              {( this.props.curUser.user_id === undefined) ? (
                <ActionButton
                  iconProps={{ iconName: "AddFriend" }}
                  onClick={()=>this.props.showModal()}
                  allowDisabledFocus
                ></ActionButton>
              ) : (
                <div style={{ marginRight: "10px" }}>
                  <span
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      display: "inline-flex",
                      position: "relative",
                      top: "6px"
                    }}
                  >

                      <span style={{ display: "inline-block", minWidth: "30px", maxWidth: "60px", overflow: "hidden" }}>
                        <TooltipHost
                          content={"查看用户：" + this.props.curUser.username}
                          id="headerUser"
                          calloutProps={calloutProps}
                          styles={hostStyles}
                        >
                          <img onClick={this.handleAvatarClick.bind(this,this.props)} src={ (`${RootPath}`).slice(0,(`${RootPath}`).length-1)+`${apiPublicPath}users/avatar?user_id=` + this.props.curUser.user_id+"&random="+ Math.random()  } className="userIcon" alt="" />
                        </TooltipHost>
                      </span>

                  </span>
                  <div
                      style={{
                        display: "inline-block",
                        float: "left",
                        cursor: "pointer",
                        marginRight: "8px",
                        padding: 8,
                        backgroundColor:btnClr.backGrClr1  ,
                        color: btnClr.frontClr1,
                      }}
                      onClick={this.onComposeClick.bind(this)}
                  >
                    排版
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      float: "left",
                      cursor: "pointer",
                      marginRight: "8px",
                      padding: 8,
                      backgroundColor:btnClr.backGrClr2  ,
                      color: btnClr.frontClr2,
                    }}
                    onClick={this.onPersonSchemaClick.bind(this, this.props)}
                  >
                    方案
                  </div>
                  <TooltipHost
                      content={"单击退出！"}
                  >
                    <ActionButton
                        iconProps={{ iconName: "SignOut" }}
                        onClick={()=>{this.props.logout({})}}
                        allowDisabledFocus
                    >
                    </ActionButton>
                  </TooltipHost>
                </div>
              )}
            </Stack>
          </div>
        )}
  
}
 
const mapState = state => {
 
  return {
    curUser: state.current,
    user_id: {user_id: state.current.user_id},
    isLoginIn: !!state.current.username,
    isModalLoading: state.isLoading,
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
)(WebAddinHeader);