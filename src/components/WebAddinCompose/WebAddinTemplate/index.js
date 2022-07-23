/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import WebAddinHeader from "../../../components/WebAddinHeader";
import WebAddinSchema from "./WebAddinSchema";
import styles from "./WebAddinTemplate.scss";
import { handleFetch } from "../../WebAddinCommon";
import { apiPublicPath } from "../../../settings";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import imgNoResultTip from "../../../assets/templates-no-result-tip.png";
import { Consumer } from "../../WebAddinContext";

let Word="";
const Cookies = require("js-cookie");

let searchs = [];
let records = [];
let tplData = []; //存储查询结果

let searchData = {
  optTypeText: "全部",
  optTypeIndex: 0,
  OldSearch: "",
  curValue: ""
};

class WebAddinTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curUser: { user_id: "" }
    };
  }

  componentDidMount() {
    //读取网络设置
   //console.log("template_componentDidMount_this.props", this.props);
   //console.log("template_componentDidMount_this.state", this.state);
    this.handleSearch( );
  }

  composeClick = async () => {
    return Word.run(async context => {
      /**
       * Insert your Word code here
       */

      // insert a paragraph at the end of the document.
      const paragraph = context.document.body.insertParagraph("Hello World", Word.InsertLocation.end);

      // change the paragraph color to blue.
      paragraph.font.color = "blue";

      await context.sync();
    });
  };

  onTypeChange = (showSignUp, curState, ref, curValue) => {
    searchData.optTypeIndex = curValue.key;
    console.log("onTypeChange_showSignUp：", showSignUp);
    console.log("onTypeChange_curState：", curState);
    console.log("onTypeChange_curValue：", curValue);
    console.log("onTypeChange_ref：", ref);
    Cookies.set("TplIndex", searchData.optTypeIndex, { expires: 365 });
    this.handleSearch(showSignUp, curState, "f～fgxg");
  };
  handleSearch = (showSignUp, curState, curValue) => {

    let user_id = "";
    if (curState !== undefined) {
      user_id = curState.curUser.user_id;
      this.setState({ curUser: curState.curUser });
    }

    if (searchData.OldSearch === curValue && curValue !== "f～fgxg" && curValue !== "") {
      //this.setState({});
      setTimeout((searchData.OldSearch = ""), 200);
      return;
    }
    const optTypeIndex = Cookies.get("TplIndex");
   //console.log("get.cookie_optTypeIndex:", optTypeIndex);
    if (optTypeIndex === 2 || optTypeIndex === 4) {
      // console.log("this.props.curUser:", this.props.curUser); //showSignUp.bind(this)
      if (user_id === "") {
        console.log("onTypeChange_typeof showSignUp !:", typeof (showSignUp) );
        if (typeof showSignUp !== "string") {
          if (  showSignUp !== undefined) {
          showSignUp();
          }
        }
        //console.log("要登录"); //showSignUp.bind(this)
      }
    }
    if (curValue !== "f～fgxg") {
      searchData.OldSearch = curValue;
    }
    if (searchData.OldSearch===undefined){
      searchData.OldSearch=""
    }
    let searchRes =
      `${apiPublicPath}getinfs/gettemplates?page=1&type=1&lib_id=1&isMobile=true&search=` +
      encodeURIComponent(searchData.OldSearch) +
      "&lib_id=" +
      searchData.optTypeIndex;
    if (user_id !== "") {
      searchRes = searchRes + "&user_id=" + user_id;
    }
    handleFetch(searchRes, { method: "GET" }).then(result => {
     
      try {
        tplData = result.list;
        this.setState({});
        console.log(tplData);
      } catch (e) {
       console.log("模板数据获取错误，请检查网络！",e);
        // message.error("数据获取错误，请检查网络！");
      }
    });
  };

  render() {
    let cookiedinf = "";

    cookiedinf = localStorage.getItem("searchs");
    if (!!cookiedinf) {
      searchs = cookiedinf.split("\r\n");
      records = searchs;
    }
    // console.log("TplType bef:", optTypeIndex);

    // console.log("TplType:", optTypeIndex);
    if (!!localStorage.getItem("TplIndex")) {
      // console.log("TplType lost :", optTypeIndex);
      searchData.optTypeText = localStorage.getItem("TplType");
      searchData.optTypeIndex = localStorage.getItem("TplIndex");
    } else {
    }
    // console.log("TplType real:", optTypeIndex);

    let HideType = false;
    // console.log("this.props.match.path:", this.props.match.path);
    if (this.props.match.path === "/Compose/ebook") {
      HideType = true;
      // console.log("HideType:", HideType);
    }

    let searchtype = [];
    searchtype.push(searchData.optTypeIndex);

    let stackTokens = { root:{left:"0px"},childrenGap: 5, padding: `10px 0px 30px 0px` };

    let options = [
      { key: 0, text: "全部" },
      { key: 1, text: "公共" },
      { key: 2, text: "私有" },
      { key: 3, text: "分享" },
      { key: 4, text: "机构" }
    ];

    let dropdownStyles = {
      dropdown: { width: 75,marginRight:"15px" }
    };

   //console.log("befrender_template:", tplData);
    let i = 0;
    const { history } = this.props;
    let tplItems = "";
   //console.log("search_result:", tplData);
    if (tplData.length === 0) {
      tplItems = <img src={imgNoResultTip} alt="没有找到排版方案，注意选择查找类型" />;
    } else {
      tplItems = tplData.map(item => (
        <WebAddinSchema key={i++} history={history} tplData={item} curUser={this.state.curUser} />
      ));
    }

    return (
      <Consumer>
        {({ state, showSignUp }) => (
          <div className={styles["App"]}>
            <WebAddinHeader history={this.props.history} />
            <div style={{ display: "block",marginLeft:"10px"}}>
              <Stack horizontal tokens={stackTokens} verticalAlign="end">
                <Stack.Item align="start" grow>
                  <SearchBox
                    placeholder="注意选择查找类型"
                    onSearch={this.handleSearch.bind(this, showSignUp, state)}
                    onFocus={() => {}}
                    onBlur={() => console.log("onBlur called")}
                    onChange={() => console.log("onChange called")}
                  />
                </Stack.Item>
                <Dropdown
                  defaultSelectedKey={searchData.optTypeIndex}
                  options={options}
                  styles={dropdownStyles}
                  onChange={this.onTypeChange.bind(this, showSignUp, state)}
                />
              </Stack>
            </div>
            <div className="ms-Grid" dir="ltr">
              {tplItems}
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default WebAddinTemplate;
