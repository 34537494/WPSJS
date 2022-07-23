import {handlePost,handleFetch} from '../components/WebAddinCommon';
import {apiPublicPath} from '../settings';
 
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