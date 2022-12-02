/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import WebAddinHeader from "../../../components/WebAddinHeader";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import styles from "./WebAddinGenTpl.scss";
import { CheckOpt, OptionOpt, SelectOpt } from "./WebAddinSetPart";
import TplDetailsList from "./WebAddinTplList";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import { apiPublicPath } from "../../../settings";
import { getruleset } from "../../../sources/websets";
import {
  UploadDocContent,
  updateStatus,
} from "../../WebAddinCommon/UploadDocContent";
import { handlePost } from "../../WebAddinCommon";
import { Consumer } from "../../WebAddinContext";
/* global wps:false */
const Cookies = require("js-cookie");

let NewData = {
  opserial: [3, 1, 1, 1, 1],
  ckserial: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  demoopt: [1, 1],
};
let SvrData = NewData;

let dropdownStyles = {
  dropdown: { width: 175 },
};

const checktip = [
  ["分享排版方案，可以自动增加积分", "分享"],
  ["统一所有样式行距设置使用到类型或者方式", "统一行距模式："],
  ["统一所有样式段落间距设置使用到类型或者方式", "统一间距模式："],
  ["统一所有样式的文本上下对齐方式", "统一上下对齐方式："],
  ["将源文档中被自动判断为封面的部分保存为封面", "自动生成封面"],
  ["基于一般性规则，自动调整目录样式中的异常情况", "智能调整目录"],
  ["基于一般性规则，自动调整标题样式中的异常情况", "智能调整标题"],
  [
    "对源文档中有特异字形或者缩进对部分进行统计分析，归纳出新规则，建立样式去规范类似段落",
    "智能生成新规则",
  ],
  [
    "基于一般性规则，对样式的细节，进行微调，达到美化对效果，比如启用孤行控制",
    "美化优化",
  ],
  ["仅仅注册为同一个机构的用户可见，分享排版可以自动增加积分", "机构内部分享"],
];
const optiontip = [
  ["必须包含多级标题序", "　　标题来源："],
  ["", ""],
  ["", ""],
  ["需要被排版的文档格式的一般情况", "被排版源文档格式："],
  ["需要被排版的文档内容的一般情况：", "被排版源文档内容："],
];
const optionarr = [
  [
    { value: "1", text: "大纲", tip: "按照已经建立多级大纲转换" },
    {
      value: "2",
      text: "内置标题",
      tip: "按照已经设置好的标题 1、标题2……转换",
    },
    { value: "3", text: "自动识别", tip: "按照自动识别的多级标题转换" },
  ],
  [
    {
      value: "1",
      text: "最小值模式",
      tip: "最小值模式不会出现文字重叠情况，段落内部同时有图片和文字时，图片不会被掩盖，但是调整字体大小时，可能根据最小值设置情况自动改变行距",
    },
    {
      value: "2",
      text: "固定值模式",
      tip: "容易被用户理解，采用固定值模式后，在使用样式数量多对情况下，编辑过程中样式往往自动增加，为样式使用带来麻烦，段落内部同时有图片和文字时，图片往往会被掩盖",
    },
    {
      value: "3",
      text: "倍距模式",
      tip: "采用倍距模式，可以防止编辑过程中样式自动增加，段落内部同时有图片和文字时，图片不会被掩盖，调整页面行距可以统一调整所有间距",
    },
    {
      value: "4",
      text: "智能模式",
      tip: "依据对现有文档对统计分析，决定是用那种模式之一",
    },
  ],
  [
    {
      value: "1",
      text: "倍距模式",
      tip: "需调整页面行距可以一次性调整所有间距",
    },
    {
      value: "2",
      text: "固定值模式",
      tip: "容易被用户理解，不能一次性调整所有间距",
    },
    {
      value: "3",
      text: "智能模式",
      tip: "依据对现有文档对统计分析，决定是用倍距模式还是固定值模式",
    },
  ],
  [
    {
      value: "1",
      text: "极不规范",
      tip: "极度不规范的文档往往来自于各种途径的抄抄写写",
    },
    {
      value: "2",
      text: "很不规范",
      tip: "很不规范的文档往往来自不同人共同写的文档，或者文档从不同的Word文档复制粘贴得到的",
    },
    {
      value: "3",
      text: "较不规范",
      tip: "较不规范往往来自于撰写文档过程中使用文档编辑软件不地道规不规范",
    },
    {
      value: "4",
      text: "比较规范",
      tip: "使用了模板和样式来控制文档格式，但是会有出错或者同样式但是格式不同等情况，导致的格式不整齐统一",
    },
  ],
  [
    {
      value: "1",
      text: "很不规范",
      tip: "往往来自于OCR识别、PDF转换、网页复制等得到的文档",
    },
    {
      value: "2",
      text: "较不规范",
      tip: "存在比较多的可个与标点笔误，以及一些不地道的用法，比如空格控制缩进、空行控制格式等",
    },
    { value: "3", text: "比较规范", tip: "仅仅存在少量笔误与不规范" },
    {
      value: "4",
      text: "已很规范",
      tip: "正确使用文档编辑软件并手工校对过的文档",
    },
  ],
];
const demooptList = [
  [
    "学位论文书稿",
    "学术期刊投稿",
    "课设或大作业",
    "制度标准汇编",
    "研究设计报告",
    "投标与招标书",
    "软件操作文档",
    "未知类型文档",
  ],
  ["顶端对齐", "居中对齐", "基线对齐", "底端对齐", "自动设置"],
];
const demoopttip = [["不同类型文档基准模板和选项不同"], [""]];

class WebAddinGenTpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curUser: { user_id: "" },
      showLayer: false,
      showLayerNoId: false,
      hideopt: Cookies.get("showMore") === "false",
      listRenew: false,
    };
    this.getWebset = this.getWebset.bind(this);
  }

  getWebset() {
    if (this.props.user_id !== undefined) {
      const data = {};
      data.user_id = this.props.user_id;
      data.type = "1";
      // console.log(JSON.stringify(data));
      const Curset = getruleset(data);
      Curset.then(
        (result) => {
          if (result.success) {
            NewData = result.data;
          } else {
            // console.log("uploadpage_componentDidMount_logout_getruleset", result);
            // console.log("uploadpage_componentDidMount_logout_user_id", this.props.user_id);
            if (this.props.user_id !== undefined) {
              if (this.props.user_id !== "") {
                // console.log("uploadpage_componentDidMount_logout_result", result);
                this.props.logout({});
              }
            }
          }
          SvrData = JSON.parse(JSON.stringify(NewData));
          this.setState({});
        },
        (error) => {}
      );
    }
  }
  componentDidUpdate() {
    console.log(
      "genTpl_componentDidUpdate_this.props.location:",
      this.props.location
    );
    updateStatus("");
  }
  UNSAFE_componentWillMount() {
    console.log("genTpl_this.props.location:", this.props.location);
    if (this.props.location.state !== undefined) {
      this.setState({
        curUser: this.props.location.state.curUser,
      });
      //console.log("tplDetail_UNSAFE_componentWillMount:",this.state.ShowDemo);
    } else {
      //直接导航到compose
      this.props.history.push("/");
    }
  }
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
    // this.setState({});
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
    //  this.setState({});
  };

  /*
  handleGenTplShow = e => {
    //  this.setState({});
    let inputObj=document.createElement('input')
    inputObj.setAttribute('id','_ef');
    inputObj.setAttribute('type','file');
    inputObj.setAttribute("style",'visibility:hidden');
    document.body.appendChild(inputObj);

    //cores/filesautotpl/DocSliceGenTpl
    inputObj.click();
   //console.log("selectedfile:",inputObj.value)  ;
    //<input type="file" id="btn_file" style="display:none">
      //<button type="button" onClick="F_Open_dialog()">选择文件</button>
    //</div>

  };
  */

  autoGenTpl(xhr, fileName) {
    //启动排版，并下载打开！cores/Composeext/${fileId}/${tempId}/${composeOpt}/${comptype}`);

    console.log("tplDetail_composeInsert_xhr:", xhr);
    console.log("tplDetail_composeInsert_fileName:", fileName);

    fileName = fileName.replace(/\\/g, "/");
    let litename = fileName.split("/"); //这里要将 \ 转义一下
    //wps.alert(litename.length);
    let data = {};
    data.ckserial = NewData.ckserial.join(",");
    data.opserial = NewData.opserial.join(",");
    data.demoopt = NewData.demoopt.join(",");
    data.doc_id = JSON.parse(xhr.responseText).id;
    data.tplDirect = 0;
    data.doc_name = litename[litename.length - 1];
    let extend = "cores/FilesAutotpl";
    handlePost(`${apiPublicPath}${extend}`, data).then(
      (result) => {
        if (result !== undefined && result.success === true) {
          //重新加载子组件
          //wps.alert("生成排版方案成功！");
          updateStatus("生成排版方案成功！");
        } else {
          updateStatus("生成排版方案失败：" + result.msg);
        }
        this.setState({ listRenew: true });
      },
      (error) => {
        // wps.alert( error);
      }
    );
    this.setState({});
  }

  handleGenTpl = (state, showSignUp, e) => {
    if (
      state === undefined ||
      state.curUser === undefined ||
      state.curUser.user_id === ""
    ) {
      showSignUp(); //直接打开登陆窗口
    } else {
      if (JSON.stringify(SvrData) !== JSON.stringify(NewData)) {
        const curdata = {};
        curdata.newset =
          NewData.ckserial.join(",") +
          "_" +
          NewData.opserial.join(",") +
          "_" +
          NewData.demoopt.join(",");
        curdata.user_id = this.state.curUser.user_id;
        curdata.type = "3";
        handlePost(`${apiPublicPath}users/setUserWebOpt`, curdata).then(
          (result) => {
            if (result.success === true) {
              SvrData = JSON.parse(JSON.stringify(NewData));
            }
          }
        );
      }
      //上传生成排版方案
      this.setState({ listRenew: false });
      UploadDocContent(
        `${apiPublicPath}tools/composeFilesRecord`,
        "1",
        state.curUser.user_id,
        this.autoGenTpl.bind(this)
      );
    }
  };

  gendemoopt = (tips, data, index) => (
    <SelectOpt
      curindex={index}
      tips={tips}
      data={data}
      selserial={NewData.demoopt}
      handleChange={this.handleSelChange.bind(this)}
    />
  );

  handleSelChange = (e, value) => {
    console.log("SelectOpt:e", e);
    console.log("SelectOpt:value", value);
    console.log("SelectOpt:e.target.key", e.target.tabIndex);
    NewData.demoopt[e.target.tabIndex] = value.key;
    this.setState({});
  };

  handleChange = (info) => {
    // console.log("upload files monitor:", info);
    if (info.file.status === "done") {
      this.props.getMyTemplates(this.props.user_id);
    } else {
      if (info.file.status === "error" || info.file.status === "removed") {
        // console.log("fileuploaderror:", info);
        this.setState({});
      }
    }
  };

  handleToggleChange = (ev, checked) => {
    //console.log("genTpl_handleToggleChange_ev:", ev);
    //console.log("genTpl_handleToggleChange_checked:", checked);
    this.setState({ hideopt: !checked });
    Cookies.set("showMore", checked, { expires: 365 });
  };

  render() {
    const { showLayer, showLayerNoId, hideopt } = this.state;
    const toggleStyles = {
      root: { margin: "10px 0" },
    };
    let stackTokens = { childrenGap: 0 };
    const stackStyles = {
      root: {
        background: "#f3f2f1",
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
      },
    };
    const stackItemStyles = {
      root: {
        padding: 2,
      },
    };
    let checkIndex = 0;
    let OptionIndex = 0;
    let demooptIndex = 0;
    const history = this.props.history;
    const { disabled, checked } = this.props;
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
    const ToggleStyles = {
      container: { textAlign: "center", display: "flex", height: "14px" },
      root: { height: "14px" },
    };
    const optionset = (
      <div>
        <div className="checkTop">
          <Stack styles={stackStyles} tokens={stackTokens}>
            <Stack.Item
              align="center"
              verticalAlignment="center"
              styles={stackItemStyles}
            >
              <div
                style={{
                  display: "inline-block",
                  alignItems: "center",
                  paddingRight: 12,
                }}
              >
                类型：
              </div>
              <div style={{ display: "inline-block" }}>
                {this.gendemoopt(
                  demoopttip[demooptIndex],
                  demooptList[demooptIndex],
                  demooptIndex++
                )}
              </div>
              <div style={{ display: "inline-block", marginLeft: 12 }}>
                {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
              </div>
            </Stack.Item>
            <Stack.Item
              align="center"
              verticalAlignment="center"
              styles={stackItemStyles}
            >
              <div style={{ display: "inline-block" }}>
                {this.genOptionOpt(
                  optiontip[OptionIndex],
                  optionarr[OptionIndex],
                  OptionIndex++
                )}
              </div>
              <div style={{ display: "inline-block", alignItems: "center" }}>
                <Toggle
                  label="更多选项"
                  styles={ToggleStyles}
                  inlineLabel
                  checked={!hideopt}
                  onChange={this.handleToggleChange}
                />
              </div>
            </Stack.Item>
          </Stack>
        </div>
        <div className="checkOpt" hidden={hideopt}>
          <Stack styles={stackStyles} tokens={stackTokens}>
            <Stack.Item align="left" styles={stackItemStyles}>
              <div style={{ display: "inline-block" }}>
                {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
              </div>
              <div style={{ display: "inline-block" }}>
                {this.genOptionOpt(
                  optiontip[OptionIndex],
                  optionarr[OptionIndex],
                  OptionIndex++
                )}
              </div>
            </Stack.Item>
            <Stack.Item align="left" styles={stackItemStyles}>
              <div style={{ display: "inline-block" }}>
                {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
              </div>
              <div style={{ display: "inline-block" }}>
                {this.genOptionOpt(
                  optiontip[OptionIndex],
                  optionarr[OptionIndex],
                  OptionIndex++
                )}
              </div>
            </Stack.Item>
            <Stack.Item align="left" styles={stackItemStyles}>
              <div style={{ display: "inline-block" }}>
                {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
              </div>
              <div style={{ display: "inline-block" }}>
                {this.gendemoopt(
                  demoopttip[demooptIndex],
                  demooptList[demooptIndex],
                  demooptIndex++
                )}
                <div style={{ display: "inline-block" }}>
                  {" "}
                  {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
                </div>
              </div>
            </Stack.Item>
            <Stack.Item align="left" styles={stackItemStyles}>
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
            </Stack.Item>
            <Stack.Item align="left" styles={stackItemStyles}>
              <div style={{ display: "inline-block" }}>
                {this.genOptionOpt(
                  optiontip[OptionIndex],
                  optionarr[OptionIndex],
                  OptionIndex++
                )}
              </div>
            </Stack.Item>
            <Stack.Item align="left" styles={stackItemStyles}>
              <div style={{ display: "inline-block" }}>
                {this.genOptionOpt(
                  optiontip[OptionIndex],
                  optionarr[OptionIndex],
                  OptionIndex++
                )}
              </div>
            </Stack.Item>
            <Stack.Item align="left" styles={stackItemStyles}>
              <div style={{ display: "inline-block" }}>
                {this.genCheckOpt(checktip[checkIndex], checkIndex++)}
              </div>
            </Stack.Item>
          </Stack>
        </div>
        <TplDetailsList
          history={history}
          curUser={this.state.curUser}
          listRenew={this.state.listRenew}
        />
      </div>
    );

    return (
      <Consumer>
        {({ state, showSignUp }) => (
          <div className={styles["App"]}>
            <WebAddinHeader history={history} />
            <PrimaryButton
              primary
              styles={ButtonStyles}
              onClick={this.handleGenTpl.bind(this, state, showSignUp)}
            >
              生成新排版方案
            </PrimaryButton>
            {optionset}
          </div>
        )}
      </Consumer>
    );
  }
}

export default WebAddinGenTpl;
