import React, { Component } from "react";
import { Table, Button, Layout, Tree } from "antd";
import "antd/dist/antd.css";
import { DownloadOutlined } from "@ant-design/icons";
import { handlePost } from "../../../../WebAddinCommon";
import {
  GetRealDataOfYear,
  ConvertJsonToTreeOfFinance,
  GetRealDataOfFinance,
} from "../../../../../sources/RepositoryUtils";
import { apiWritePath } from "../../../../../settings";
import { Consumer } from "../../../../../components/WebAddinContext";
import { connect } from "react-redux";
import { checkfinanceyear } from "../../../../../actions";
// const { Content } = Layout;
// const locationArr = new Array();
var locationTable = [];
var numData = [];
/* global wps:false */

var checkedIDs = [];
const onSelect = (selectedKeys, info) => {
  let keyToPosition = {};
  console.log("selected", selectedKeys, info);
  // console.log("set");
  // console.log("获得单元格位置：",wps);
  let CurRange = wps.WpsApplication().Selection.Range;
  console.log("获得单元格位置：", CurRange);
  console.log("获得行数：", CurRange.Columns.Count);
  let position =
    CurRange.Columns.Item(1).Index + "," + CurRange.Rows.Item(1).Index;
  keyToPosition.key = selectedKeys[0];
  keyToPosition.value = position;
  // console.log(keyToPosition)
  locationTable.push(keyToPosition);
  console.log(locationTable);
  // document.getElementsByName(selectedKeys).value = position;
  // console.log(selectedKeys)
  // locationTable[selectedKeys] = document.getElementsByName(selectedKeys).value;
  //    获取输入框的值：console.log("id",document.getElementById("loc1").value)
  //    获取位置值console.log("读取前",document.getElementsByName("location1").value);
  console.log(numData);
};

const onCheck = (checkedKeys, info) => {
  console.log("onCheck", checkedKeys, info);
  checkedIDs = checkedKeys;
};

