import React, { Component } from "react";
import { Button, notification, Form, Input, Select, Spin } from 'antd'
import { handlePost } from "../../../WebAddinCommon";
import { apiPublicPath, apiWritePath } from "../../../../settings";
const { Option } = Select;

/* global wps:false */


class BookSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInfo: this.getBookInfo(),
            options: [{ ID: '1', name: '高中数学' }, { ID: '2', name: '高中数学' }],
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
    // getOptions = () => {
    //   const option = []
    //   console.log(this.state)
    //   for (let i = 0; i < this.state.bookInfo.length; i++) {
    //     let item = this.state.bookInfo[i]
    //     option.push(<Option value={item.书本ID}>{item.书名}</Option>)
    //   }
    //   // return (<Option value='1'>hhh</Option>)
    //   // console.log(option)
    //   return option;
    // }

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



    getOptions = () => {
        console.log(this.state)
        for (let i = 0; i < this.state.bookInfo.length; i++) {
            let item = this.state.bookInfo[i]
            this.state.option.push(<Option value={item.书本ID}>{item.书名}</Option>)
        }
    }



    render() {
        return (
            <div>
                <Select
                    placeholder="选择书本信息"
                    onChange={this.props.setSelect.bind(this, "bookName")}
                    allowClear
                    showSearch
                >
                    {this.state.options && this.state.options?.map(item =>
                        (<Option value={item.ID}>{item.name}</Option>))
                    }
                </Select>
            </div>

        )
    }
}

export default BookSelect;
