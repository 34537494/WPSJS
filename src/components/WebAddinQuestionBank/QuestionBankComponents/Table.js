import React, { Component } from "react";
// import "./style.css"
import { Select, Table, Input, Button } from 'antd'
import { handlePost } from "../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../settings";
const { Search } = Input;

/* global wps:false */

const columns = [
    // {
    //   title: '序号',
    //   dataIndex: '试题ID',
    // },
    {
        title: '试题描述',
        dataIndex: '试题描述',
    },
];

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeNum: "1",
            questionType: this.props.questionType,
            searchQuestions: [],
            questions: [],
            selectedRowKeys: [],
            loading: false,
            test: [],
        };
    }
    componentWillUnmount() {
        if (this.state.timer != null) {
            clearInterval(this.state.timer);
        }
    }

    componentDidMount() {
        this.getQuestion()
    }

    componentDidUpdate(prevProps) {
        if (this.props.questionType !== prevProps.questionType) {
            this.setState({ typeNum: this.props.typeNum.题型分类, questionType: this.props.questionType })
            // this.rowSelection.initSelect();
            setTimeout(() => {
                this.getQuestion()
            }, 1000)
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    //     this.setState({
    //         questionType: nextProps.questionType,
    //         questions: nextProps.questions,
    //     });
    //     this.onSearch()
    // }

    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            this.setState({ selectedRowKeys: selectedRowKeys })
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            this.props.setSelect(selectedRowKeys);
            // console.log(this.props);
            // let sQuestion = this.state.questions[selectedRowKeys[selectedRowKeys.length - 1] - 1]
            // console.log(sQuestion);
            // sQuestion["题型分类"] = this.state.questionType
            // sQuestion["题型名称"] = this.props.typeNum['题型名称']
            let sQuestion = this.props.selectedQuestion
            let otherTypeQuestion = sQuestion.filter(each =>  each.题型分类 !== this.state.questionType)
            let thisTypeQuestion = sQuestion.filter(each =>  each.题型分类 === this.state.questionType)
            console.log(this.props.selectedQuestion);
            if (thisTypeQuestion.length > selectedRowKeys.length) {
                console.log(thisTypeQuestion.length , selectedRowKeys.length);
                let temp = thisTypeQuestion.filter(each => selectedRowKeys.indexOf(each.key) !== -1)
                let temp1 = []
                temp = otherTypeQuestion.concat(temp)
                temp.map((item, index) => {
                    temp1.push(Object.assign(item, { "题型分类": this.state.questionType, "题型名称": this.props.typeNum['题型名称'] }))
                })
                // temp["题型分类"] = this.state.questionType
                // temp["题型名称"] = this.props.typeNum['题型名称']
                console.log(temp);
                console.log(temp1);
                console.log(this.state.questionType);
                this.props.setSelectedQuestion(temp1)
            }
            // if (sQuestion.length > selectedRowKeys.length) {
            //     console.log(sQuestion.length , selectedRowKeys.length);
            //     let temp = sQuestion.filter(each => selectedRowKeys.indexOf(each.key) !== -1)
            //     let temp1 = []
            //     temp.map((item, index) => {
            //         temp1.push(Object.assign(item, { "题型分类": this.state.questionType, "题型名称": this.props.typeNum['题型名称'] }))
            //     })
            //     // temp["题型分类"] = this.state.questionType
            //     // temp["题型名称"] = this.props.typeNum['题型名称']
            //     console.log(temp);
            //     console.log(temp1);
            //     console.log(this.state.questionType);
            //     this.props.setSelectedQuestion(temp1)
            // }
            else {
                let addQuestion = this.state.questions.find(question => question.key === (selectedRowKeys[selectedRowKeys.length - 1]))
                console.log(sQuestion);
                addQuestion["题型分类"] = this.state.questionType
                addQuestion["题型名称"] = this.props.typeNum['题型名称']
                this.props.addSelectedQuestion(addQuestion)
            }
        },
    };

    getQuestion = () => {
        const Information = {};
        console.log(this.props.typeNum);
        Information.questionType = this.state.typeNum;
        this.setState({ loading: true })
        handlePost(`${apiWritePath}question_bank/getinf/getquestionbytype`, Information).then(
            (result) => {
                console.log("get-Repository-tree-result:", result);
                let dataWithKey = []
                result.data.map((item, index) => {
                    // console.log(item)
                    dataWithKey.push(Object.assign(item, { key: item['试题ID'] }))
                })
                this.setState({ questions: dataWithKey })
                this.setState({ searchQuestions: dataWithKey })
                this.setState({ loading: false })
            },
            (error) => { }
        );
    }

    onSearch = (event) => {
        let searching = this.state.questions;
        searching = searching.filter(question => question["试题描述"].match(event))
        this.setState({ searchQuestions: searching })
        // console.log(this.state.searchQuestions);
    }

    test = () => {
        console.log(this.state);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Search placeholder="input search text" onSearch={this.onSearch} enterButton />
                {/* <Button onClick={this.test}>test2</Button> */}
                <Table
                    rowSelection={this.rowSelection}
                    columns={columns}
                    dataSource={this.state.searchQuestions}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default Tables;
