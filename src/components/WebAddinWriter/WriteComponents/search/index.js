import { Input, Space, Checkbox } from 'antd';

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
        this.handleChange = this.handleChange.bind(this);
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



    handleChange(e) {
        this.setState(
            prevState => ({
                isChecked: !prevState.isChecked
            })
        );
    }



    render() {
        return (
            <div>
                <Space direction="horizontal">
                    <Search placeholder="input search text" onSearch={this.onSearch} style={{ width: 200 }} />
                    全选<Checkbox style={{ width: 200 }} onChange={this.handleChange} />
                </Space>
                {
                    this.state.isChecked ? (
                        <div>
                            <span>加粗:</span><Checkbox style={{ width: 30 }} name="test" value="1" />
                            <span>倾斜:</span><Checkbox style={{ width: 30 }} name="test" value="2" />
                            <span>下划线:</span><Checkbox style={{ width: 30 }} name="test" value="3" />
                        </div>
                    ) : null
                }

            </div>

        )
    }
}

export default SearchInput;