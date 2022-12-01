import React, { Component } from "react";
// import Select from "react-select";
import { Tree, Input, Button, Select } from "antd";
const { Search } = Input;

function SearchBox(props) {
  const onChange = (val) => {
    // console.log("val" + val);
    props.getOption(val);
  };
  const onSearch = () => {
    props.onSearch();
  };
  return (
    <div style={{ marginLeft: "10px", marginRight: "10px", marginTop: "20px" }}>
      <h2>内容库</h2>
      <div style={{ display: "flex" }}>
        <Select
          style={{ width: "120px", margin: "0 2px 0 0 " }}
          defaultValue="请选择"
          onChange={onChange}
        >
          <Select.Option value="公共库">公共库</Select.Option>
          <Select.Option value="私有库">私有库</Select.Option>
        </Select>
        <Search placeholder="请输入要搜索内容" allowClear onSearch={onSearch} />
      </div>
    </div>
  );
}
export default SearchBox;
