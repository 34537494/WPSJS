import React from "react";
import { PrimaryButton, DefaultButton } from "office-ui-fabric-react/lib/Button";
//import { Dialog, DialogType, DialogFooter } from "office-ui-fabric-react/lib/Dialog";
import ReactDOM from "react-dom";
//import { Stack } from "office-ui-fabric-react/lib/Stack";
//自己封装一个函数式对话框组件，利用高阶组件

let styles = {
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
    width:"fit-content",
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
  okClose(onOk, ref) {
    onOk();
    this.close();
  },
  cancelClose(onCancel,ref) {
   //console.log("confirm_ref:", ref);
    onCancel();
    this.close();
  },
  dom: null, //被append的元素
  success({ title, content, onOk,onCancel,okText,cancelText,modalWidth,modalHeight  }) {
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
             {content}
            <h3>
            <DefaultButton onClick={this.cancelClose.bind(this,onCancel)} text={cancelText} />
            <PrimaryButton style={{ marginLeft: "15px" }} onClick={this.okClose.bind(this, onOk)} text={okText} />
            </h3>
          </div>
        </div>
      </div>

      /*不知道为什么不行
      <div>
        <Dialog
          dialogContentProps={{
            type: DialogType.normal,
            title: title,
            closeButtonAriaLabel: "关闭",
            subText: content
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
            dragOptions: undefined
          }}
        >
          <DialogFooter>
            <DefaultButton onClick={this.okCancel.bind(this)} text="取消" />
            <PrimaryButton onClick={this.okClose.bind(this, onOk)} text="确定" />
          </DialogFooter>
        </Dialog>
      </div>
      
       */
    );
    ReactDOM.render(JSXdom, this.dom);
    document.body.appendChild(this.dom);
  },

  close() {
    // console.log("this.dom:", this.dom);
    if (isIE() || isIE11()) {
      !!this.dom && this.dom.parentNode.removeChild(this.dom);
    } else {
      !!this.dom && this.dom.remove();
    }
  }
};
