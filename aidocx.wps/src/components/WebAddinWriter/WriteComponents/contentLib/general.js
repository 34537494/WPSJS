import React, { Component } from "react";
// import Select from "react-select";
import { Tree, Input, Button, Select } from "antd";
const { Search } = Input;

function General(props) {
  const onChange = (val) => {
    props.getOption(val);
  };
  const onSearch = () => {
    props.onSearch();
  };
  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <h2>内容库</h2>
      <div style={{ display: "flex" }}>
        <Select
          style={{ width: "120px", margin: "0 2px 0 0 " }}
          defaultValue="请选择"
          onChange={onChange}
        >
          <Select.Option value="共有库">共有库</Select.Option>
          <Select.Option value="私有库">私有库</Select.Option>
        </Select>
        <Search placeholder="请输入要搜索内容" allowClear onSearch={onSearch} />
      </div>
      <br />
    </div>
  );
}
export default General;