class detialTaskpane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: this.reloaddata(),
      timer: null,
    };

    console.log("finace table ini:", this.state);
  }

  UNSAFE_componentWillMount() {
    console.log("filltable_this.props.location:", this.props.location);
  }

  componentWillUnmount() {
    if (this.state.timer != null) {
      clearInterval(this.state.timer);
    }
  }

  componentDidMount() {
    console.log(
      "this.props.financeyears_componentDidMount",
      this.props.financeyears
    );

    this.state.timer = setInterval(() => {
      //需要定时执行的方法
      // if (this.props.financeyears===false){
      console.log("fillfinancetable_componentDidMount");
      this.props.checkfinanceyear();
      // }
    }, 1000);
  }

  reloaddata = (state, useData) => {
    console.log("filltable_this.props.location:", this.props.location);
    console.log("provide_state", state);
    console.log("provide_useData", useData);
    console.log("typeof_useData", typeof useData);
    if (useData !== undefined) {
      useData();
      return;
    }
    const Company = {};
    Company.公司ID = 1;
    Company.年份 = 2020;

    handlePost(`${apiWritePath}getinf/getFinance`, Company).then(
      (result) => {
        // this.props.history.push("/");
        console.log("get-Repository-tree-result:", result);
        if (result.success === true) {
          //加载数据到tree中
          // console.log(result["msg"]["财报ID"])
          let realdata = GetRealDataOfFinance(result);
          // console.log("realdata", realdata)
          var treeData = ConvertJsonToTreeOfFinance(realdata)[0];
          numData = ConvertJsonToTreeOfFinance(realdata)[1];
          this.setState({
            treeData: treeData,
          });
        } else {
        }
        //console.log("logout_ok:",this.state)
      },
      (error) => {}
    );
  };

  insertdata = (state, selectData, checkedKeys) => {
    console.log("checkedkeys", checkedIDs);
    console.log("state", state);
    console.log("selectData", selectData);
    /*
    console.log("insert");
    let CurRange = wps.WpsApplication().Selection.Range;
  
  
    for (var i = 0;i<locationTable.length;i++) {
      console.log(i)
      // console.log(locationTable[i])
      console.log("checkedkeys",checkedIDs)
      console.log(locationTable[i].key)
      console.log(checkedIDs)
      for(var j = 0;j<checkedIDs.length;j++)
      {
        if (locationTable[i].key === checkedIDs[j]) {
  
          var x = parseInt(locationTable[i].value.split(",")[0])
          var y = parseInt(locationTable[i].value.split(",")[1])      //将坐标拆分，后续使用cell方法定位
          
          console.log("keysss",locationTable[i].key)
          CurRange.Tables.Item(1).Cell(y, x).Range.Text = numData[locationTable[i].key].value;   //此处的table.Item还没有定位，后续要修改，将输入框中的值获取然后填充
        }
      }
      
    }
    */
    // for (var i = 0;i<checkedIDs.length;i++) {
    //   // console.log(i)
    //   // console.log(locationTable[i])
    //   console.log("checkedkeys",checkedIDs)
    //   if (locationTable[checkedIDs[i]].key in checkedIDs) {

    //     var x = parseInt(locationTable[locationTable[i].key].value.split(",")[0])
    //     var y = parseInt(locationTable[locationTable[i].key].value.split(",")[1])      //将坐标拆分，后续使用cell方法定位

    //     CurRange.Tables.Item(1).Cell(y, x).Range.Text = numData[locationTable[locationTable[i].key].key].value;   //此处的table.Item还没有定位，后续要修改，将输入框中的值获取然后填充
    //   }
    // }
    // for (var id in checkedIDs) {
    //   console.log("id:", id);
    //   var data = {};
    //   data.公司ID = 1;
    //   data.年份 = 2020;
    //   const CurWord = wps.WpsApplication();
    //   handlePost(`${apiWritePath}download/downloadTextRepositoryXml`, data).then((result) => {
    //     // this.props.history.push("/");
    //     console.log("get-Repository-tree-result:", result);
    //     if (result.success === true) {
    //       //插入数据到wps中
    //       console.log("result.msg:", Buffer.from(result.msg, "base64").toString("utf-8"))
    //       CurWord.ActiveDocument.Range(CurWord.Selection.Start, CurWord.Selection.End).InsertXML(Buffer.from(result.msg, "base64").toString("utf-8"));
    //     } else {
    //       //提示财务
    //     }
    //     //console.log("logout_ok:",this.state)
    //   },
    //     error => { });
    // }
  };
  checkyears = () => {
    this.props.checkfinanceyear();
    console.log("this.props.financeyears：", this.props.financeyears);
  };
  render() {
    // const columns = [
    //   {
    //     title: "各项指标",
    //     dataIndex: "name",
    //     width: "30%",
    //   },
    //   {
    //     title: "单元格位置",
    //     dataIndex: "value",
    //   },
    // ];
    // const selectedRowKeys = this.state.selectedRowKeys;
    // const rowSelection = {
    //   selectedRowKeys,
    //   onChange: this.onSelectChange,
    //   selections: [
    //     Table.SELECTION_ALL,
    //     Table.SELECTION_INVERT,
    //     Table.SELECTION_NONE,
    //     {
    //       key: "odd",
    //       text: "Select Odd Row",
    //       onSelect: (changableRowKeys) => {
    //         let newSelectedRowKeys = [];
    //         newSelectedRowKeys = changableRowKeys.filter((key, index) => {
    //           if (index % 2 !== 0) {
    //             return false;
    //           }
    //           return true;
    //         });
    //         this.setState({ selectedRowKeys: newSelectedRowKeys });
    //       },
    //     },
    //     {
    //       key: "even",
    //       text: "Select Even Row",
    //       onSelect: (changableRowKeys) => {
    //         let newSelectedRowKeys = [];
    //         newSelectedRowKeys = changableRowKeys.filter((key, index) => {
    //           if (index % 2 !== 0) {
    //             return true;
    //           }
    //           return false;
    //         });
    //         this.setState({ selectedRowKeys: newSelectedRowKeys });
    //       },
    //     },
    //   ],
    // };

    return (
      <Consumer>
        {({ state, useData, selectData }) => (
          <div>
            <h2>报表信息</h2>
            <div>{this.props.financeyears}</div>

            {/* <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.contentCtrolsVal}
          pagination={{ pageSize: 50, position: ["bottomLeft"] }}
          scroll={{ y: 300 }}
        />
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          style={{ margin: " 5px" }}
          onClick={this.onClickInsert.bind(null,locationTable)}
        >
          插入
        </Button> */}
            <Button onClick={this.insertdata.bind(this, state, selectData)}>
              插入
            </Button>
            <Button onClick={this.reloaddata.bind(this, state, useData)}>
              刷新
            </Button>
            <Button onClick={this.checkyears}>測試</Button>
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

const mapState = (state) => {
  return {
    curUser: state.current,
    user_id: state.current.user_id,
    financeyears: state.financeyears,
  };
};
const mapDispatch = {
  checkfinanceyear,
};

export default connect(mapState, mapDispatch)(detialTaskpane);
