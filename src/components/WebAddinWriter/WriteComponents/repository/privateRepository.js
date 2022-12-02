import React, { Component } from "react";
import Treeshow from "./treeShow";
import { handlePost } from "../../../WebAddinCommon";
import {
  GetRealData,
  ConvertJsonToTree,
} from "../../../../sources/RepositoryUtils";
import { apiWritePath } from "../../../../settings";
import FileUpload from "./fileUpload";
/* global wps:false */

var checkedIDs = [];
export class PrivateRepository extends Component {
  constructor() {
    super();
    this.state = {
      treeData: [],
      partFlag: 0,
    };
    this.reloaddata();
  }
  reloaddata = () => {
    // console.log("state", state);
    // console.log("selectData", selectData);
    // if (selectData !== undefined) {
    //   // selectData("getTextRepositoryTree");
    // }
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
          var treeData = ConvertJsonToTree(realdata, "");
          this.setState({
            treeData: treeData,
            fullData: realdata,
          });
        } else {
        }
        //console.log("logout_ok:",this.state)
      },
      (error) => {}
    );
  };
  insertdata = () => {
    console.log("checkedIDs bef:", checkedIDs);
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
  onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
    checkedIDs = checkedKeys;
  };
  changePart = () => {
    this.setState((prevState, props) => {
      return {
        partFlag: 1 - this.state.partFlag,
      };
    });
    console.log("changePart" + this.state.partFlag);
  };
  render() {
    return (
      <>
        {this.state.partFlag == 0 ? (
          <Treeshow
            treeData={this.state.treeData}
            changeHandler={this.changePart}
            insertHandler={this.insertdata}
            reloadHandler={this.reloaddata}
            checkHandler={this.onCheck}
          ></Treeshow>
        ) : (
          <FileUpload changeHandler={this.changePart}></FileUpload>
        )}
      </>
    );
  }
}

export default PrivateRepository;
