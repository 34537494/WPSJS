import React, { Component } from 'react';
import { Tree, Table, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';
// import Btn from '../buttons';
import 'antd/dist/antd.css';
// import { DownloadOutlined } from '@ant-design/icons';
import ctrolClick from './tableEvent';
// import financeDetail from './detailTaskpane'
import util from "../../../../js/util"
import { handlePost } from "../../../WebAddinCommon";
import { GetRealDataOfYear, ConvertJsonToTreeOfYear } from "../../../../../src/sources/RepositoryUtils";
import { apiWritePath } from "../../../../../src/settings";
import { Consumer } from "../../../../components/WebAddinContext";
/* global wps:false */


var checkedIDs = [];
const onSelect = (selectedKeys, info,mather,baction) => {
    console.log("selectedKeys, info", selectedKeys, info);
    console.log("mather", mather);
    console.log("baction",  baction);

};


class FillTable extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            treeData: this.reloaddata(),
        };
    }
    componentDidUpdate() {
        console.log("FillTable_componentDidUpdate_this.props.location:", this.props);
         
      }
    UNSAFE_componentWillMount() {
        console.log("FillTable_this.props.location:", this.props);
        // if (this.props.location.state !== undefined) {
        //   this.setState({
        //     curUser: this.props.location.state.curUser
        //   });
        //   //console.log("tplDetail_UNSAFE_componentWillMount:",this.state.ShowDemo);
        // } else {
        //   //直接导航到compose
        //   this.props.history.push("/");
        // }
      }
      onCheck = (state, selectData, checkedKeys) => {
        console.log("onCheck", checkedKeys);
       //console.log("info", info);
     
       //console.log("test bstate:",tplData);
       console.log("test selectData:", selectData);
       
       if (selectData!== undefined){
            selectData(checkedKeys);
       }
       console.log("test newstate:",state);
       checkedIDs = checkedKeys;
       //return;

       let tsId = wps.PluginStorage.getItem("filltable_1")
       if (!tsId) {
           console.log("新taskpane：", util.GetUrlPath().substring(0,util.GetUrlPath().lastIndexOf("/"))+ "writer/fillFinanceTable")
           let tskpane = wps.CreateTaskPane(util.GetUrlPath().substring(0,util.GetUrlPath().lastIndexOf("/")) + "writer/fillFinanceTable")
           let id = tskpane.ID
           wps.PluginStorage.setItem("filltable_1", id)
           tskpane.Visible = true
           tskpane.Width = 500
       } else {
           let tskpane = wps.GetTaskPane(tsId)
           console.log("重新显示填表taskpane：")
           console.log(tskpane)
           tskpane.Visible = true
           tskpane.Width = 500
       }
   };
    reloaddata = (state, selectData) => {
        console.log("filltable state:",state);
        console.log("filltable this.state:",this.state);
        const Company = {};
        Company.公司ID = 1;
        handlePost(`${apiWritePath}getinf/getAll/getAllFinances`, Company).then((result) => {
            // this.props.history.push("/");
            console.log("path",`${apiWritePath}getinf/getAll/getAllFinances`)

            console.log("get-Repository-tree-result:", result);
            if (result.success === true) {
                //加载数据到tree中
                console.log(result)
                let realdata = GetRealDataOfYear(result)
                console.log("realdata", realdata)
                var treeData = ConvertJsonToTreeOfYear(realdata);
                this.setState({
                    treeData: treeData,
                });
            } else {

            }
            //console.log("logout_ok:",this.state)
        },
            error => { });
    }
    insertdata = (state, selectData) => {
        console.log("filltable state:",state);
        for (var id in checkedIDs) {
            console.log("id:", id);
            var data = {};
            data.公司ID = 1;
            data.文本元编号 = id;
            const CurWord = wps.WpsApplication();
            handlePost(`${apiWritePath}download/downloadTextRepositoryXml`, data).then((result) => {
                // this.props.history.push("/");
                console.log("get-Repository-tree-result:", result);
                if (result.success === true) {
                    //插入数据到wps中
                    console.log("result.msg:", Buffer.from(result.msg, "base64").toString("utf-8"))
                    CurWord.ActiveDocument.Range(CurWord.Selection.Start, CurWord.Selection.End).InsertXML(Buffer.from(result.msg, "base64").toString("utf-8"));
                } else {
                    //提示财务
                }
                //console.log("logout_ok:",this.state)
            },
                error => { });
        }
    }

    render() {
        return (
        <Consumer>
        {({ state, selectData }) => (
            <div>
                <h2>报表自动填写 </h2>
                {/* <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.contentCtrolsVal} pagination={{ pageSize: 50, position: ['bottomLeft'] }} scroll={{ y: 450 }} />
                <Button type="primary" onClick = {this.financeDetail.bind()} icon={<FormOutlined />} size={"large"}>
          设置
        </Button> */}
        
                <Button onClick={this.insertdata.bind(this, state, selectData)}>插入</Button>
                <Button onClick={this.reloaddata.bind(this, state, selectData)}>刷新</Button>
                <br />
                <Tree
                    checkable
                    onSelect={onSelect}
                    onCheck={this.onCheck.bind(this, state, selectData)}
                    treeData={this.state.treeData}
                    multiple = {"false"}
                />
            </div>
            )}
            </Consumer>
        )
    }
}

export default FillTable;
