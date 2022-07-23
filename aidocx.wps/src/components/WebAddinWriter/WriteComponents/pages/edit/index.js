import React, { Component } from 'react';
 
import ContentTable from '../../contentTable/contentTable';
 

class Three extends Component {



    render() {
        return (
            <div>
                {/* <Btn text="标记" />
                <Btn text="提取" />
                <Btn text="插入" />
                <Btn text="合并" /> 
                */}

                {/* <Mytable/> */}
                <ContentTable />
            </div>
        )
    }
}

export default Three;