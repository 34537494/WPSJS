import { combineReducers } from "redux";
import { handleActions, combineActions } from "redux-actions";
import * as userAction from "../actions";
  
export const current = handleActions(
  {
    [combineActions(userAction.loginFinished, userAction.signupFinished, userAction.checkloginFinished, userAction.logout,userAction.checkfinanceyearFinished)]: {
      next(state, action) {
        return action.payload;//实际上是web请求返回的结果，作为新的状态（也就是前端的数据）
      }
    }
  },
  {}
);
 //暂时没有用到
export const isLoading = handleActions(
  {
    [combineActions(userAction.login,userAction.signup)]() {
      return true;
    },
    [combineActions(userAction.loginFinished, userAction.signupFinished)]() {
      return false;
    }
  },
  false
);

export const financeyears = handleActions(
  {
    [combineActions(userAction.checkfinanceyearFinished)]: {
      next(state, action) {
        console.log("financeyears_return:",action)
        return action.payload;//实际上是cookie
      }
    }
  },
  false
);

export const modalVisible = handleActions(
  {
    [userAction.showModal]() {
      return true;
    },
    [userAction.loginFinished]() {
      return false;
    },
    [userAction.signupFinished]() {
      return false;
    },
    [userAction.hideModal]() {
      return false;
    }
  },
  false
);
 
export default combineReducers({
  current,
  isLoading,
  financeyears,
  modalVisible,
});
