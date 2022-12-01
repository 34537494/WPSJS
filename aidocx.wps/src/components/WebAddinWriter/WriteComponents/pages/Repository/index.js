import React, { Component } from "react";
import { Tree, Input, Button, Select } from "antd";
import PublicRepository from "../../repository/publicRepository";
import PrivateRepository from "../../repository/privateRepository";
import SearchBox from "../../repository/searchbox";

const { Search } = Input;
class Repository extends React.Component {
  constructor() {
    super();
    this.state = {
      pageFlag: -1,
    };
    this.getOption = this.getOption.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  getOption = (val) => {
    if (val == "公共库") {
      //回调函数，为了state立即生效
      this.setState((prevState, props) => {
        return {
          pageFlag: 0,
        };
      });
      // console.log(this.state.flag);
      // console.log("共有库");
    }
    if (val == "私有库") {
      this.setState((prevState, props) => {
        return {
          pageFlag: 1,
        };
      });

      // console.log(this.state.flag);
      // console.log("私有库");
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
  changePage = (option) => {
    if (option === 0) {
      return <PublicRepository></PublicRepository>;
    }
    if (option === 1) {
      return <PrivateRepository></PrivateRepository>;
    }
  };
  render() {
    return (
      <>
        <SearchBox
          getOption={this.getOption}
          onSearch={this.onSearch}
        ></SearchBox>
        {this.changePage(this.state.pageFlag)}
      </>
    );
  }
}

export default Repository;
