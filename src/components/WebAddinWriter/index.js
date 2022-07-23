import React, { Component } from 'react';
import { connect } from "react-redux";
import { HashRouter as Router,Route, Switch,Redirect } from 'react-router-dom';
import Navigator from './WriteComponents/navigator/navigator';
import { Layout } from 'antd';
import Two from './WriteComponents/pages/function';
import Three from './WriteComponents/pages/edit';
import Four from './WriteComponents/pages/four';
 
 
import { WebAddinWriterFillTable, WebAddinWriterRepository,WebAddinWriterMergeDocs,WebAddinWriterExpand,fillFinanceTable} from "../App";
//import fillFinanceTable from './WriteComponents/pages/fillFinanceTable';
const { Content } = Layout;
    //  <Redirect from="/" to="/writer/Repository" />
     
     
    
class WriterPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // readwrite();
     
  }
  
  componentDidUpdate(newPros, newState) {
    //console.log("trigger:componentDidUpdate");
   // console.log("app_componentDidUpdate", this.props.curUser);


  }
  componentDidMount() {
    //读cookie登陆,发现没有登录时才启动
     
       /*
      if (this.props.isLoginIn === true) {
        this.setState({ curUser: this.props.curUser, isModalVisible: true, hideEmail: true });
         
      } else {
        this.setState({ curUser:"" ,SelectID:""});
      } ;

     
      */
      console.log("app_componentDidMount_this.props.curUser", this.props.curUser);
      console.log("app_componentDidMount_state", this.state);
  }
   
  render() {
    //如果在浏览器打开网页，那么会显示下面内容
    //之前的结构就不修改了
    return (
      
      <div>
      <Layout>
        <Content style={{ padding: '0 ' }}>
          <Layout className="site-layout-background" style={{ padding: ' 0' }}>
            <Navigator />
            {console.log("reload:_WriterPane:",this.props)}
            <Content style={{ padding: '0 ', minHeight: 1000 ,}}>
            <Router>
              <Switch>
                <Route path="/writer/function" component={Two} />
                <Route path="/writer/edit" component={Three} />
                <Route path="/writer/four" component={Four} />
                <Route path="/writer/expand" component={WebAddinWriterExpand} />
                <Route path="/writer/merge" component={WebAddinWriterMergeDocs} />
                <Route path="/writer/fillTable" component={WebAddinWriterFillTable} />
                <Route path="/writer/fillFinanceTable" component={fillFinanceTable} />
                <Route path="/writer/Repository" component={WebAddinWriterRepository} />
                <Route render={()=><Redirect to='/writer/fillTable'/>}/>
              </Switch>
              </Router>
            </Content>
          </Layout>
        </Content>
      </Layout>
    
    </div>
    );
  }
}
 

    const mapState = state => {
 
      return {
        curUser: state.current,
        user_id:  state.current.user_id ,
        isModalVisible: state.modalVisible
      };
    };
    const mapDispatch = {
        
    };
    
    export default connect(
      mapState,
      mapDispatch
    )(WriterPane);
     
 

/*


const WriterPane = () => (
  <div>
      <Layout>
          <Content style={{ padding: '0 ' }}>
            <Layout className="site-layout-background" style={{ padding: ' 0' }}>
              <Navigator />
              <Content style={{ padding: '0 ', minHeight: 1000 ,}}>
                <Switch>
                  <Route path="/taskpane/function" component={Two} />
                  <Route path="/taskpane/edit" component={Three} />
                  <Route path="/taskpane/four" component={Four} />
                  <Route path="/taskpane/expand" component={Five} />
                  <Route path="/taskpane/merge" component={Six} />
                  <Route path="/taskpane/fillTable" component={Seven} />
                  <Redirect from="/" to="/taskpane/merge" />
                </Switch>
              </Content>
            </Layout>
          </Content>
        </Layout>
  </div>
);

export default WriterPane;

*/