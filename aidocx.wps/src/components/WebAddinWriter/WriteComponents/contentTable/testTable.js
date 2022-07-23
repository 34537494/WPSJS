import { Table } from 'antd';
import React, { Component } from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class Mytable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        contentCtrolsVal: [{"key":1, "name": "nothing", "value": "nothing" },{ "key":2, "name": "nothing", "value": "nothing" },{"key":3,  "name": "nothing", "value": "nothing" }],
        hide: true,
        selectedRowKeys: [], // Check here to configure the default column
    }
}
onClick(text) {
    var arr = [];
    // arr = ctrolClick(text);
    console.log(arr);
    if (text == "提取") {
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
        // ctrolClick(text, tempValue);
    }
}


  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys:selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
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
    return  <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.contentCtrolsVal} pagination={{ pageSize: 50, position: ['bottomLeft'] }} scroll={{ y: 450 }} />
  }
}

export default Mytable;