import React, { Component } from 'react';
 
import {
    TranslationOutlined,QuestionOutlined
} from '@ant-design/icons';
import { Avatar } from 'antd';
import handle from './iconEvent'
import SearchInput from '../../replaceSearch';

class expand extends Component {

    handleClick(param) {
        // console.log(param)
        handle(param)
    }
    render() {
        return (
            <div>
                <div
                    style={{ margin: '10px 10px 50px 10px', padding: '10px' }}>
                    <h2>拓展功能</h2><br />
                    <SearchInput />
                    <br />
                    <br />
                    <Avatar size={35} icon={<TranslationOutlined />} onClick={this.handleClick.bind(this, "中英文标点匹配")} />
                    <span>&nbsp;&nbsp;</span>
                    <Avatar size={20} icon={<QuestionOutlined onClick={this.handleClick.bind(this, "帮助2")} />} />
                    <span>帮助</span>
                    <br />
                </div>
            </div>
        )
    }
}

export default expand;