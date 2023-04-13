import React, { Component } from "react";
import "./style.css"
import { Button, notification, Form, Input } from 'antd'
import { handlePost } from "../../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../../settings";

/* global wps:false */

class SetBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      bookName: undefined,
      editor: undefined,
      press: undefined,
      year: undefined,
      chapterCount: undefined,
    };
  }
  componentWillUnmount() {
    if (this.state.timer != null) {
      clearInterval(this.state.timer);
    }
  }

  componentDidMount() {

  }
  onFinish = (values) => {
    const Information = {};
    Information.bookname = this.state.bookName;
    Information.editor = this.state.editor;
    Information.press = this.state.press;
    Information.year = this.state.year;
    Information.chaptercount = this.state.chapterCount;

    handlePost(`${apiWritePath}question_bank/upload/uploadbook`, Information).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        if (result.success === true) {
          notification.open({
            message: '上传提示',
            description:
              '书本信息上传成功',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
        } else {
          console.log("false");
        }
      },
      (error) => { }
    );
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  setInfo = (name, e) => {
    const newState = {};
    newState[name] = e.target.value
    this.setState(newState)
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>设置书本</p>
        <div id="form">
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off">
            <Form.Item
              label="书名"
              name="bookName"
              rules={[
                {
                  required: true,
                  message: '请输入书本名称!',
                },
              ]}
              onChange={this.setInfo.bind(this, "bookName")}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="作者"
              name="editor"
              rules={[
                {
                  required: true,
                  message: '请输入作者名称!',
                },
              ]}
              onChange={this.setInfo.bind(this, "editor")}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="出版社"
              name="press"
              rules={[
                {
                  required: true,
                  message: '请输入出版社!',
                },
              ]}
              onChange={this.setInfo.bind(this, "press")}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="年限"
              name="year"
              rules={[
                {
                  required: true,
                  message: '请输入年限!',
                },
              ]}
              onChange={this.setInfo.bind(this, "year")}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="章节数"
              name="chapterCount"
              rules={[
                {
                  required: true,
                  message: '请输入书本章节数!',
                },
              ]}
              onChange={this.setInfo.bind(this, "chapterCount")}
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit" >
              提交
            </Button>
          </Form>
        </div>
      </div>

    )
  }
}

export default SetBook;
