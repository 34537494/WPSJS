import React from "react";

import {
  DocumentCard,
  DocumentCardActions,
  DocumentCardActivity,
  DocumentCardLocation,
  DocumentCardTitle,
} from "office-ui-fabric-react/lib/DocumentCard";
//import { ImageFit } from 'office-ui-fabric-react/lib/Image';
//import styles from "./WebAddinSchema.scss";
import { Consumer } from "../../../WebAddinContext";
import { handlePost } from "../../../WebAddinCommon";
import { apiPublicPath, RootPath } from "../../../../settings";
import confirmDialog from "../../../WebAddinCommon/DynamicConfirm";
import QRCode from "qrcode.react";
import copy from "copy-to-clipboard/index";
import {
  UploadDocContent,
  composeDocInsert,
} from "../../../WebAddinCommon/UploadDocContent";
//const Cookies = require("js-cookie");

let clickType = 0;

export class WebAddinSchema extends React.PureComponent {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {
    curUser: { user_id: "" },
    hideDialog: true,
    addSchema: { id: "", ownerid: "" },
  };

  componentDidUpdate(prevProps) {
    //console.log("WebAddinSchema_componentDidMount_addSchema:", this.state.addSchema.id);

    this.addDirect();
  }

  handleAddSchema(showSignUp, curState, schemaData) {
    // console.log("addShema_curValue", curValue);
    //console.log("addSchema_schemaData_ownerid:", schemaData.ownerid);
    clickType = 2;
    let curUser = "";

    if (curState !== undefined) {
      curUser = curState.curUser;
    }
    //console.log("addSchema_user_id:", curUser.user_id);
    if (curUser.user_id === "") {
      //console.log("addSchema_user_id:", curUser.user_id);
      showSignUp(); //直接打开登陆窗口
    }

    if (schemaData.ownerid !== "") {
      //console.log("addSchema_schemaData:", schemaData.ownerid);
      this.setState({ curUser: curUser, addSchema: schemaData });
    }
    //console.log("after_sign_user_id:",user_id);
    //console.log("after_sign_this.propshistory:",this.props.history);
  }

  addDirect() {
    //console.log("WebAddinSchema_addDirect_start:", this.state.addSchema.id);

    if (this.state.curUser.user_id !== "" && this.state.addSchema.id !== "") {
      let tempid = this.state.addSchema.id;
      const _history = this.props.history;
      const _state = this.state;
      if (this.state.addSchema.ownerid !== "0") {
        tempid = `${this.state.addSchema.ownerid}_${tempid}`;
      }
      //console.log("addtocenter_tempid:", tempid);
      const data = {};
      data.user_id = this.state.curUser.user_id;
      data.tpl_id = tempid;

      handlePost(`${apiPublicPath}users/tplCopy`, data).then((result) => {
        if (result.success === true) {
          //console.log("addDirect_props.history:", this.props.history);
          confirmDialog.success({
            title: "加入排版方案提示",
            content: "排版方案已经加入到个人中心，立即查看吗？",
            okText: "是",
            cancelText: "否",
            onOk() {
              _history.push({ pathname: "/Compose/genTpl", state: _state });
            },
            onCancel() {},
          });
        } else {
          //如果是没有登录的话要启动登录窗口。
          //message.error(result.msg);
          _history.push("/");
        }
      });
      this.setState({
        addSchema: { id: "", ownerid: "" },
      });
    }
  } // 登录后，如果点击了加入个人中心直接提示加入成功了，如果没有登陆，那么点击后出现登录，如果登录不成功或者取消什么的，没有提示，一旦登录成功会提示加入成功了。利用了redux的组件刷新机制。

  render() {
    // let cardStyles= IDocumentCardStyles;

    let cardStyles = {
      root: {
        display: "inline-block",
        textAlign: "left",
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        maxWidth: 200,
        minWidth: 200,
      },
    };
    const SourceType = ["公共", "私有", "分享", "机构"];
    let TypeIndex = 0;
    let user_id = this.props.curUser.user_id;
    let ownerid = this.props.tplData.ownerid;
    if (ownerid !== "0") {
      if (user_id === ownerid) {
        TypeIndex = 1;
      } else {
        // 模板的org_id代表了机构内部共享的
        if (this.props.tplData.org_id === "0" || !user_id) {
          TypeIndex = 2;
        } else {
          TypeIndex = 3;
        }
      }
    }
    const Location = "AiDocx.com　　来源：" + SourceType[TypeIndex];
    const locationHref = "#";
    const SchemaType = [
      "学位论文书稿",
      "学术期刊投稿",
      "课设或大作业",
      "制度标准汇编",
      "研究设计报告",
      "投标与招标书",
      "软件操作文档",
      "未知类型文档",
    ];
    const mainInf = {
      SourceType: SourceType[TypeIndex],
      SchemaType: SchemaType[this.props.tplData.type],
      searchType: TypeIndex + 1,
    };

    return (
      <Consumer>
        {({ state, showSignUp }) => (
          <DocumentCard
            onClick={this.handleComposeClick.bind(
              this,
              state,
              showSignUp,
              this.props.tplData
            )}
            styles={cardStyles}
          >
            <DocumentCardLocation
              location={Location}
              locationHref={locationHref}
              onClick={this.handleLocationClick.bind(
                this,
                state,
                this.props.tplData
              )}
              ariaLabel="到网站查看更详细信息"
            />
            <DocumentCardTitle
              title={this.props.tplData.title}
              shouldTruncate={true}
            />
            <DocumentCardActivity
              activity="更新：2019/09/20"
              people={[
                {
                  name: SchemaType[this.props.tplData.type],
                  profileImageSrc: this.props.tplData.badgeSrc,
                  contain: 1,
                },
              ]}
            />
            <DocumentCardActions
              views={this.props.tplData.usedtimes}
              actions={[
                {
                  iconProps: { iconName: "Share" },
                  onClick: this.onShareClick.bind(this, state),
                  ariaLabel: "分享排版方案",
                },
                {
                  iconProps: { iconName: "ReminderPerson" },
                  onClick: this.handleAddSchema.bind(
                    this,
                    showSignUp,
                    state,
                    this.props.tplData
                  ),
                  ariaLabel: "加入个人中心",
                },
                {
                  iconProps: { iconName: "Settings" },
                  onClick: this.onDetailClick.bind(
                    this,
                    state,
                    this.props.tplData,
                    mainInf
                  ),
                  ariaLabel: "详细设置",
                },
              ]}
            />
          </DocumentCard>
        )}
      </Consumer>
    );
  }

