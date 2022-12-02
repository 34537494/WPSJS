import {handlePost,handleFetch} from '../components/WebAddinCommon';
import {apiPublicPath} from '../settings';
const Cookies = require("js-cookie");

export function register(userObj) {
    return handlePost(`${apiPublicPath}users/reglogin/register`,  userObj );
}
 
export function login(loginObj) {
    return handlePost(`${apiPublicPath}users/reglogin/login`,  loginObj );
}

export function checklogin(loginObj) {
    return handleFetch(`${apiPublicPath}users/reglogin/index`,  loginObj );
}


export function logout(logoutObj) {
    return handlePost(`${apiPublicPath}users/reglogin/logout`,  logoutObj );
}

export async function getComposeRecordList(user_id) {

    return handlePost(`${apiPublicPath}getinfs/getcomposelist/index`,  user_id );
}

export async function getCreditRecordList(user_id) {

  return handlePost(`${apiPublicPath}getinfs/getscorelist/index`,  user_id );
}
 
export async function editProfile(newUserObj) {

    return handlePost(`${apiPublicPath}users/upuserinf/index`, newUserObj );
}
//独立到一个单独的文件中比较好
export async function checkfinanceyear(oldFinanceYear) {
    //读取本地cookie，看看是否修改了，可能直接在saga中写比较好？side effect都在这里比较好
    //如果状态不改变，页面也不会刷新，所以没有必要比较，可以不传递oldFinanceYear
    /*
    let ChangedFinance=(financeyear===Cookies.get("FinanceYear"));
    if (ChangedFinance ===true)
    financeyear=Cookies.get("FinanceYear");
    */
   console.log("Cookies.get(FinanceYear)",Cookies.get("FinanceYear"));
    return  Cookies.get("FinanceYear");
}
 