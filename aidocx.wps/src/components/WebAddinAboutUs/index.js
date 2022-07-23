/* eslint-disable no-unused-vars */
import React from "react";
import WebAddinHeader from "../../components/WebAddinHeader";

import styles from "./WebAddinAboutUs.scss";

const tabs = [{ title: "联系方式" }, { title: "愿景" }, { title: "备案" }];

class WebAddinAboutUs extends React.Component {
  render() {
    const  history=this.props.history;
    return (
      <div className={styles.App}>
        <WebAddinHeader history={ history} />
          <p>开发者：龚晓光
          </p>
      </div>
    );
  }
}

export default WebAddinAboutUs;
