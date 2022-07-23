import React, { Component } from 'react';
import { Table, Button } from 'antd';
// import Btn from '../buttons';
import 'antd/dist/antd.css';
import { DownloadOutlined } from '@ant-design/icons';
import ctrolClick from './tableEvent';


class ContentTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentCtrolsVal: [],
            hide: true,
            selectedRowKeys: [], // Check here to configure the default column
        }
    }
    onClick(text) {
        var arr = [];
        arr = ctrolClick(text);
        console.log(arr);
        if (text === "提取") {
            this.setState(
                {
                    contentCtrolsVal: arr
                }
            )
        }
    }
    onClickMark(text) {
        if (this.state.hide) {
            this.setState({ hide: false });
        }
        else {
            this.setState({ hide: true });
            var tempValue = document.getElementById("markTitle").value;
            console.log(tempValue);
             ctrolClick(text, tempValue);
             this.setState(
                {
                    contentCtrolsVal: ctrolClick("提取")
                }
            )
        }
    }
    onClickInsert(text) {
       if(this.state.selectedRowKeys.length===0){
           alert("还未选择插入项")
       }
       else
        ctrolClick(text, "",this.state.selectedRowKeys);
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys: selectedRowKeys });
    };

    render() {
        const columns = [
            {
                title: '控件名称',
                dataIndex: 'name',
                width: '20%',
            },
            {
                title: '控件内容',
                dataIndex: 'value',
            },
        ];
        const  selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                Table.SELECTION_NONE,
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        };

        return (
            <div>
                <h1>内容控件处理</h1>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.contentCtrolsVal} pagination={{ pageSize: 50, position: ['bottomLeft'] }} scroll={{ y: 450 }} />
                <Button type="primary" shape="round" icon={<DownloadOutlined />} style={{ margin: ' 5px' }} onClick={this.onClickMark.bind(this, "标记")}>标记</Button>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} style={{ margin: ' 5px' }} onClick={this.onClick.bind(this, "提取")}>刷新</Button>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} style={{ margin: ' 5px' }} onClick={this.onClickInsert.bind(this, "插入")}>
                    插入
                </Button>
                {
                    this.state.hide ? null :
                        <div>
                            <input type="text" id="markTitle" placeholder="请输入标题" />
                        </div>
                }
            </div>
        )
    }
}

export default ContentTable;
