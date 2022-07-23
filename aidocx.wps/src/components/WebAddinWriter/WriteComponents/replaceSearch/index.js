import { Input, Space } from 'antd';

import React, { Component } from 'react';
import Handle from './handleSearch';
const { Search } = Input;
/* global wps:false */



function fun() {
    var obj = document.getElementsByName("test");
    var check_val = [];
    for (var k in obj) {
        if (obj[k].checked) {
            check_val.push(obj[k].value);
        }
    }
    console.log(check_val)
    return check_val;
}


class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
        this.Replace = this.Replace.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch = value => {
        console.log(value);
        console.log(this.state.isChecked)
        var check_val=null;
        if(this.state.isChecked){
            check_val=fun();
        }
         Handle.Macro3(value, this.state.isChecked,check_val);
    }



    Replace = value => {

        var Word = String(document.getElementById("word").value)
        var replace = String(document.getElementById("replaceword").value)
        var doc = wps.WpsApplication().ActiveDocument.WordOpenXML
        console.log(doc)
        if(Word && replace)
        {
            Handle.replace_main(Word, replace, doc)
        }
        else
        {
            console.log("未输入替换关键字")
        }
    }

    render() {
        return (
            <div>
                <div>
                    <span>批量替换</span>
                </div>
                <Space direction="horizontal">
                    <input placeholder="word search text" id="word" style={{ width: 200 }} />
                </Space>
                <br />
                <Space direction="horizontal">
                    <Search placeholder="replace search text" id="replaceword" onSearch={this.Replace} style={{ width: 200 }} />
                </Space>

            </div>

        )
    }
}

export default SearchInput;