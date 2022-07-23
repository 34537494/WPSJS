/* eslint-disable no-lone-blocks */
import React from "react";
//import { PrimaryButton, DefaultButton, ActionButton } from "office-ui-fabric-react/lib/Button";
import ReactDOM from "react-dom";
//import { Stack } from "office-ui-fabric-react/lib/Stack";

const styles = {
  mask: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    height: "100%",
    zIndex: 1000
  },
  modalWrap: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000
  },
  modal: {
    fontSize: 14,
    padding: 10,
    width: 220,
    height: 90,
    margin: "10px auto 0",
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden",
    textAlign: "center"
  }
};
function isIE() {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return true;
  } else {
    return false;
  }
}
function isIE11() {
  if (/Trident\/7\./.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}
export default {
  dom: null, //被append的元素
  success({ title, content, time }) {
    if (isIE() || isIE11()) {
    } else {
      this.close();
    }
    this.dom = document.createElement("div");
    // JSX代码
    const JSXdom = (
      <div>
        <div style={styles.mask} />
        <div style={styles.modalWrap}>
          <div style={styles.modal}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
    {
      setTimeout(() => {
        this.close();
      }, time);
    }
    ReactDOM.render(JSXdom, this.dom);
    document.body.appendChild(this.dom);
  },

  close() {
   //console.log("this.dom:", this.dom);
    if (isIE() || isIE11()) {
      !!this.dom && this.dom.parentNode.removeChild(this.dom);
    } else {
      !!this.dom && this.dom.remove();
    }
  }
};
