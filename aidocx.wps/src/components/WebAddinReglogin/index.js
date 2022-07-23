import React from "react";
import { apiPublicPath } from "../../../settings";
import { handleFetch } from "../WebAddinCommon";
import { Consumer } from "../WebAddinContext";
//https://www.jianshu.com/p/7de6ccb7b76d

export default class Relogin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //读cookie登陆,发现没有登录时才启动
    //console.log(this.props.curUser.username );

   // if (this.props.curUser.username === undefined) {

    //}

  }

  render() {
    return (<Consumer>{({ reLogin }) => <div>
      {
        handleFetch(`${apiPublicPath}users/reglogin/index`, { method: "GET" }).then(res => {
          if (res.success === true) {
           console.log("relogin_res:",res);
            // this.props.getCookie(res);
          }
        })
      }
    </div>}</Consumer>);
  }
}
