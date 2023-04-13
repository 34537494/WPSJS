import React, { Component } from "react";
import { Button, notification, Form, Input, Select} from 'antd'
import { handlePost } from "../../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../../settings";
import questionTypeInfo from "./questionTypeInfo"
const { Option } = Select;
const { TextArea } = Input;
/* global wps:false */

class SetQuestionType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      typeName: undefined,
      questionType: undefined,
      describe: undefined,
      questionTypeInfo: questionTypeInfo,
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
    Information.typename = this.state.typeName;
    Information.questiontype = this.state.questionType;
    Information.describe = this.state.describe;

    handlePost(`${apiWritePath}question_bank/upload/uploadquestiontype`, Information).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        if (result.success === true) {
          notification.open({
            message: '上传提示',
            description:
              '试题类型上传成功',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
        } else {
          notification.open({
            message: '上传提示',
            description:
              '试题类型上传失败',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });        }
      },
      (error) => { 
        console.log(error) }
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

  SetType = (e) => {
    this.setState({ questionType: e })
  }

  render() {
    return (
      <div>
        <p>上传试题类型</p>
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
              label="试题类型名称"
              name="typeName"
              rules={[
                {
                  required: true,
                  message: '请输入试题类型名称!',
                },
              ]}
              onChange={this.setInfo.bind(this, "typeName")}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="试题类型"
              name="questionType"
              rules={[
                {
                  required: true,
                  message: '请选择试题类型!',
                },
              ]}
            >
              <Select
                placeholder="选择试题类型"
                onChange={this.SetType.bind(this)}
                allowClear
                showSearch
              >
                {this.state.questionTypeInfo?.map(item =>
                  (<Option key={item.ID}>{item.info}</Option>))}
              </Select>
            </Form.Item>
            <Form.Item
              label="试题类型描述"
              name="describe"   
              onChange={this.setInfo.bind(this, "describe")}
            >
              <TextArea rows={4} />
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

export default SetQuestionType;
