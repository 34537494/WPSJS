import {call, put, takeLatest} from 'redux-saga/effects';
import { message } from 'antd'
import * as usersSource from '../sources/users';
import {
    login,
    loginFinished,
    logout,
    logoutFinished,
    signup,
    signupFinished,
    checklogin,
    checkloginFinished,
    checkfinanceyear,
    checkfinanceyearFinished
} from '../actions';
 
import { apiPublicPath } from "../settings";
 
export function* loginHandler({ payload }) {
  try {
    const result = yield call(usersSource.login, payload);
    const action = yield call(loginFinished, result);
    if (result === undefined) {
      //message.error("与服务器通讯异常！");
    }else {
      if (result.success === true) {
        //message.success(result.msg);
      } else {
        message.error(result.msg);
        document.getElementById("captchain").src = `${apiPublicPath}tools/codepic?` + Math.random();
      }
    }
    yield put(action);
  } catch (e) {
   // console.log(e);
    yield put(loginFinished(e));
  }
}

export function* checkloginHandler({ payload }) {
  try {
    const result = yield call(usersSource.checklogin, payload);
    const action = yield call(checkloginFinished, result);
    if (result === undefined) {
      //message.error("与服务器通讯异常！");
    }else {
      if (result.success === true) {
        //message.success(result.msg);
      } 
    }
    yield put(action);
  } catch (e) {
   // console.log(e);
    yield put(loginFinished(e));
  }
}

function* logoutHandler({ payload }) {
  try {
    const result = yield call(usersSource.logout, payload);
    const action = yield call(logoutFinished, result);
    yield put(action);
  } catch (e) {
    // console.log(e);
    yield put(logoutFinished(e));
  }
}

function* signupHandler({ payload }) {
  try {
    const result = yield call(usersSource.register, payload);
    // console.log("注册结果：",result);
    const action = yield call(signupFinished, result);
    if (result === undefined) {
     // message.error("与服务器通讯异常！");
    }else{
      if(result.success===true){
        //message.success(result.msg);
      }else{
        message.error(result.msg);
        //mobile:
        document.getElementById("captchain").src = `${apiPublicPath}tools/codepic?` + Math.random();
      }
    }
    yield put(action);
  } catch (e) {
   // console.log(e);
    yield put(signupFinished(e));
  }
}
 
function* checkfinanceyearHandler({ payload }) {
  try {
    const result = yield call(usersSource.checkfinanceyear, payload);
    console.log("call(usersSource.checkfinanceyear, payload)",result);
    const action = yield call(checkfinanceyearFinished, result);
    yield put(action);
  } catch (e) {
    // console.log(e);
    yield put(checkfinanceyearFinished(e));
  }
}

export default function* userSaga() {
  yield takeLatest(login, loginHandler);
  yield takeLatest(checklogin, checkloginHandler);
  yield takeLatest(signup, signupHandler);
  yield takeLatest(logout, logoutHandler);
  yield takeLatest(checkfinanceyear, checkfinanceyearHandler);
}
