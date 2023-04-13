import React, { Component } from "react";
import { Button, notification, Form, Input, Select, Spin } from 'antd'
import { handlePost } from "../../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../../settings";
// import { BookSelect } from "./BookSelect"

const { Option } = Select;

/* global wps:false */

class SetCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      courseName: undefined,
      bookId: undefined,
      bookInfo: this.getBookInfo(),
      option: [],
    };
  }
  componentWillUnmount() {
    if (this.state.timer != null) {
      clearInterval(this.state.timer);
    }
  }
  componentDidMount() {
    this.getBookInfo();
  }

  getBookInfo = () => {
    handlePost(`${apiWritePath}question_bank/getinf/getallbook`).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        if (result.success === true) {
          this.setState({ bookInfo: result.data })
        } else {
          console.log("false");
        }
      },
      (error) => { }
    );
  }
  onFinish = (values) => {
    // 也可以通过values读取填写的值
    const Information = {};
    Information.coursename = this.state.courseName;
    Information.bookid = this.state.bookId;

    handlePost(`${apiWritePath}question_bank/upload/uploadcourse`, Information).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        if (result.success === true) {
          notification.open({
            message: '上传提示',
            description:
              '课程信息上传成功',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
        } else {
          notification.open({
            message: '上传提示',
            description:
              '课程信息上传失败，课程已经上传',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });        
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
  }

  setSelect = (e) => {
    this.setState({ bookId: e })
  }

  // getOptions = () => {
  //   for (let i = 0; i < this.state.options.length; i++) {
  //     let item = this.state.bookInfo[i]
  //     this.state.option.push(<Option value={item.书本ID}>{item.书名}</Option>)
  //   }
  // }

  render() {
    return (
      <div>
        <p>设置课程</p>
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
              label="课程名"
              name="courseName"
              rules={[
                {
                  required: true,
                  message: '请输入课程名称!',
                },
              ]}
              onChange={this.setInfo.bind(this, "courseName")}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="参考书本"
              name="bookName"
              rules={[
                {
                  required: true,
                  message: '请输入书本名称!',
                },
              ]}
            >
              <Select
                placeholder="选择书本信息"
                onChange={this.setSelect.bind(this)}
                allowClear
                showSearch
              >
                {this.state.bookInfo?.map(item =>
                  (<Option key={item.书本ID}>{item.书名}</Option>))}
              </Select>
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

export default SetCourse;