  onShareClick = () => {
    clickType = 1;
    const url = this.showUrl();
    confirmDialog.success({
      modalHeight: "300px",
      modalWidth: "320px",
      title: this.showtitle(),
      content: (
        <div style={{ textAlign: "center" }}>
          <div>
            <QRCode value={url} size={100} />
          </div>
          <h3>
            <a href={url}>{url}</a>
          </h3>
        </div>
      ),
      okText: "关闭",
      cancelText: "复制",
      onOk() {},
      onCancel() {
        copy(url);
      },
    });
  };

  showUrl = () => {
    let url;
    let userid = this.props.curUser.user_id;
    const tempid = this.props.tplData.id; // 变量用 const 来定义；

    if (this.props.tplData.ownerid === "0") {
      url = `${RootPath}Compose/share/${tempid}`;
    } else {
      url = `${RootPath}Compose/share/${this.props.tplData.ownerid}_${tempid}`;
    }

    if (!!userid) {
      url = url + "/" + userid;
    }
    //console.log("sharecollect_showurl_url:", url);
    return url;
  };

  showtitle = () => {
    let title;
    if (this.props.tplData.ownerid !== undefined) {
      if (this.props.tplData.ownerid === "0") {
        title = "分享公共排版方案";
      } else {
        title = "在个人中心可取消私有排版方案分享状态！";
      }
      if (this.props.curUser.user_id === this.props.tplData.ownerid) {
        //打开共享选项，是否需要提示用户打开了选项？
        if (this.props.curUser.user_id !== "") {
          const data = {};
          data.user_id = this.props.curUser.user_id;
          data.tpl_id = this.props.tplData.id;
          data.share = 1;
          handlePost(`${apiPublicPath}users/ShareUserTpl`, data).then(
            (result) => {
              if (result.success === false) {
                //提示没有打开选项？
                //console.log("ShareUserTpl_result.msg:", result.msg);
              }
            }
          );
        }
      }
      return title + "，扫码进入：";
    }
  };

  onDetailClick = (state, tplData, mainInf) => {
    clickType = 3;
    this.props.history.push({
      pathname: "/Compose/details",
      state: state,
      tplData: tplData,
      mainInf: mainInf,
    });
  };
  composeInsert(state, tplData, xhr, fileName) {
    composeDocInsert(state, tplData, xhr, fileName);
  }

  handleComposeClick = (state, showSignUp, tplData) => {
    //wps下直接上传文件，没有slice
    //如果文档内容还没有保持，那么可以先调用wps保存一下，之后删除。
    //如果不是docx格式的，也要这么处理
    //也可以直接读取openxml

    console.log("handleComposeClick");

    if (clickType === 0) {
      if (
        state === undefined ||
        state.curUser === undefined ||
        state.curUser.user_id === ""
      ) {
        showSignUp(); //直接打开登陆窗口
      } else {
        UploadDocContent(
          `${apiPublicPath}tools/composeFilesRecord`,
          "0",
          state.curUser.user_id,
          this.composeInsert.bind(this, state, tplData)
        );
      }
    } else {
      clickType = 0;
    }
  };
  //直接进入网站的相关位置Compose/share/458
  handleLocationClick = (state, tplData) => {
    clickType = 4;
    let tpl_id = tplData.id;
    if (tplData !== undefined) {
      if (tplData.ownerid !== undefined) {
        if (tplData.ownerid === "0") {
        } else {
          tpl_id = `${tplData.ownerid}_${tplData.id}`;
        }
      }
    }
    let url = "_Compose_share_" + tpl_id;
    console.log("handleLocationClick_clickType:", clickType);
    if (state.curUser.user_id !== "") {
      const data = {};
      data.tel = state.curUser.tel;
      data.user_id = state.curUser.user_id;
      handlePost(`${apiPublicPath}users/reglogin/addtoken`, data).then(
        (result) => {
          if (result.success) {
            window.open(
              RootPath +
                "LoginOnce/tel/" +
                state.curUser.tel +
                "/ID/" +
                state.curUser.user_id +
                "/direct/" +
                url
            );
          }
          this.setState({});
        },
        () => {}
      );
    } else {
      window.open(RootPath + "Compose/share" + tpl_id);
    }
  };
}

export default WebAddinSchema;
