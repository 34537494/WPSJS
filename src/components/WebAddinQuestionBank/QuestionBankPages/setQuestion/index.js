import React, { Component } from "react";
import { Button, notification, Form, Input, Select, Radio } from 'antd'
import { handlePost } from "../../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../../settings";
import SingleQuestion from './SingleQuestion'
import MultiQuestion from './MultiQuestion'
const { Option } = Select;
const { TextArea } = Input;

/* global wps:false */

const options = [
  {
    label: '单题导入',
    value: '1',
  },
  {
    label: '批量识别',
    value: '2',
  },
];

class SetQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: undefined,
      chapterCount: undefined,
      questionType:undefined,
      uploadType: '2',
      question: '',
      questionTypeList: this.getQuestionType(),
      bookInfo: this.getBookInfo(),
    };
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

  setInfo = (name, e) => {
    const newState = {};
    newState[name] = e.target.value
    this.setState(newState)
  }

  setType = (e) => {
    this.setState({ uploadType: e })
  }

  setQuestionType = (e) => {
    this.setState({ questionType: e })
  }

  setBook = (e) => {
    this.setState({ bookName: e })
  }

  setChapterCount = (e) => {
    this.setState({ chapterCount: e })
  }

  setQuestion = (e) => {
    this.setState({ question: e.target.value })
  }

  onChangeUploadType = (e) => {
    this.setState({ uploadType: e.target.value })
  }

  selectUploadFunc = () => {
    if (this.state.uploadType === "1") {
      return <SingleQuestion 
      questionTypeList={this.state.questionTypeList}
      bookInfo={this.state.bookInfo}
      setQuestion={this.setQuestion} 
      setInfo={this.setInfo}
      setBook={this.setBook}
      setType={this.setType}
      setQuestionType={this.setQuestionType}
      ></SingleQuestion>
    }
    else {
      return <MultiQuestion></MultiQuestion>
    }
  }

  test=()=> {
    console.log(this.state);
  }

  render() {
    return (
      <div id="body">
        <p>上传试题</p>
        <p>建议使用插入-{">"}公式功能插入试题，</p>
        <p>能增加试题搜索成功率</p>
        {/* <Radio.Group options={options}
          onChange={this.onChangeUploadType.bind(this)}
          value={this.state.uploadType}
          optionType="button"
          buttonStyle="solid"
        /><br />
        {this.selectUploadFunc(this)} */}
        <MultiQuestion></MultiQuestion>
        {/* <Button onClick={this.test()}>test</Button> */}
      </div>
    )
  }
}

export default SetQuestion;
