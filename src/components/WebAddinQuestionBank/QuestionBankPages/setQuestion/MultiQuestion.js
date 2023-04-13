import React, { Component } from "react";
import { Button, notification, Form, Input, Select, Radio } from 'antd'
import { LockFilled } from "@ant-design/icons";
import { handlePost } from "../../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../../settings";
const { Option } = Select;
const { TextArea } = Input;
/* global wps:false */


class MultiQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeNum: [[0, 0], [0, 0], [0, 0]],
      uploadTypeNum: 0,
      loading: false,
    };
  }

  uploadActiveDoc = () => {
    this.setState({ loading: true });
    let wpsapp = wps.WpsApplication();

    wpsapp.ActiveDocument.Range().ListFormat.ConvertNumbersToText();
    //将列表（自动编号）转换为文本
    let firstPara = wpsapp.ActiveDocument.Paragraphs.Item(1);
    if (!firstPara) {
      notification.open({
        message: '上传提示',
        description:
          '没有内容，请在左侧输入内容',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }
    else {
      let questionDescribe = firstPara.Text;
      let haveFund = 0;
      let typeName = "";
      let para = firstPara;
      let startIndex = 0;
      let endIndex = 0;
      let questionXml = "";
      let questionType = 0;

      this.setState({ typeNum: [[0, 0], [0, 0], [0, 0]] })

      let tempType = this.state.typeNum;

      // let bracket = new RegExp("[(（]");
      // let matchhapter = new RegExp("[\d一二三四五六七八九十百]{1,10}");
      let paraIndex = 1;
      let questionRange;  //存储题目的Range对象，方便读取xml和文本

      while (para) {
        if (para.Range.Text && para.Range.Text.length > 0) {
          if (para.Range.Font.Size > 12) {
            haveFund = 0;
          }
          if (para.Range.Text.match("、")) {
            // 判断是否为大标题
            if (para.Range.Text.match("、").index < 3) {
              if (haveFund !== 0) {
                endIndex = paraIndex - 1

                questionRange = wpsapp.ActiveDocument.Range(
                  wpsapp.ActiveDocument.Paragraphs.Item(startIndex).Range.Start + wpsapp.ActiveDocument.Paragraphs.Item(startIndex).Range.Text.match(/\.(\s\S)*/).index + 1,
                  wpsapp.ActiveDocument.Paragraphs.Item(endIndex).Range.End
                );
                questionDescribe = questionRange.Text;
                questionXml = questionRange.WordOpenXML.split(/<w:pPr>.*?<\/w:pPr>/).join('');
                // console.log(questionXml.split(/<w:pPr>(\S\s*)<\/w:pPr>/));
                // console.log(questionType, questionDescribe, questionXml, tempType);
                this.upload(questionType, questionDescribe, questionXml, tempType);

                haveFund = 0;
              }
              typeName = para.Range.Text.match(/、(\S*)（/)[1];
              if (typeName.match("选择")) {
                questionType = 1;
              }
              else if (typeName.match("填空")) {
                questionType = 2;
              }
              else {
                questionType = 3;
              }
              this.uploadType(typeName,questionType)
              para = para.Next();
              paraIndex += 1;
              continue;
            }
          }
          if (para.Range.Text.match(/\r\n|[\r\n]/).index === 0) {
            para = para.Next();
            paraIndex += 1;
            continue;
          }
          if (!isNaN(Number(para.Range.Text.split('.')[0]))) {
            // 判断是否为题号，并且是否是第一次，如是第一次找到，则前面的内容不能上传
            if (haveFund === 0) {
              haveFund = 1;
            }
            else {
              endIndex = paraIndex - 1
              questionRange = wpsapp.ActiveDocument.Range(
                wpsapp.ActiveDocument.Paragraphs.Item(startIndex).Range.Start + wpsapp.ActiveDocument.Paragraphs.Item(startIndex).Range.Text.match(/\.(\s\S)*/).index + 1,
                wpsapp.ActiveDocument.Paragraphs.Item(endIndex).Range.End
              );
              questionDescribe = questionRange.Text;
              questionXml = questionRange.WordOpenXML.split(/<w:pPr>.*?<\/w:pPr>/).join('');

              if (typeName.match("选择")) {
                questionType = 1;
              }
              else if (typeName.match("填空")) {
                questionType = 2;
              }
              else {
                questionType = 3;
              }
              // this.uploadType(typeName,questionType)
              // console.log(questionXml.split(/<w:pPr>.*?<\/w:pPr>/));

              this.upload(questionType, questionDescribe, questionXml, tempType)
            }
            // questionDescribe = para.Range.Text;
            // console.log(startIndex,endIndex);

            startIndex = paraIndex;
          }
          para = para.Next();
        }
        paraIndex += 1;
      }
      endIndex = paraIndex - 1;
      // console.log(wpsapp.ActiveDocument.Paragraphs.Item(startIndex-1).Range.Text);
      // console.log(wpsapp.ActiveDocument.Paragraphs.Item(startIndex+1).Range.Text);
      questionRange = wpsapp.ActiveDocument.Range(
        wpsapp.ActiveDocument.Paragraphs.Item(startIndex).Range.Start + wpsapp.ActiveDocument.Paragraphs.Item(startIndex-1).Range.Text.match(/\.(\s\S)*/).index + 1,
        wpsapp.ActiveDocument.Paragraphs.Item(endIndex).Range.End
      );
      questionDescribe = questionRange.Text;
      questionXml = questionRange.WordOpenXML.split(/<w:pPr>.*?<\/w:pPr>/).join('');

      // console.log(questionXml.split(/<w:pPr>(\S\s*)<\/w:pPr>/));

      this.upload(questionType, questionDescribe, questionXml, tempType)

      setTimeout(() => {
        this.setState({ typeNum: tempType })
        if (this.state.typeNum[0][0] > 0 || this.state.typeNum[1][0] > 0 || this.state.typeNum[2][0] > 0) {
          notification.open({
            message: '上传提示',
            description:
              '选择题上传成功' + this.state.typeNum[0][0] + '个' + '失败' + this.state.typeNum[0][1] + '个\n'
              + '填空题上传成功' + this.state.typeNum[1][0] + '个' + '失败' + this.state.typeNum[1][1] + '个\n'
              + '其他题型上传成功' + this.state.typeNum[2][0] + '个' + '失败' + this.state.typeNum[2][1] + '个'
            ,
            onClick: () => {
              this.setState({ typeNum: [[0, 0], [0, 0], [0, 0]] })

              console.log('Notification Clicked!');
            },
          });
        } else {
          notification.open({
            message: '上传提示',
            description:
              '试题信息上传失败，无试题上传',
            onClick: () => {
              this.setState({ typeNum: [[0, 0], [0, 0], [0, 0]] })
              console.log('Notification Clicked!');
            },
          });
        }
        this.setState({ loading: false });

      }, 1000)
      // 使用settimeout函数去等待返回，参数应该怎么设置？
      // console.log(this.state.typeNum, tempType[0])

    }
  }

  upload = (questionType, questionDescribe, questionXml, tempType) => {
    const Information = {};
    Information.questiontypeID = questionType;
    Information.questionDescribe = questionDescribe;
    Information.questionXml = questionXml;

    handlePost(`${apiWritePath}question_bank/upload/uploadquestion`, Information).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        if (result.success === true) {
          tempType[questionType - 1][0] += 1
        }
        else {
          tempType[questionType - 1][1] += 1
        }
      },
      (error) => { console.log(error); }
    );
  }

  uploadType = (typeName,questionType) => {
    const Information = {};
    Information.typename = typeName;
    Information.questiontype = questionType;

    handlePost(`${apiWritePath}question_bank/upload/uploadquestiontype`, Information).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        // if (result.success === true) {
        //   notification.open({
        //     message: '上传提示',
        //     description:
        //       '试题类型上传成功',
        //     onClick: () => {
        //       console.log('Notification Clicked!');
        //     },
        //   });
        // } else {
        //   notification.open({
        //     message: '上传提示',
        //     description:
        //       '试题类型上传失败',
        //     onClick: () => {
        //       console.log('Notification Clicked!');
        //     },
        //   });        
        // }
      },
      (error) => { 
        console.log(error) }
    );
  }


  test2 = () => {
    console.log(wps.WpsApplication().ActiveDocument.Paragraphs.Item(80).Range.Start, wps.WpsApplication().ActiveDocument.Paragraphs.Item(83).Range.End);
    console.log(wps.WpsApplication().ActiveDocument.Range(
      wps.WpsApplication().ActiveDocument.Paragraphs.Item(82).Range.Start,
      wps.WpsApplication().ActiveDocument.Paragraphs.Item(82).Range.End
    ).Text);
    // console.log(this.state.typeNum);
    // console.log(wps.WpsApplication().Selection.Text.match(/\.(\s\S)*/));
  }

  render() {
    return (
      <div>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          autoComplete="off">
          <Form.Item
            label="选择需要解析的文档"
            name="documentSelect"
          >
            <Button onClick={this.uploadActiveDoc} loading={this.state.loading}>使用当前文档</Button>
          </Form.Item>
          <Form.Item
            label="注意事项"
            name="notes"
          >
            <p>请设置试卷标题的字体大于12字号，并保证其他字体不大于12字号</p>

          </Form.Item>
          {/* <Button onClick={this.uploadDoc} >
            提交
          </Button> */}
        </Form>
        {/* <Button onClick={this.test2}>
          testNum
        </Button> */}
      </div>
    )
  }
}

export default MultiQuestion;
