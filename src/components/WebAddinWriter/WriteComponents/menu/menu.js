import { Button } from 'antd';
import {  FormOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { Input} from 'antd';
import handleFont from './menuEvent';


class MenuSelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ["1", "2"],   //选项
            value: ""   // 默认选项
        }
        this.change=this.change.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick() {
       console.log("sub",this.state.value,this.props.value.default);
       handleFont(this.state.value,this.props.value.default)
    }
    change(val){
        var newVal = val.target.value
        console.log(newVal)
        this.setState({
            value: newVal,
          })
    }
     
    render() {
        return (
            <div className="site-input-group-wrapper">
                <Input.Group compact>
                    <select style={{ width: '30%',height:"32px"}} value={this.state.value} onChange={this.change} className="sel">
                        {
                            this.props.value.values.map((ele, index) => {
                                return (
                                    <option key={index}>{ele}</option>
                                )
                            })
                        }
                    </select>
                    <Button icon={<FormOutlined  />} onClick={this.handleClick} />
                </Input.Group>
            </div>
        )
    }
}

export default MenuSelf;