/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import styles from "./WebAddinTplDetail.scss";
import React, { Component } from "react";
import WebAddinHeader from "../../../components/WebAddinHeader";
import { TooltipHost } from "office-ui-fabric-react/lib/Tooltip";
import DialogAlert from "../../../components/WebAddinCommon/DynamicModal";
import ImageViewer from "../../../components/WebAddinCommon/DynamicImageViewer";
import { apiPublicPath, RootPath } from "../../../settings";
//const myImg = src => <img src={`${src}`} className="am-icon am-icon-xs" alt="" />;
//import { Redirect, Link } from "react-router-dom";
import QRCode from "qrcode.react";
import copy from "copy-to-clipboard/index";
import { Stack } from "office-ui-fabric-react/lib/Stack";
//import { TextField } from "office-ui-fabric-react/lib/TextField";
import {
  CommandButton,
  IconButton,
  PrimaryButton,
} from "office-ui-fabric-react/lib/Button";
import {
  MessageBar,
  MessageBarType,
} from "office-ui-fabric-react/lib/MessageBar";
//import imgNoResultTip from "../../assets/templates-no-result-tip.png";
import qrCodeHelp from "../../../assets/qrcodehelp.png";
import {
  CheckOpt,
  OptionOpt,
  SelectOpt,
} from "../WebAddinGenTpl/WebAddinSetPart";
import { handleFetch, handlePost, saveDocByte } from "../../WebAddinCommon";
import {
  UploadDocContent,
  updateStatus,
  composeDocInsert,
} from "../../WebAddinCommon/UploadDocContent";
import confirmDialog from "../../WebAddinCommon/DynamicConfirm";
import { Consumer } from "../../WebAddinContext";
import { arrayBufferToBase64 } from "../../WebAddinCommon/UploadDocContent";
import { connect } from "react-redux";
/* global wps:false */
const Cookies = require("js-cookie");
let NewData = {
  opserial: [4],
  ckserial: [1, 1, 1, 1, 1, 1, 1, 1, 1],
  demoopt: [1, 1, 1, 1],
};

let SvrData = NewData;

class WebAddinTplDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      choice: "block",
      docType: [0],
      ruletip: [],
      SamplePN: 0,
      ShowDemo: false,
      curUser: { user_id: "" },
      tplData: { id: "" },
      mainInf: { SourceType: "", SchemaType: "", searchType: "1" },
      addSchema: { id: "", ownerid: "" },
    };
    this.getWebset = this.getWebset.bind(this);
  }
  getWebset() {
    if (this.props.user_id !== "") {
      const data = {};
      data.user_id = this.props.user_id;
      console.log("getwebset_user:", this.props.user_id);
      data.type = "1";
      // console.log(JSON.stringify(data));
      handlePost(`${apiPublicPath}users/getUserWebOpt`, data).then(
        (result) => {
          if (result.success) {
            NewData = result.data;
            SvrData = JSON.parse(JSON.stringify(NewData));
          }
          //console.log("uploadpage_componentDidMount_logout_getruleset", result);
          //console.log("uploadpage_componentDidMount_logout_user_id", this.props.user_id);
          this.setState({});
        },
        () => {}
      );
    }
  }

  UNSAFE_componentWillMount() {
    console.log(" this.props.location:", this.props.location);
    if (
      this.props.location.state !== undefined &&
      this.props.location.tplData !== undefined
    ) {
      this.setState({
        curUser: this.props.location.state.curUser,
        tplData: this.props.location.tplData,
        mainInf: this.props.location.mainInf,
        ShowDemo: Cookies.get("showDemo") === "true",
      });
      //console.log("tplDetail_UNSAFE_componentWillMount:",this.state.ShowDemo);
    } else {
      //直接导航到compose
      this.props.history.push("/Compose");
    }
  }

  componentDidMount() {
    console.log("componentDidMount.his.props.location:", this.props.location);
    //console.log("componentDidMount——this.state:", this.state);
    let tpl_id = this.state.tplData.id;
    // console.log("this.state.tplData", this.state.tplData);
    if (tpl_id !== undefined) {
      if (this.state.tplData.ownerid === "0") {
      } else {
        if (this.state.tplData.ownerid !== undefined) {
          tpl_id = `${this.state.tplData.ownerid}_${this.state.tplData.id}`;
        }
      }
    }
    this.getWebset();
    // console.log("uploadpage_this.state:", this.state);
    // console.log("uploadpage_this.props:", this.props);
    // console.log("uploadpage_this.tpl_id:", tpl_id);
    let userappend = "";

    if (tpl_id !== undefined) {
      if (tpl_id !== "") {
        if (this.props.user_id !== undefined) {
          userappend = "&user_id=" + this.props.user_id;
        }
        //this.state.tplData.org_id

        if (this.props.org_id !== undefined) {
          if (this.props.org_id !== "") {
            userappend = userappend + "&org_id=" + this.props.org_id;
          }
        }

        let extend =
          "getinfs/getruletip?tpl_id=" +
          tpl_id +
          "&type=" +
          this.state.mainInf.searchType +
          userappend;
        handleFetch(`${apiPublicPath}${extend}`).then(
          (data) => {
            //console.log("getinfs/getruletip?tpl_id", data);
            if ((data.success = true && data.msg[1] === "")) {
              //console.log("加载排版方案错误");
              // message.error("模板已经被删除或者取消了共享,或者需要重新登录！");
              //this.props.history.push("/");
              /*
               confirm({
                title: "加载排版方案错误",
                content: "模板已经被删除或者取消了共享,或者需要重新登录！" + "单击“确定”继续排版，单击“取消”返回首页",
                okText: "确定",
                cancelText: "取消",
                onOk() {
                  _history.push("/Compose");
                  //location.replace(`/Compose`);
                },
                onCancel() {
                  _history.push("/");
                  //location.replace(`/`);
                }
              });
              */
            }
            this.setState({
              ruletip: data.msg,
              FullID: tpl_id,
              SamplePN: data.SamplePN,
            });
          },
          () => {}
        );
      }
    }
  }
  componentDidUpdate(prevProps) {
    console.log("WebAddintpldetail_componentupdate_prevProps:", prevProps);
    this.addDirect();
  }
  composeInsert(state, tplData, xhr, fileName) {
    composeDocInsert(state, tplData, xhr, fileName);
  }
  handleComposeClick = (state, showSignUp, tplData) => {
    if (
      state === undefined ||
      state.curUser === undefined ||
      state.curUser.user_id === ""
    ) {
      showSignUp(); //直接打开登陆窗口
    } else {
      //上传处理//
      UploadDocContent(
        `${apiPublicPath}tools/composeFilesRecord`,
        "0",
        state.curUser.user_id,
        this.composeInsert.bind(this, state, tplData)
      );
    }
  };
  genCheckOpt = (tips, index) => (
    <CheckOpt
      curindex={index}
      ckserial={NewData.ckserial}
      tips={tips}
      handleChange={this.handleCheckChange.bind(this)}
    />
  );
  handleCheckChange = (e) => {
    NewData.ckserial[e.target.curindex] = Number(e.target.checked);
    //console.log(NewData.ckserial);
    //console.log(this.state);
  };
  genOptionOpt = (tips, data, index) => (
    <OptionOpt
      curindex={index}
      opserial={NewData.opserial}
      tips={tips}
      data={data}
      handleChange={this.handleOptionChange.bind(this)}
    />
  );
  handleOptionChange = (e) => {
    NewData.opserial[e.target.curindex] = e.target.value;
    //console.log(NewData.opserial);
    //console.log(this.state);
  };
  handleClearClick = () => {
    this.setState({ choice: "" });
  };

  shareSchema = (e) => {
    console.log("Tpldetail_shareSchema_e:", e);
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

  shareAidocx = (e) => {
    console.log("Tpldetail_shareAidocx_e:", e);
    const url = RootPath;
    confirmDialog.success({
      modalHeight: "300px",
      modalWidth: "320px",
      title: "筷子文档，扫码进入：",
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
    console.log("tpldetail_props:", this.props);
    let userid = this.props.user_id;
    const tplId = this.state.tplData.id; // 变量用 const 来定义；

    if (this.state.tplData.ownerid === "0") {
      url = `${RootPath}Compose/share/${tplId}`;
    } else {
      url = `${RootPath}Compose/share/${this.state.tplData.ownerid}_${tplId}`;
    }
    if (!!userid) {
      url = url + "/" + userid;
    }
    return url;
  };

  showtitle = () => {
    let title;

    if (this.state.tplData.ownerid !== undefined) {
      if (this.state.tplData.ownerid === "0") {
        title = "分享公共排版方案";
      } else {
        title = "在个人中心可取消私有排版方案分享状态！";
      }
      if (this.props.user_id === this.state.tplData.ownerid) {
        //打开共享选项，是否需要提示用户打开了选项？
        if (this.props.user_id !== "") {
          const data = {};
          data.user_id = this.props.user_id;
          data.tpl_id = this.state.tplData.id;
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

  handleSaveSetting = (e) => {
    console.log("handleSaveSetting_e", e);
    try {
      Cookies.set(
        "ComposeSet",
        NewData.ckserial.join("") + NewData.opserial.join(""),
        { expires: 365 }
      );
      let docIndex = NewData.demoopt[2];
      if (docIndex === undefined) {
        docIndex = 1;
      }
      if (docIndex < 1) {
        docIndex = 1;
      }

      Cookies.set("ComposeGetType", docIndex, { expires: 365 });

      DialogAlert.success({
        title: "成功保存排版设置",
        content: "保存有效期1年！",
        time: 2000,
      });
    } catch (err) {
      DialogAlert.success({
        title: "保存排版设置失败",
        content: "可能是读写Cookie权限不够导致保存排版设置失败！",
        time: 2000,
      });
    }
  };

  handleAddSchema(showSignUp, curState, schemaData) {
    // console.log("addShema_curValue", curValue);
    console.log("addSchema_schemaData_ownerid:", schemaData.ownerid);
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
    console.log("WebAddinSchema_addDirect_start:", this.state.addSchema.id);
    console.log(
      "WebAddinSchema_addDirect_start_this.props.user_id:",
      this.props.user_id
    );
    if (this.props.user_id !== "" && this.state.addSchema.id !== "") {
      let tplId = this.state.addSchema.id;
      const _history = this.props.history;
      const _state = this.state;
      if (this.state.addSchema.ownerid !== "0") {
        tplId = `${this.state.addSchema.ownerid}_${tplId}`;
      }
      //console.log("addtocenter_tplId:", tplId);
      const data = {};
      data.user_id = this.props.user_id;
      data.tpl_id = tplId;

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
          DialogAlert.success({
            title: "加入排版方案失败",
            content: result.msg,
            time: 2000,
          });
          _history.push("/");
        }
      });
      this.setState({
        addSchema: { id: "", ownerid: "" },
      });
    }
  } // 登录后，如果点击了加入个人中心直接提示加入成功了，如果没有登陆，那么点击后出现登录，如果登录不成功或者取消什么的。

  InsertSource = async (action, state, showSignUp) => {
    //先要登录
    console.log("tpldetail_InsertSource_userid:", state);
    let userid = state.curUser.user_id;
    console.log("tpldetail_InsertSource_userid:", userid);
    if (userid === "") {
      showSignUp();
    } else {
      let tplId = this.state.tplData.id; // 变量用 const 来定义；
      if (this.state.tplData.ownerid !== "0") {
        tplId = this.state.tplData.ownerid + "_" + tplId;
      }
      const data = {};
      data.res_id = action;
      data.tpl_id = tplId;
      let errTitle = "获取模板失败！";
      if (action === "1") {
      }
      handlePost(`${apiPublicPath}getinfs/getInsertSource`, data).then(
        (result) => {
          if (result.success === true) {
            //调用offcie webapi
            console.log("InsertSource_path:", result.msg);
            // var id = "Base64DocxFile.txt";
            let url =
              `${apiPublicPath}getinfs/getInsertSource/insertResFile?destFile=` +
              result.msg +
              "&destId=" +
              tplId;
            let xhr = new XMLHttpRequest();

            // xmlHttp.withCredentials = true;
            xhr.onreadystatechange = function () {
              saveDocByte(result.fileName, xhr, 2);
            };
            xhr.open("GET", url, true); //同步方式请求
            xhr.responseType = "arraybuffer";
            xhr.send();
          } else {
            //如果是没有登录的话要启动登录窗口。
            DialogAlert.success({
              title: errTitle,
              content: result.msg,
              time: 2000,
            });
          }
        }
      );
    }
  };
  handleMoreClick = () => {
    //console.log("handleMoreClick_this.state is " , this.state);
    //console.log("this.state.ShowDemo is " + this.state.ShowDemo);
    this.setState({ ShowDemo: !this.state.ShowDemo });
    Cookies.set("showDemo", !this.state.ShowDemo, { expires: 365 });
  };
  gendemoopt = (tips, data, index) => (
    <SelectOpt
      curindex={index}
      tips={tips}
      data={data}
      selserial={this.state.docType}
      handleChange={this.handleSelChange.bind(this)}
    />
  );
  handleSelChange = (e, value) => {
    //console.log("SelectOpt:e", e);
    //console.log("SelectOpt:value", value);
    NewData.demoopt[2] = value.key;
  };

  render() {
    const menuProps = {
      items: [
        {
          key: "emailMessage",
          text: "分享排版方案",
          iconProps: { iconName: "share" },
          onClick: this.shareSchema,
        },
        {
          key: "calendarEvent",
          text: "分享筷子文档",
          iconProps: { iconName: "PageShared" },
          onClick: this.shareAidocx,
        },
      ],
    };

    const addIcon = { iconName: "Add" };
    const detailStyle = {
      root: { backgroundColor: "#f3f2f1", marginTop: "10px" },
    };
    let demoPic = "";
    const columnProps = {
      tokens: { childrenGap: 15 },
      styles: { root: { width: 300 } },
    };
    if (this.state.ShowDemo === true) {
      //读取网络上的提示信息，显示反馈
      const ruletip = this.state.ruletip;
      //console.log("ruletip:",ruletip);
      demoPic = (
        <div>
          <Stack horizontal tokens={{ childrenGap: 15 }} styles={{ root: {} }}>
            <Stack {...columnProps}>
              <div style={{ paddingLeft: "5px" }}>
                <h3 className={styles["demoInfo"]}>{ruletip[0]}</h3>
              </div>
            </Stack>
            <Stack {...columnProps}>
              <div className={styles["helpTip"]}>
                <h3>公众号上提问：</h3>
              </div>
              <div className={styles["helpTip"]}>
                <img src={qrCodeHelp} />
              </div>
            </Stack>
          </Stack>
          <div className={styles["demo-div"]}>
            <ImageViewer
              FullID={this.state.FullID}
              SamplePN={this.state.SamplePN}
            />
          </div>
        </div>
      );
    }
    let stackTokens = { childrenGap: 5 };
    const stackStyles = {
      root: {
        background: "#f3f2f1",
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        flexShrink: "1",
      },
    };
    const stackItemStyles = {
      root: {
        padding: 2,
      },
    };
    const moreIcon = { iconName: "DoubleChevronDown" };
    const lessIcon = { iconName: "DoubleChevronUp" };
    const closeIcon = { iconName: "Clear" };
    const showHide = (
      <div style={{ display: "inline-flex" }}>
        <div style={{ display: "inline-block" }}>
          <span
            style={{
              fontSize: "14px",
              textAlign: "center",
              display: "flex",
              height: "22px",
            }}
          >
            <IconButton
              iconProps={this.state.ShowDemo ? lessIcon : moreIcon}
              onClick={this.handleMoreClick.bind(this, this.state)}
              ariaLabel="更多"
            />
            <IconButton
              iconProps={closeIcon}
              onClick={this.handleClearClick}
              ariaLabel="关闭"
            />
          </span>
        </div>
      </div>
    );
    const BlockedDetail = () => (
      <MessageBar
        actions={showHide}
        messageBarType={MessageBarType.success}
        isMultiline={false}
        truncated={true}
        styles={detailStyle}
      >
        <div style={{ display: "inline-flex" }}>
          <Stack
            horizontal
            styles={{
              root: {
                background: "#f3f2f1",
                display: "flex",
                alignItems: "stretch",
                flexShrink: "1",
              },
            }}
            tokens={{ childrenGap: 12 }}
          >
            <Stack.Item align="left" styles={stackItemStyles}>
              <div
                style={{
                  display: "inline-flex",
                  textAlign: "left",
                  fontSize: "15px",
                }}
              >
                <b> {this.state.tplData.title}</b>
              </div>
            </Stack.Item>
            <Stack.Item align="center" styles={stackItemStyles}>
              <div
                style={{
                  display: "inline-flex",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                <b>来源：</b>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                {this.state.mainInf.SourceType}
              </div>
            </Stack.Item>
            <Stack.Item align="end" styles={stackItemStyles}>
              <div
                style={{
                  display: "inline-flex",
                  textAlign: "right",
                  fontSize: "16px",
                }}
              >
                <b>类型：</b>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  textAlign: "right",
                  fontSize: "15px",
                }}
              >
                {this.state.mainInf.SchemaType}
              </div>
            </Stack.Item>
          </Stack>
        </div>
      </MessageBar>
    );

    let checkIndex = 0;
    let OptionIndex = 0;
    const hideopt = false;
    const checktip = [
      [
        "智能修正中英文标点符号，适合于文档标点书写不规范，有一定风险",
        "修正标点",
      ],
      ["智能清理被误用的空格区域，有一定风险", "清理空格"],
      [
        "将用尾注标示的参考文献转换为文本化的参考文献，适合最终定稿时，如果排版后还需要编辑，请不要选择该选项",
        "尾注转文本",
      ],
      [
        "套用模板的页面大小，页眉页脚设置，并用模板中的样式来控制格式，否则按照排版方案中的相关设置处理，建议选中",
        "模板优先",
      ],
      [
        "清理未使用的样式，左对齐和分散对齐转两端对齐，孤行控制，首标点压缩，居中不缩进，样式更新，封面和封尾无大纲级别等，建议选中",
        "美化优化",
      ],
      [
        "自动分析内部知识链接，包括标题、图、表和公式编号，以及标题内容，图、表说明内容",
        "建立内部知识链接",
      ],
      ["将EQ域、Word公式和MathType公式转换为文本公式", "公式文本化"],
      ["将图片白色背景透明化处理", "图片透明化"],
    ];
    const optiontip = [
      [
        "根据文档情况，选择不同等清理模式，排版效果不满意时请更换模式尝试",
        "格式清理：　",
      ],
    ];
    const optionarr = [
      [
        {
          value: "1",
          text: "忽略",
          tip: "不清理现有文档格式，仅仅统一规范文档特殊位置，文档格式已经很规范时适用",
        },
        {
          value: "2",
          text: "默认",
          tip: "根据默认的配置文件进行格式清理，要修改具体选项实行不同的清理效果，请加入方案到个人中心进行修改",
        },
        {
          value: "3",
          text: "轻度",
          tip: "基于段落编辑特征，保留主要字符格式，删除主要段落格式，保留作过标题的或者短段落等特殊位置的属性，文档比较规范时适用",
        },
        {
          value: "4",
          text: "重度",
          tip: "除了特殊位置外，删除主要字符格式，删除主要段落格式，文档格式比较乱时适用",
        },
        {
          value: "5",
          text: "极度",
          tip: "除了文本控件区域、上下标、着重符、下划线和隐藏属性外，删除所有字符格式，删除所有段落格式，文档格式乱时适用",
        },
        {
          value: "6",
          text: "全部",
          tip: "删除上下标以外的所有字符格式，删除所有段落格式和表格样式，文档格式很乱时适用",
        },
      ],
    ];
    const ButtonStyles = {
      root: {
        textAlign: "center",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 16,
        minWidth: 150,
        maxWidth: 586,
        width: "90%",
        height: 60,
      },
    };

    const demoopttip = [
      [
        "标准版不带审阅和批注，审阅版分类标注了排版过程中修改的位置和文档格式或者编号中存在的问题，无样式版本不通过样式进行排版",
      ],
    ];
    const demooptList = [["标准版", "审阅版", "无样式版"]];
    const calloutProps = { gapSpace: 0 };
    const hostStyles = {
      root: { display: "inline-block", marginTop: "10px", paddingRight: "5px" },
    };
    let demooptIndex = 0;
    return (
      <Consumer>
        {({ state, showSignUp }) => (
          <div className={styles["App"]}>
            <WebAddinHeader history={this.props.history} />
            <div>
              <div className="checkTop">
                <PrimaryButton
                  styles={ButtonStyles}
                  onClick={this.handleComposeClick.bind(
                    this,
                    state,
                    showSignUp,
                    this.state.tplData
                  )}
                >
                  排版当前文档
                </PrimaryButton>
                <Stack styles={stackStyles} tokens={stackTokens}>
                  <div style={{ align: "center" }}>
                    {this.genOptionOpt(
                      optiontip[OptionIndex],
                      optionarr[OptionIndex],
                      OptionIndex++
                    )}
                  </div>
                  <div style={{ align: "center" }}>
                    <div style={{ display: "inline-block" }}>
                      {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
                    </div>
                    <div style={{ display: "inline-block" }}>
                      {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
                    </div>
                    <div style={{ display: "inline-block" }}>
                      {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
                    </div>
                    <div style={{ display: "inline-block" }}>
                      {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
                    </div>
                    <div style={{ display: "inline-block" }}>
                      {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
                    </div>
                  </div>
                  <Stack.Item
                    align="center"
                    verticalAlignment="center"
                    styles={stackItemStyles}
                  >
                    <div
                      className={styles["check-info-check"]}
                      hidden={!hideopt}
                    >
                      {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
                      {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
                      {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
                    </div>
                  </Stack.Item>
                </Stack>
              </div>
            </div>
            <div className="checkTop">
              <div className="edition">
                <div
                  style={{
                    display: "inline-block",
                    paddingRight: "5px",
                    paddingLeft: "2px",
                    fontSize: "14px",
                  }}
                >
                  版本：
                  <div
                    style={{
                      display: "inline-block",
                      paddingTop: "12px",
                      fontSize: "14px",
                      width: "80px",
                    }}
                  >
                    {this.gendemoopt(
                      demoopttip[demooptIndex],
                      demooptList[demooptIndex],
                      demooptIndex++
                    )}
                  </div>
                </div>
                <TooltipHost
                  content={"直接基于本排版方案的模板撰写文档"}
                  id={"getTemplate"}
                  calloutProps={calloutProps}
                  styles={hostStyles}
                >
                  <CommandButton
                    onClick={this.InsertSource.bind(this, 2, state, showSignUp)}
                    iconProps={{ iconName: "FileTemplate" }}
                    text="模板"
                  />
                </TooltipHost>
                <TooltipHost
                  content={"插入本排版方案的封面"}
                  id={"getcover"}
                  calloutProps={calloutProps}
                  styles={hostStyles}
                >
                  <CommandButton
                    onClick={this.InsertSource.bind(this, 1, state, showSignUp)}
                    iconProps={{ iconName: "PageAdd" }}
                    text="封面"
                  />
                </TooltipHost>

                <TooltipHost
                  content={"分享可以增加积分"}
                  id={"shareTipId"}
                  calloutProps={calloutProps}
                  styles={hostStyles}
                >
                  <CommandButton
                    iconProps={addIcon}
                    text="分享"
                    menuProps={menuProps}
                  />
                </TooltipHost>
                <TooltipHost
                  content={"保存为不进入方案详情界面时使用的排版（本地）设置"}
                  id={"shareTipId"}
                  calloutProps={calloutProps}
                  styles={hostStyles}
                >
                  <CommandButton
                    onClick={this.handleSaveSetting}
                    iconProps={{ iconName: "SaveTemplate" }}
                    text=""
                  />
                </TooltipHost>
                <TooltipHost
                  content={"加入个人中心方便对原排版方案进行修改"}
                  id={"shareTipId"}
                  calloutProps={calloutProps}
                  styles={hostStyles}
                >
                  <CommandButton
                    onClick={this.handleAddSchema.bind(
                      this,
                      showSignUp,
                      state,
                      this.state.tplData
                    )}
                    iconProps={{ iconName: "ReminderPerson" }}
                  />
                </TooltipHost>
              </div>
              {this.state.choice === "block" && <BlockedDetail />}
            </div>

            <div className="checkOpt">
              {this.state.choice === "block" && demoPic}
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

const mapState = (state) => {
  return {
    curUser: state.current,
    user_id: state.current.user_id,
    isModalVisible: state.modalVisible,
  };
};
const mapDispatch = {};

export default connect(mapState, mapDispatch)(WebAddinTplDetail);
