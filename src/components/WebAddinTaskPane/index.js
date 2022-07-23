import * as React from "react";
import { connect } from "react-redux";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import { Link } from "office-ui-fabric-react/lib/Link";
import "./WebAddinTaskPane.scss";
//import WebAddinHeader from "../WebAddinHeader";
import homeIntro from "../../assets/home-intro-box.png";
import {Consumer} from "../WebAddinContext";
import {handlePost} from "../WebAddinCommon";
import {apiPublicPath,RootPath} from "../../settings";
/* global wps:false */
const Cookies = require("js-cookie");
let optShowMain = false;
class Header extends React.Component {
  render() {
    const { title, logo, message } = this.props;
    return (
      <section className="ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500">
        <img width="180" height="180" src={logo} alt={title} title={title} />
        <h2 className="ms-fontWeight-light ms-fontColor-neutralPrimary">{message}</h2>
      </section>
    );
  }
}
class HeroList extends React.Component {
  onLinkClick = url => {
    console.log("TaskPane_HeroList.onLinkClick_ this.props.curUser:", this.props.curUser);
    //自动登录
    if (this.props.curUser.user_id!==""){
      const data = {};
      data.tel = this.props.curUser.tel;
      data.user_id = this.props.curUser.user_id;
      handlePost(`${apiPublicPath}users/reglogin/addtoken`, data).then(
          result => {
            if (result.success) {
              window.open(RootPath+'LoginOnce/tel/'+this.props.curUser.tel + "/ID/"+this.props.curUser.user_id+ "/direct/"+url);
            }
            this.setState({});
          },
          error => {}
      );
    }else{
     window.open(RootPath.slice(0,RootPath.length-1)+ url.replace(/_/g,"/"));
    }
  };

  render() {
    const { children, items } = this.props;
    const listItems = items.map((item, index) => (
      <li className="ms-ListItem" key={index}>
        <i className={`ms-Icon ms-Icon--${item.icon}`}></i>
        <Link href={"#"}>
          <span onClick={this.onLinkClick.bind(this,item.url)} className="ms-font-m ms-fontColor-neutralPrimary">{item.primaryText}</span>
        </Link>
      </li>
    ));
    return (
      <div className="ms-welcome__main">
        <ul className="ms-List ms-welcome__features ms-u-slideUpIn10">{listItems}</ul>
        {children}
      </div>
    );
  }
}
class TaskHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      ShowMain: Cookies.get("composing") === "true"
    };
  }

 componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Ribbon",
          primaryText: "Word百宝箱更强大",
          url: "_WordAddin"
        },
        {
          icon: "Unlock",
          primaryText: "排版客户端更方便",
          url: "_PcClient"
        },
        {
          icon: "Design",
          primaryText: "详情:AiDocx.com",
          url: "_"
        }
      ],
      ShowMain: Cookies.get("composing")
    });

    if (Cookies.get("composing") === "true") {
      //console.log("this.props.history_taskpane:",this.props.history);
      this.props.history.push({ pathname: "/Compose", state: {} });
    }
  }

  onComposeClick = item => {
    //console.log('this.state.ShowMa:',this.state.ShowMain);
    Cookies.set("composing", optShowMain, { expires: 365 });
    this.props.history.push({ pathname: "/Compose", state: {} });
  };

  onTestClick = item => {
    //console.log('this.state.ShowMa:',this.state.ShowMain);
    wps.alert("test click");
    let Selection = wps.WpsApplication().Selection;
    Selection.TypeText("测试");
    Selection.SetRange(2, 2);
    Selection.TypeText("插入");
    Selection.SetRange(4, 4);
    Selection.TypeParagraph();
    Selection.TypeText("第二段");
    Selection.SetRange(8, 8);
    Selection.MoveUp(5, 1, 0);
    Selection.Style = "标题 1";
   };

  TglonChange = (ev, checked) => {
    //console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
    Cookies.set("composing", checked, { expires: 365 });
    optShowMain = checked;
    this.setState({ ShowMain: checked });
  };
  render() {
    //let btnStyles= IButtonStyles;
    let btnStyles = {
      root: { textAlign: "center", fontSize: "16px", height: "42px", width: "160px" }
    };
    /*
    if (!isOfficeInitialized) {
    //直接跳转到主页
      return (
        <Progress title={title} logo="../../assets/logo-filled.png" message="Please sideload your addin to see app body." />
      );
    }

                <PrimaryButton styles={btnStyles} onClick={this.onTestClick}>
              测试
            </PrimaryButton>
    */
    //console.log("this.props.history:", this.props.history);
    return (
        
      <div className="ms-welcome">
        <Header logo={homeIntro} title={this.props.title} message="长文档智能排版" />
        <HeroList items={this.state.listItems} curUser={this.props.curUser}>
          <p className="ms-font-l">
            查找到方案后<b>一键智能排版</b>
          </p>
          <div>
            <PrimaryButton styles={btnStyles} onClick={this.onComposeClick}>
              立即体验
            </PrimaryButton>
          </div>
          <Toggle
            className="ms-welcome-toggle"
            label="启动就进入智能排版"
            inlineLabel
            //  onText="On"
            //  offText="Off"
            defaultChecked={optShowMain}
            onChange={this.TglonChange}
          />
        </HeroList>
      </div>
          )}
}
 
const mapState = state => {
 
  return {
    curUser: state.current,
   
  };
};
 
export default connect(
  mapState,
 
)(TaskHome);
 
