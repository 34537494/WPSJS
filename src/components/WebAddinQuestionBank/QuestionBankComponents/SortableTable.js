import React, { Component } from "react";
import { DndContext } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { handlePost } from "../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../settings";
import { Button, Table } from 'antd';

/* global wps:false */


let downTime;
let upTime;
let date = new Date()
const Row = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: props['data-row-key'],
    });
    const style = {
        ...props.style,
        transform: CSS.Transform.toString(
            transform && {
                ...transform,
                scaleY: 1,
            },
        ),
        transition,
        cursor: 'move',
        ...(isDragging
            ? {
                position: 'relative',
                zIndex: 9999,
            }
            : {}),
    };
    return <tr {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
};

class SortaleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.props.questions,
            questionType: this.props.questionType,
            selectedRowKey: this.props.selectedRowKey,
            selectedQuestion: this.props.selectedQuestion,
        };
    }
    componentWillUnmount() {
        if (this.state.timer != null) {
            clearInterval(this.state.timer);
        }
    }

    componentWillReceiveProps(nextProps) {
        // 监控父组件传递的所选择的问题的变化，进行页面更新
        console.log(this.state.selectedQuestion.length, nextProps.selectedQuestion.length);
        // if (this.state.selectedQuestion.length !== nextProps.selectedQuestion.length) {
        // let arr = [...nextProps.selectedQuestion]
        let arr = [...this.state.selectedQuestion, ...nextProps.selectedQuestion]
        // console.log(arr);

        let map = new Map();
        for (let item of arr) {
            if (!map.has(item.试题ID)) {
                map.set(item.试题ID, item)
            }
        }
        let newArr = [...map.values()]
        // console.log(newArr);
        this.setSelectedQuestion(newArr)
    }

    toChineseNum(num) {
        // 将小写数字转换为中文数字，方便大题题号命名
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

    getQuestionXml = (questionids, typeIndex) => {
        // 前端进行拼接的方法，运行速度较慢
        const Information = {};
        Information.questionids = questionids.join();
        Information.typeindex = typeIndex.join();
        console.log(Information);
        this.setState({ loading: true })
        handlePost(`${apiWritePath}question_bank/getinf/getquestionxml`, Information).then(
            (result) => {
                console.log("get-Repository-tree-result:", result);
                let wpsapp = wps.WpsApplication()
                let newdoc = wpsapp.Documents.Add()
                let questionNumber = 1;
                let typeNumber = 1;
                let sumQNumber = 0;
                let sumTNumber = 0;

                newdoc.Range(newdoc.Range().End, newdoc.Range().End).InsertBefore(this.props.paperName + "\r")
                wpsapp.ActiveDocument.Paragraphs.Item(1).Alignment = 1   //居中
                // console.log(wpsapp.ActiveDocument.Paragraphs.Item(1).Alignment );
                wpsapp.ActiveDocument.Paragraphs.Item(1).Range.Font.Bold = true
                wpsapp.ActiveDocument.Paragraphs.Item(1).Range.Font.Size = 18


                for (let i = 0; i < result.file.length; i++) {
                    console.log(typeIndex[i] !== typeIndex[i - 1])
                    if (typeIndex[i] !== typeIndex[i - 1]) {
                        questionNumber = 1;
                        newdoc.Range(newdoc.Range().End, newdoc.Range().End).InsertBefore("\n\r" + this.toChineseNum(typeNumber) + "、" + this.props.questionTypeList.find(item => item.试题类型ID === typeIndex[i]).题型名称)
                        // console.log(wpsapp.ActiveDocument.Paragraphs.Item(wpsapp.ActiveDocument.Paragraphs.Count).Range.Font);
                        wpsapp.ActiveDocument.Paragraphs.Item(wpsapp.ActiveDocument.Paragraphs.Count).Range.Font.Bold = true
                        typeNumber += 1;
                        sumTNumber += 1;
                    }
                    let lastEnd = newdoc.Range().End;

                    // console.log(typeof(result.file.find(item => item.id === questionids[i]).xml));
                    newdoc.Range(newdoc.Range().End, newdoc.Range().End).InsertXML(result.file.find(item => item.id === questionids[i]).xml)
                    // newdoc.Range(newdoc.Range().End, newdoc.Range().End).InsertXML([...result.file.find(item => item.id === questionids[i]).xml].join(""))
                    newdoc.Range(lastEnd, newdoc.Range().End).InsertBefore(questionNumber + ".")
                    questionNumber += 1;
                    sumQNumber += 1;
                }
                // console.log(sumQNumber,sumTNumber);
                this.uploadPaperInf(sumQNumber, sumTNumber, questionids, typeIndex)
                // console.log(wpsapp.Selection.insertXML(result.file[0]));
                // newdoc.Range().InsertXML([...result.file[0].xml].join(""))
                // console.log(wpsapp.Documents.Item(1).XMLNodes);
            },
            (error) => { console.log(error); }
        );
    }

    getFullXml = (questionids, typeIndex) => {
        const Information = {};
        Information.questionids = questionids.join();
        Information.typeindex = typeIndex.join();
        Information.titleSize = this.props.titleSize;
        Information.typeSize = this.props.typeSize;
        Information.bodySize = this.props.bodySize;
        Information.title = this.props.paperName;
        this.setState({ loading: true })
        handlePost(`${apiWritePath}question_bank/getinf/getfullxml`, Information).then(
            (result) => {
                console.log("get-Repository-tree-result:", result);
                let wpsapp = wps.WpsApplication()
                let newdoc = wpsapp.Documents.Add()
                // 创建文档
                newdoc.Range(newdoc.Range().Start, newdoc.Range().End).InsertXML(result.file)
                // 将后端拼接好的xml插入文档
                let sumQNumber = questionids.length
                let sumTNumber = Array.from(new Set(typeIndex)).length
                this.uploadPaperInf(sumQNumber,sumTNumber,questionids,typeIndex)
                // 将试卷试题进行记录，方便之后再次调取
            },
            (error) => { console.log(error); }
        );
    }

    uploadPaperInf = (sumQNumber, sumTNumber, questionids, typeIndex) => {
        const Information = {};
        Information.bookID = this.props.bookID;
        Information.courseID = this.props.courseID;
        Information.paperName = this.props.paperName;
        Information.qNumber = sumQNumber;
        Information.tNumber = sumTNumber;
        Information.questionids = questionids.join();
        Information.typeindex = typeIndex.join();
        handlePost(`${apiWritePath}question_bank/upload/uploadpaper`, Information).then(
            (result) => {
                if (result.success === true) {
                    console.log("试卷加入成功");
                }
            },
            (error) => { console.log(error); }
        );
    }


    columns = [
        {
            title: '题型名称',
            dataIndex: '题型名称',
        },
        {
            title: '试题描述',
            dataIndex: '试题描述',
        },
        {
            title: '操作',
            dataIndex: '操作',
            render: (_, record) =>
                this.state.selectedQuestion.length >= 1 ? (
                    <a id={record.key} onMouseDown={this.buttonDown} onMouseUp={this.buttonUp.bind(this)}>Delete</a>
                ) : null,
        },
    ];

    buttonDown = (e) => {
        date = new Date()
        downTime = date.getTime();
    }

    buttonUp = (e) => {
        date = new Date()
        upTime = date.getTime()
        let diff = upTime - downTime
        if (diff < 200) {
            this.handleDelete(e.target.id);
        }
    }

    setSelectedQuestion = (data) => {
        this.setState({ selectedQuestion: data })
    }

    handleDelete = (key) => {
        console.log(key);
        let newData = this.state.selectedQuestion.filter((item) => item.key !== key);
        this.setSelectedQuestion(newData);
    };

    onDragEnd = ({ active, over }) => {
        console.log(active, over);
        if (active.id !== over?.id) {
            //判断位置是否发生改变
            let temps = this.state.selectedQuestion;
            this.setSelectedQuestion(
                // 将当前移动的（active）和将要移动到的（over）找到并替换顺序
                arrayMove(
                    temps,
                    temps.findIndex((temp) => temp.key === active.id),
                    temps.findIndex((temp) => temp.key === over.id)
                )
            )
        }
    };

    createPaper = () => {
        let questionids = this.state.selectedQuestion.map(item => item.试题ID)
        let typeIndex = this.state.selectedQuestion.map(item => item.题型分类)
        // this.getQuestionXml(questionids, typeIndex)
        this.getFullXml(questionids, typeIndex)
        // this.getQuestionXml(questionids, typeIndex)
    }

    render() {
        return (
            <div>
                <Button onClick={this.createPaper}>生成试卷</Button>
                <DndContext
                    onDragEnd={this.onDragEnd}
                >
                    <SortableContext
                        // rowKey array
                        items={this.state.selectedQuestion.map((i) => i.key)}
                        strategy={verticalListSortingStrategy}
                    >
                        <Table
                            components={{
                                body: {
                                    row: Row,
                                },
                            }}
                            rowKey="key"
                            columns={this.columns}
                            dataSource={this.state.selectedQuestion}
                        />
                    </SortableContext>
                </DndContext>
            </div>
        )
    }
}

export default SortaleTable;
