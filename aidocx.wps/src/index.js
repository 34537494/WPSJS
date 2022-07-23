import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
//import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
// import Dialog from './components/dialog';
// import TaskPane from './components/taskpane';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware} from 'redux';
import { AppContainer } from "react-hot-loader"; 
import appReducer from './reducers';
import userSaga from './sagas';
/*
关于全局管理参考文献:
http://www.zzvips.com/article/191684.html
https://www.jianshu.com/p/e84493c7af35
https://www.jianshu.com/p/b17d8bec13f3
redux参考：https://www.jianshu.com/p/21960f78937d
导航条参考：https://developer.microsoft.com/en-us/fabric-js/components/commandbar/commandbar
*/
const title = "筷子文档"//"Intelligent Composing";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer,{},composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(userSaga);
ReactDOM.render(
<Provider store={store}>
  <AppContainer>
    <App title={title}  />
  </AppContainer>
 </Provider>,
document.getElementById("root")
);