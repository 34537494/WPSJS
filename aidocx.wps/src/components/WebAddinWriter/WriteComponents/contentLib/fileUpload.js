import React, { Component } from "react";
import {
  BlockOutlined,
  InboxOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { message, Upload, Button } from "antd";
import Treeshow from "./treeShow";
import Fragments from "./fragments.js";
// import { reject, resolve } from "core-js/fn/promise";
const { Dragger } = Upload;
/* global wps:false */

export default class fileUpload extends Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      uploading: false,
      uploaded: false,
      flag: true,
    };
  }

  onRemove = (file) => {
    const index = this.state.fileList.indexOf(file);
    const newFileList = this.state.fileList;
    newFileList.splice(index, 1);
    this.setState({
      fileList: newFileList,
    });
    if (this.state.fileList.length == 0) {
      this.setState({
        flag: true,
      });
    }
    console.log(this.state.fileList);
  };
  onDrop(e) {
    // console.log("Dropped files", e.dataTransfer.files);
  }
  beforeUpload(file) {
    const fileLimit = file.size / 1024 / 1024 < 1;
    return new Promise((resolve, reject) => {
      if (!fileLimit) {
        message.error("文件太大,无法上传");
        return reject(false);
      }
      this.setState.fileList = this.state.fileList.push(file);
      this.setState({
        flag: false,
      });
      console.log(this.state.fileList);
      return resolve(false);
    });
  }

  handleUpload() {
    this.setState({ uploading: true });
    this.setState((prevState, props) => {
      return {
        uploaded: true,
      };
      // return new Promise(resolve, reject);
    });
    Fragments.fragments(this.state.fileList);
    //下面用ajax传输获取数据
  }

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
  handleReset() {
    this.setState({
      fileList: [],
      flag: true,
    });
  }
  handleBack() {
    this.setState((prevState, props) => {
      return {
        uploaded: false,
        uploading: false,
      };
    });
  }
  render() {
    return (
      <>
        {(this.props.val == 1 ? true : false) ? (
          <div
            style={{
              display: this.state.uploaded ? "none" : "block",
            }}
          >
            <>
              <Button
                type="primary"
                onClick={this.handleUpload.bind(this)}
                disabled={this.state.flag}
                loading={this.state.uploading}
                style={{
                  marginBottom: 16,
                  marginRight: 35,
                  height: 40,
                  width: 80,
                  fontSize: 18,
                }}
              >
                {this.state.uploading ? "上传中" : "上传"}
              </Button>
              <Button
                type="primary"
                onClick={this.handleReset.bind(this)}
                disabled={this.state.flag}
                style={{
                  marginBottom: 16,
                  marginLeft: 35,
                  height: 40,
                  width: 80,
                  fontSize: 18,
                }}
              >
                重置
              </Button>
            </>
            <>
              <Dragger
                onRemove={this.onRemove.bind(this)}
                beforeUpload={this.beforeUpload.bind(this)}
                onDrop={this.onDrop.bind(this)}
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
        ) : (
          ""
        )}
        <div
          style={{
            display: this.state.uploaded ? "block" : "none",
          }}
        >
          <Button
            type="primary"
            onClick={this.handleBack.bind(this)}
            style={{
              marginBottom: 10,
              height: 50,
              width: 100,
              fontSize: 18,
            }}
          >
            重新上传
          </Button>
          <Treeshow val={0} treeData={this.convertData()}></Treeshow>
        </div>
      </>
    );
  }
}
