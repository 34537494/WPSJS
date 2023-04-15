import React, { Component } from "react";
import "./style.css"
import { Select, Table, Input, Button } from 'antd'
import { handlePost } from "../../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../../settings";
import sizeInfo from "../createPaper/sizeInfo"

const { Option } = Select;
const { Search } = Input;

/* global wps:false */

class HistoryPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      bookID: '',
      courseID: '',
      historyPaperInf: [],
      questionTypeList: [],
      loading: false,
      titleSize: 36,
      typeSize: 21,
      bodySize: 21,
      sizeInfo: sizeInfo,
    };
  }
  componentWillUnmount() {
    if (this.state.timer != null) {
      clearInterval(this.state.timer);
    }
  }

  componentDidMount() {
    this.getHistoryPaper()
    this.getQuestionType()
  }


  columns = [
    {
      title: '试卷名',
      dataIndex: '试卷名',
    },
    {
      title: '课程名',
      dataIndex: '课程名',
    },
    {
      title: '书名',
      dataIndex: '书名',
    },
    {
      title: '操作',
      dataIndex: '操作',
      render: (_, record) =>
        this.state.historyPaperInf.length >= 1 ? (
          <a id={record.key} onClick={this.createPaper}>生成试卷</a>
        ) : null,
    },
  ];

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

  getHistoryPaper = () => {
    const Information = {};
    handlePost(`${apiWritePath}question_bank/getinf/getpaper`, Information).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);
        let dataWithKey = []
        result.data.map((item, index) => {
          dataWithKey.push(Object.assign(item, { key: item.试卷ID }))
        })
        this.setState({ historyPaperInf: dataWithKey })
      },
      (error) => { }
    );
  }

  toChineseNum(num) {
    let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    let unit = ['', '十', '百', '千', '万']
    num = parseInt(num)
    let getWan = (temp) => {
      let strArr = temp.toString().split('').reverse()
      let newNum = ''
      let newArr = []
      strArr.forEach((item, index) => {
        newArr.unshift(item === '0' ? changeNum[item] : changeNum[item] + unit[index])
      })
      let numArr = []
      newArr.forEach((m, n) => {
        if (m !== '零') numArr.push(n)
      })
      if (newArr.length > 1) {
        newArr.forEach((m, n) => {
          if (newArr[newArr.length - 1] === '零') {
            if (n <= numArr[numArr.length - 1]) {
              newNum += m
            }
          } else {
            newNum += m
          }
        })
      } else {
        newNum = newArr[0]
      }

      return newNum
    }
    let overWan = Math.floor(num / 10000)
    let noWan = num % 10000
    if (noWan.toString().length < 4) {
      noWan = '0' + noWan
    }
    return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
  }

  createPaper = (e) => {
    let historyInf = this.state.historyPaperInf.find(item => item.试卷ID === e.target.id)
    console.log(historyInf.问题类型对应ID.split(","));
    // this.getFullXml(historyInf, historyInf.问题对应ID.split(","), historyInf.问题类型对应ID.split(","))
    this.getFullXml(historyInf, historyInf.问题对应ID, historyInf.问题类型对应ID)
  }

  // getQuestionXml = (historyInf,questionids, typeIndex) => {
  //   const Information = {};
  //   Information.questionids = questionids.join();
  //   console.log(questionids, typeIndex);
  //   this.setState({ loading: true })
  //   handlePost(`${apiWritePath}question_bank/getinf/getquestionxml`, Information).then(
  //       (result) => {
  //           console.log("get-Repository-tree-result:", result);
  //           let wpsapp = wps.WpsApplication()
  //           let newdoc = wpsapp.Documents.Add()
  //           let questionNumber = 1;
  //           let typeNumber = 1;


  //           newdoc.Range(newdoc.Range().End, newdoc.Range().End).InsertBefore(historyInf['试卷名'] + "\r")
  //           wpsapp.ActiveDocument.Paragraphs.Item(1).Alignment = 1   //居中
  //           wpsapp.ActiveDocument.Paragraphs.Item(1).Range.Font.Bold = true
  //           wpsapp.ActiveDocument.Paragraphs.Item(1).Range.Font.Size = 18


  //           for (let i = 0; i < result.file.length; i++) {
  //               console.log(typeIndex[i] !== typeIndex[i - 1])
  //               if (typeIndex[i] !== typeIndex[i - 1]) {
  //                   questionNumber = 1;
  //                   newdoc.Range(newdoc.Range().End, newdoc.Range().End).InsertBefore("\n\r" + this.toChineseNum(typeNumber) + "、" + this.state.questionTypeList.find(item => item.试题类型ID === typeIndex[i]).题型名称)
  //                   console.log(wpsapp.ActiveDocument.Paragraphs.Item(wpsapp.ActiveDocument.Paragraphs.Count).Range.Font);
  //                   wpsapp.ActiveDocument.Paragraphs.Item(wpsapp.ActiveDocument.Paragraphs.Count).Range.Font.Bold = true
  //                   typeNumber += 1;
  //               }
  //               let lastEnd = newdoc.Range().End;

  //               // console.log(newdoc.Range(newdoc.Range().End,newdoc.Range().End));
  //               newdoc.Range(newdoc.Range().End, newdoc.Range().End).InsertXML([...result.file.find(item => item.id === questionids[i]).xml].join(""))
  //               newdoc.Range(lastEnd, newdoc.Range().End).InsertBefore(questionNumber + ".")
  //               questionNumber += 1;
  //           }
  //           this.setState({ loading: false })

  //       },
  //       (error) => { console.log(error); }
  //   );
  // }

  getFullXml = (historyInf, questionids, typeIndex) => {
    const Information = {};
    Information.questionids = questionids;
    Information.typeindex = typeIndex;
    Information.titleSize = 36;
    Information.typeSize = 21;
    Information.bodySize = 21;
    Information.title = historyInf['试卷名'];
    console.log(Information);
    this.setState({ loading: true })
    handlePost(`${apiWritePath}question_bank/getinf/getfullxml`, Information).then(
      (result) => {
        console.log("get-Repository-tree-result:", result);


        let wpsapp = wps.WpsApplication()
        let newdoc = wpsapp.Documents.Add()
        newdoc.Range(newdoc.Range().Start, newdoc.Range().End).InsertXML(result.file)
        this.setState({ loading: false })

      },
      (error) => {
        console.log(error);
        this.setState({ loading: false })
      }
    );
  }

  onSearch = (event) => {
    let papers = this.state.historyPaperInf;
    papers = papers.filter(paper => paper["试卷名"].match(event))
    this.setState({ searchQuestions: papers })
    // console.log(this.state.searchQuestions);
  }


  setBook = (e) => {
    this.setState({ bookID: e })
  }

  setCourse = (e) => {
    this.setState({ courseID: e })
  }

  setInfo = (name, e) => {
    const newState = {};
    newState[name] = e.target.value
    this.setState(newState)
    // console.log(this.state);
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

  test = (e) => {
    console.log(this.state);
    console.log(e.target.id);
    // this.createPaper(this.state.historyPaperInf.find(item=>item.试卷Id===e.target.id).问题对应ID.split(","),this.state.historyPaperInf[5].问题类型对应ID.split(","))
  }

  render() {
    return (
      <div>
        <p>已有试卷</p>
        <Button onClick={this.test}>test</Button>
        <div className="sizeSelect">
          {/* <div > */}
            <p style={{fontSize:"15px",marginTop:"10px"}}>设置标题字体</p>
            <Select
              // style={{ minwidth: "130px" }}
              value={this.state.titleSize}

              // placeholder="默认大小为36"
              onChange={this.setTitleSize.bind(this)}
              allowClear
              showSearch
              optionFilterProp="children"
            >
              {this.state.sizeInfo?.map(item =>
                (<Option key={item.ID}>{item.name}</Option>))}
            </Select>
          {/* </div>
          <div> */}
            <p style={{fontSize:"15px",marginTop:"10px"}}>设置试题类型字体</p>
            <Select
              value={this.state.typeSize}

              onChange={this.setTypeSize.bind(this)}
              allowClear
              showSearch
              optionFilterProp="children"
            >
              {this.state.sizeInfo?.map(item =>
                (<Option key={item.ID}>{item.name}</Option>))}
            </Select>
          {/* </div>
          <div> */}
            <p style={{fontSize:"15px",marginTop:"10px"}}>设置试题字体</p>
            <Select
              // style={{ minwidth: "130px" }}
              value={this.state.bodySize}
              // placeholder="默认大小为21"
              onChange={this.setBodySize.bind(this)}
              allowClear
              showSearch
              optionFilterProp="children"
            >
              {this.state.sizeInfo?.map(item =>
                (<Option key={item.ID}>{item.name}</Option>))}
            </Select>
          </div>
        {/* </div> */}
        {/* <p>若不对字体进行设置，则按照默认字体设置</p> */}
        <div style={{ display: "flex" }}>
          <Select
            placeholder="选择课程"
            onChange={this.setCourse.bind(this)}
            allowClear
            showSearch
          >
            {this.state.historyPaperInf?.map(item =>
              (<Option key={item.课程ID}>{item.课程名}</Option>))}
          </Select>
          <Select
            placeholder="选择书本"
            onChange={this.setBook.bind(this)}
            allowClear
            showSearch
          >
            {this.state.historyPaperInf?.map(item =>
              (<Option key={item.书本ID}>{item.书名}</Option>))}
          </Select>
          <Search placeholder="输入试卷名进行查找" onSearch={this.onSearch} enterButton />
        </div>

        <Table
          rowSelection={this.rowSelection}
          columns={this.columns}
          dataSource={this.state.historyPaperInf}
          loading={this.state.loading}
        />
      </div>

    )
  }
}

export default HistoryPaper;
