import { createActions } from 'redux-actions';
// import { identity } from 'ramda';
//https://www.jianshu.com/p/d2615a7d725e
export const {
  user: {
    login,
    signup,
    logout,
    checklogin,
    checkloginFinished,
    loginFinished,
    signupFinished,
    logoutFinished,
    showModal,
    hideModal,
    checkCookie,
    checkfinanceyear,
    checkfinanceyearFinished
   },
} = createActions({
  USER: {
    LOGIN: ({
      tel, email, password, remeber, captcha,
    }) => ({
      tel,
      email,
      password,
      remeber,
      captcha,
    }),
    SIGNUP: ({
      tel, email, password, username, captcha,owner,sharer
    }) => ({
      tel,
      email,
      password,
      username,
      captcha,
      owner,
      sharer
    }),
    LOGOUT:() => {},
    CHECKLOGIN:() => {},
    CHECKLOGIN_FINISHED:null,
    LOGIN_FINISHED:null,
    SIGNUP_FINISHED:null,
    LOGOUT_FINISHED:null,
    SHOW_MODAL:null,
    HIDE_MODAL:null,
    CHECKFINANCEYEAR:null,
    CHECKFINANCEYEAR_FINISHED:null,
  },
});
