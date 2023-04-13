import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Navigator from './QuestionBankPages/navigator/navigator';
import {
  WebAddinQuestionBankSetBook, 
  WebAddinQuestionBankSetCourse, 
  WebAddinQuestionBankSetQuestion, 
  WebAddinQuestionBankSetQuestionType, 
  WebAddinQuestionBankCreatePaper,
  WebAddinQuestionBankHistoryPaper,
} from "../App";
const { Content } = Layout;
//  <Redirect from="/" to="/writer/Repository" />

class QuestionBankPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Layout>  
          <Content style={{ padding: '0 ' }}>
            <Layout className="site-layout-background" style={{ padding: ' 0' }}>
              <Navigator />
              {console.log("reload:_WriterPane:", this.props)}
              <Content style={{ padding: '0 ', minHeight: 1000, }}>
                <Router>
                  <Switch>
                    <Route path="/QuestionBank/setBook" component={WebAddinQuestionBankSetBook} />
                    <Route path="/QuestionBank/setCourse" component={WebAddinQuestionBankSetCourse} />
                    <Route path="/QuestionBank/setQuestion" component={WebAddinQuestionBankSetQuestion} />
                    <Route path="/QuestionBank/setQuestionType" component={WebAddinQuestionBankSetQuestionType} />
                    <Route path="/QuestionBank/createPaper" component={WebAddinQuestionBankCreatePaper} />
                    <Route path="/QuestionBank/historyPaper" component={WebAddinQuestionBankHistoryPaper} />
                    <Route render={() => <Redirect to='/QuestionBank/setBook' />} />
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


export default QuestionBankPane;
