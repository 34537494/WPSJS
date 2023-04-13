import React, { Component } from "react";
import { Button, notification, Form, Input, Select, Radio } from 'antd'
const { Option } = Select;
const { TextArea } = Input;

/* global wps:false */


class SingleQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div id="form">
          <Form
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off">
            <Form.Item
              label="试题所在书本"
              name="bookName"
              // rules={[
              //   {
              //     required: true,
              //     message: '请选择试题所在书本!',
              //   },
              // ]}
            >
              <Select
                placeholder="选择书本"
                onChange={this.props.setBook.bind(this)}
                allowClear
                showSearch
              >
                {this.props.bookInfo?.map(item =>
                  (<Option key={item.书本ID}>{item.书名}</Option>))}
              </Select>
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
                onChange={this.props.setQuestionType.bind(this)}
                allowClear
                showSearch
              >
                {this.props.questionTypeList?.map(item =>
                  (<Option key={item.试题类型ID}>{item.题型名称}</Option>))}
              </Select>
            </Form.Item>
            <Form.Item
              label="注意事项"
              name="notes"
              onChange={this.props.setInfo.bind(this, "describe")}
            >
              <p>请在左侧输入试题，请勿包括题号、题型等信息，再点击提交</p>
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

export default SingleQuestion;
