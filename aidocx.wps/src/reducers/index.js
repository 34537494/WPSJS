import { combineReducers } from "redux";
import { handleActions, combineActions } from "redux-actions";
import * as userAction from "../actions";
  
export const current = handleActions(
  {
    [combineActions(userAction.loginFinished, userAction.signupFinished, userAction.checkloginFinished, userAction.logout)]: {
      next(state, action) {
        return action.payload;
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
  modalVisible,
});
