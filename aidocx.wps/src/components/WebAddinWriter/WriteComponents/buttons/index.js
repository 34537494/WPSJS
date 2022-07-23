import React from 'react';
import { Button  } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import controlClick from './editEvent';
import show from "../contentTable/tableEvent"
class Btn extends React.Component {
    state = {
        size: 'small',
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    onClick(text){
        if(text==="提取"){
            show();
        }
        else{
            controlClick(text);
        }
     
    }

    render() {
        const { size } = this.state;
        const  {text}=this.props;
        return (
            // <div>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} style={{margin:' 5px'}} size={size} onClick={this.onClick.bind(this,text)}>
                    {text}
                </Button>          
            // {/* </div> */}
        )
    };
}


export default Btn;