import React, { Component } from "react";
// import Select from "react-select";
import { Tree, Input, Button, Select } from "antd";
import General from "../../contentLib/general";
import Fileupload from "../../contentLib/fileUpload";
import Treeshow from "../../contentLib/treeShow";
const { Search } = Input;
class contentLib extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: -1,
    };
    this.getOption = this.getOption.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  getOption = (val) => {
    if (val == "共有库") {
      //回调函数，为了state立即生效
      this.setState((prevState, props) => {
        return {
          flag: 0,
        };
      });
      console.log(this.state.flag);
      console.log("共有库");
    } else if (val == "私有库") {
      this.setState((prevState, props) => {
        return {
          flag: 1,
        };
      });
      console.log(this.state.flag);
      console.log("私有库");
    }
  };

  onSearch = () => {};
  convertData() {
    return [
      {
        title: "parent 1",
        key: "0-0",
        children: [
          {
            title: "parent 1-0",
            key: "0-0-0",
            disabled: true,
            children: [
              {
                title: "leaf",
                key: "0-0-0-0",
                disableCheckbox: true,
              },
              {
                title: "leaf",
                key: "0-0-0-1",
              },
            ],
          },
          {
            title: "parent 1-1",
            key: "0-0-1",
            children: [
              {
                title: (
                  <span
                    style={{
                      color: "#1890ff",
                    }}
                  >
                    sss
                  </span>
                ),
                key: "0-0-1-0",
              },
            ],
          },
        ],
      },
    ];
  }

  render() {
    return (
      <div style={{ margin: "20px", padding: "10px" }}>
        <>
          <General
            getOption={this.getOption}
            onSearch={this.onSearch}
          ></General>
        </>
        <Fileupload val={this.state.flag}></Fileupload>
        <Treeshow
          val={this.state.flag}
          treeData={this.convertData()}
        ></Treeshow>
      </div>
    );
  }
}

export default contentLib;

/* <div>
  <h2>内容库</h2>
  <div style={{ display: "flex" }}>
    <Select
      style={{ width: "120px", margin: "0 2px 0 0 " }}
      defaultValue="请选择"
      onChange={this.getOption.bind(this)}
    >
      <Select.Option value="共有库">共有库</Select.Option>
      <Select.Option value="私有库">私有库</Select.Option>
    </Select>
    <Search
      placeholder="请输入要搜索内容"
      allowClear
      onSearch={() => {
        console.log("search");
      }}
    />
  </div>
  </div> */
