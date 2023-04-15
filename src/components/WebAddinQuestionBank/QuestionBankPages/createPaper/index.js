import React, { Component } from "react";
import "./style.css"
import { PointerSensor, useSensors, useSensor } from '@dnd-kit/core';
import { Select, Table, notification, Form, Input, Button } from 'antd'
import { handlePost } from "../../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../../settings";
import Tables from '../../QuestionBankComponents/Table'
import SortableTable from '../../QuestionBankComponents/SortableTable'
import sizeInfo from "./sizeInfo"

const { Option } = Select;

/* global wps:false */

class CreatePaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      typeNum: "1",
      questionType: "1",
      questions: [],
      selectedQuestion: [],
      selectedRowKey: [[], [], []],
      questionTypeList: [],
      loading: true,
      paperName: '请输入试卷名',
      setting: true,
      courseInfo: [],
      bookID: '',
      courseID: '',
      sizeInfo: sizeInfo,
      titleSize: 36,
      typeSize: 21,
      bodySize: 21,
    };
  }
  componentWillUnmount() {

    if (this.state.timer != null) {
      clearInterval(this.state.timer);
    }
  }

  componentDidMount() {
    this.getQuestion(this.state.typeNum);
    this.getQuestionType();
    this.getCourseInfo();
  }

  getCourseInfo = () => {
    handlePost(`${apiWritePath}question_bank/getinf/getallcourse`).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        if (result.success === true) {
          this.setState({ courseInfo: result.data })
        } else {
          console.log("false");
        }
      },
      (error) => { }
    );
  }

  getQuestionType = () => {
    handlePost(`${apiWritePath}question_bank/getinf/getquestiontype`).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        if (result.success === true) {
          this.setState({ questionTypeList: result.data })
        } else {
          console.log("false");
        }
      },
      (error) => { console.log(error); }
    );
  }

  getQuestion = (typeNum) => {
    const Information = {};
    Information.questionType = typeNum;
    this.setState({ loading: true })
    handlePost(`${apiWritePath}question_bank/getinf/getquestionbytype`, Information).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        let dataWithKey = []
        result.data.map((item, index) => {
          dataWithKey.push(Object.assign(item, { key: item.试题ID }))
        })
        this.setState({ questions: dataWithKey })
        this.setState({ loading: false })
      },
      (error) => { }
    );
  }

  setQuestionType = (e) => {
    // console.log(this.state.questionTypeList[e - 1].题型分类,e);
    let typeNum = this.state.questionTypeList[this.state.questionType - 1].题型分类
    // this.setState({ questionType: this.state.questionTypeList[e-1]["题型分类"] })
    this.setState({ typeNum: this.state.questionTypeList[this.state.questionType - 1].题型分类 })

    this.setState({ questionType: e }, () => { this.getQuestion(typeNum); console.log(this.state.questionType) })
  }

  addSelectedQuestion = (addQuestion) => {
    let sQuestion = this.state.selectedQuestion
    sQuestion.push(addQuestion);
    this.setState({ selectedQuestion: sQuestion })
  }

  setSelectedQuestion = (newSQuestion) => {
    this.setState({ selectedQuestion: newSQuestion })
  }

  setSelect = (selectedRowKeys) => {
    let newRowKeys = this.state.selectedRowKey;
    newRowKeys[this.state.typeNum - 1] = selectedRowKeys;
    this.setState({ selectedRowKey: newRowKeys });
  }

  setPaperName = (e) => {
    this.setState({ paperName: e.target.value });
  }

  hasSetting = () => {
    this.setState({ setting: false })
  }

  goSetting = () => {
    this.setState({ setting: true })
  }

  setBook = (e) => {
    this.setState({ bookID: e })
  }

  setCourse = (e) => {
    this.setState({ courseID: e })
  }

  setTitleSize = (e) => {
    if (e === undefined) {
      this.setState({ titleSize: 36 })
    }
    else {
      this.setState({ titleSize: this.state.sizeInfo[e - 1].size })
    }
  }

  setTypeSize = (e) => {
    if (e === undefined) {
      this.setState({ typeSize: 21 })
    }
    else {
      this.setState({ typeSize: this.state.sizeInfo[e - 1].size })
    }
  }

  setBodySize = (e) => {
    if (e === undefined) {
      this.setState({ bodySize: 21 })
    }
    else {
      this.setState({ bodySize: this.state.sizeInfo[e - 1].size })
    }
  }

  onFinish = (values) => {
    this.hasSetting()
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  settingOrQuestion = () => {
    if (this.state.setting === false) {
      return (
        <div>
          <Button onClick={this.goSetting}>修改设置</Button>

          <div style={{ display: "flex" }}>
            <div id="selectedTable">
              <div style={{ height: "4px" }}></div>
              <SortableTable
                bookID={this.state.bookID}
                courseID={this.state.courseID}
                titleSize={this.state.titleSize}
                typeSize={this.state.typeSize}
                bodySize={this.state.bodySize}
                selectedQuestion={this.state.selectedQuestion}
                questionType={this.state.questionType}
                questionTypeList={this.state.questionTypeList}
                selectedRowKey={this.state.selectedRowKey}
                setSelectedQuestion={this.setSelectedQuestion}
                paperName={this.state.paperName}
              ></SortableTable>
            </div>
            <div style={{ width: "2vw" }}></div>
            <div id="table">
              <Select
                defaultValue="单项选择题"
                style={{ width: "48vw" }}
                onChange={this.setQuestionType}>
                {this.state.questionTypeList?.map(item =>
                  (<Option key={item.试题类型ID}>{item.题型名称}</Option>))}
              </Select>
              <Tables

                questionTypeList={this.state.questionTypeList}
                questionType={this.state.questionType}
                typeNum={this.state.questionTypeList[this.state.questionType - 1]}
                setSelect={this.setSelect}
                selectedQuestion={this.state.selectedQuestion}
                setSelectedQuestion={this.setSelectedQuestion}
                addSelectedQuestion={this.addSelectedQuestion}
              ></Tables>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
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
            >
              <Select
                placeholder="选择课程信息"
                onChange={this.setCourse.bind(this)}
                allowClear
                showSearch
              >
                {this.state.courseInfo?.map(item =>
                  (<Option key={item.课程ID}>{item.课程名}</Option>))}
              </Select>
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
                onChange={this.setBook.bind(this)}
                allowClear
                showSearch
              >
                {this.state.courseInfo?.filter(item => item.课程ID === this.state.courseID).map(item =>
                  (<Option key={item.书本ID}>{item.书名}</Option>))}
              </Select>
            </Form.Item>
            <Form.Item
              label="试卷名称"
              name="paperName"
              rules={[
                {
                  required: true,
                  message: '请输入试卷名称!',
                },
              ]}
            >
              <Input
                value={this.state.paperName}
                onChange={this.setPaperName}
              />
            </Form.Item>
            <Form.Item
              label="选择字体大小"
              name="size"
            >
              <div className="sizeSelect">
                <div >
                  <p>设置标题字体</p>
                  <Select
                    // style={{ minwidth: "130px" }}
                    placeholder="默认大小为36"
                    onChange={this.setTitleSize.bind(this)}
                    allowClear
                    showSearch
                    optionFilterProp="children"
                  >
                    {this.state.sizeInfo?.map(item =>
                      (<Option key={item.ID}>{item.name}</Option>))}
                  </Select>
                </div>
                <div>
                  <p>设置试题类型字体</p>
                  <Select
                    // style={{ minwidth: "130px" }}
                    placeholder="默认大小为21"
                    onChange={this.setTypeSize.bind(this)}
                    allowClear
                    showSearch
                    optionFilterProp="children"
                  >
                    {this.state.sizeInfo?.map(item =>
                      (<Option key={item.ID}>{item.name}</Option>))}
                  </Select>
                </div>
                <div>
                  <p>设置试题字体</p>
                  <Select
                    // style={{ minwidth: "130px" }}
                    placeholder="默认大小为21"
                    onChange={this.setBodySize.bind(this)}
                    allowClear
                    showSearch
                    optionFilterProp="children"
                  >
                    {this.state.sizeInfo?.map(item =>
                      (<Option key={item.ID}>{item.name}</Option>))}
                  </Select>
                </div>
              </div>
              <p>若不对字体进行设置，则按照默认字体设置</p>
            </Form.Item>
            <Button type="primary" htmlType="submit">
              完成设置
            </Button>
          </Form>
        </div>
      )
    }
  }

  test = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>生成试卷</p>
        <div id="form">
          {this.settingOrQuestion()}
          {/* 首先进行设置，设置完成之后选择试题 */}
          <Button onClick={this.test}>test</Button>
        </div>
      </div>
    )
  }
}

export default CreatePaper;
