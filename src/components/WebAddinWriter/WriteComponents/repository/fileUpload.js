import React, { Component } from "react";
import {
  InboxOutlined,

} from "@ant-design/icons";
import { message, Upload, Button } from "antd";
import Fragments from "./fragments.js";
const { Dragger } = Upload;

// import { reject, resolve } from "core-js/fn/promise";

/* global wps:false */

export default class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      uploaded: false,
      fileList: [],
      uploading: false,
      uploadFlag: true,
      resetFlag: true,
      backFlag: false,
    };
  }
  onRemove = (file) => {
    if (this.state.uploading) {
      alert("正在上传中");
      return;
    }
    const index = this.state.fileList.indexOf(file);
    const newFileList = this.state.fileList;
    newFileList.splice(index, 1);
    this.setState({
      fileList: newFileList,
    });
    if (this.state.fileList.length == 0) {
      this.setState({
        uploadFlag: true,
        resetFlag: true,
      });
    }
    console.log(this.state.fileList);
  };
  onDrop = (e) => {
    // console.log("Dropped files", e.dataTransfer.files);
  };
  beforeUpload = (file) => {
    const fileLimit = file.size / 1024 / 1024 < 1;
    return new Promise((resolve, reject) => {
      if (!fileLimit) {
        message.error("文件太大,无法上传");
        return reject(false);
      }
      this.setState.fileList = this.state.fileList.push(file);
      this.setState({
        uploadFlag: false,
        resetFlag: false,
      });
      console.log(this.state.fileList);
      return resolve(false);
    });
  };

  handleUpload = () => {
    this.setState({ uploading: true, resetFlag: true, backFlag: true });
    // this.props.changeUploaded();
    //   return { // this.setState((prevState, props) => {
    //     uploaded: true,
    //   };

    //   // return new Promise(resolve, reject);
    // });
    Fragments.handleSuccess = this.handleSuccess;
    Fragments.handleFiled = this.handleFiled;
    Fragments.fragments(this.state.fileList);
    //下面用ajax传输获取数据
  };
  handleSuccess = () => {
    alert("上传成功");
    this.setState({
      uploading: false,
      resetFlag: false,
      backFlag: false,
    });
  };
  handleFiled = () => {
    alert("上传失败");
    this.setState({
      uploading: false,
      resetFlag: false,
      backFlag: false,
    });
  };
  handleReset = () => {
    this.setState({
      fileList: [],
      uploadFlag: true,
      resetFlag: true,
    });
  };
  handleBack = () => {
    this.props.changeHandler();
  };

  render() {
    return (
      <>
        <>
          <div>
            <>
              <Button
                type="primary"
                onClick={this.handleUpload}
                disabled={this.state.uploadFlag}
                loading={this.state.uploading}
                style={{
                  marginTop: 16,
                  marginBottom: 16,
                  marginRight: 35,
                  height: 40,

                  fontSize: 18,
                }}
              >
                {this.state.uploading ? "上传中" : "上传"}
              </Button>
              <Button
                type="primary"
                onClick={this.handleReset}
                disabled={this.state.resetFlag}
                style={{
                  height: 40,
                  fontSize: 18,
                }}
              >
                重置
              </Button>
              <Button
                type="primary"
                onClick={this.handleBack}
                disabled={this.state.backFlag}
                style={{
                  height: 40,
                  fontSize: 18,
                  marginLeft: 35,
                }}
              >
                查看数据
              </Button>
            </>
            <>
              <Dragger
                accept=".doc,.docx"
                onRemove={this.onRemove}
                beforeUpload={this.beforeUpload}
                onDrop={this.onDrop}
                fileList={this.state.fileList}
                style={{ width: "80%", margin: "0 0 0 10%" }}
                multiple
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或者拖拽文件到此处上传</p>
                <p className="ant-upload-hint">支持单次或批量上传</p>
              </Dragger>
            </>
          </div>
        </>
      </>
    );
  }
}
