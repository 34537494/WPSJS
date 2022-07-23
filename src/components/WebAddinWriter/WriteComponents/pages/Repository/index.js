import React, { Component } from "react";
import "antd/dist/antd.css";
import { Tree, Input, Button } from "antd";
import { handlePost } from "../../../../WebAddinCommon";
import {
  GetRealData,
  ConvertJsonToTree,
} from "../../../../../sources/RepositoryUtils";
import { apiWritePath } from "../../../../../settings";
import { Consumer } from "../../../../../components/WebAddinContext";
const { Search } = Input;
/* global wps:false */

var checkedIDs = [];
const onSelect = (selectedKeys, info) => {
  console.log("selected", selectedKeys, info);
};

const onCheck = (checkedKeys, info) => {
  console.log("onCheck", checkedKeys, info);
  checkedIDs = checkedKeys;
};

class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: this.reloaddata(),
    };
  }

  reloaddata = (state, selectData) => {
    console.log("state",state);
    console.log("selectData",selectData);
    if (selectData!== undefined){
     // selectData("getTextRepositoryTree");
  }
    const Company = {};
    Company.公司ID = 1;
    handlePost(`${apiWritePath}getinf/getTextRepositoryTree`, Company).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        if (result.success === true) {
          //加载数据到tree中
         // console.log(result);
          let realdata = GetRealData(result);
          //console.log("realdata", realdata);
          var treeData = ConvertJsonToTree(realdata,"");
          this.setState({
            treeData: treeData,
            fullData: realdata
          });
        } else {
        }
        //console.log("logout_ok:",this.state)
      },
      (error) => {}
    );
  };

  insertdata = () => {
    console.log("checkedIDs bef:",checkedIDs)
    for (var id in checkedIDs) {
     // console.log("id:", id);
     // console.log("checkedIDs[id]:", checkedIDs[id]);
      var data = {};
      data.公司ID = 1;
      data.文本元编号 = checkedIDs[id];
      const CurWord = wps.WpsApplication();
      handlePost(
        `${apiWritePath}download/downloadTextRepositoryXml`,
        data
      ).then(
        (result) => {
          // this.props.history.push("/");
        //  console.log("get-Repository-tree-result:", result);
          if (result.success === true) {
            //插入数据到wps中
            console.log(
              "result.msg:",
              Buffer.from(result.msg, "base64").toString("utf-8")
            );
            CurWord.ActiveDocument.Range(
              CurWord.Selection.Start,
              CurWord.Selection.End
            ).InsertXML(Buffer.from(result.msg, "base64").toString("utf-8"));
          } else {
            //提示错误
          }
          //console.log("logout_ok:",this.state)
        },
        (error) => {}
      );
    }
  };
  onSearch = (value) => {
   // console.log("search key:",value);
    //console.log("this.state.realdata:", this.state.fullData);
          this.setState({
            treeData: ConvertJsonToTree(this.state.fullData,value),
          });
  };
  render() {
   
    
    return (

      <Consumer>
      {({ state, selectData }) => (
          <div style={{ margin: "10px 10px 50px 10px", padding: "10px" }}>
          <h2>内容仓库</h2>
          <Search
            placeholder="请输入要搜索内容"
            allowClear
            onSearch={this.onSearch}
          />
  
          <Button onClick={this.insertdata}>插入</Button>
          <Button onClick={this.reloaddata.bind(this, state, selectData)}>刷新</Button>
          <br />
          <Tree
            checkable
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={this.state.treeData}
          />
        </div>
          )}
          </Consumer>


     
    );
  }
}

export default Repository;
