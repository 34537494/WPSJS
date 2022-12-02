import { Button, Tree } from "antd";
import React from "react";

export function Treeshow(props) {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  const changeHandler = () => {
    props.changeHandler();
  };
  const insertHandler = () => {
    props.insertHandler();
  };
  const reloadHandler = () => {
    props.reloadHandler();
  };
  // console.log("val:" + props.val);
  // const reloaddata = (state, selectData) => {
  //   console.log("state", state);
  //   console.log("selectData", selectData);
  //   if (selectData !== undefined) {
  //     // selectData("getTextRepositoryTree");
  //   }
  //   const Company = {};
  //   Company.公司ID = 1;
  //   handlePost(`${apiWritePath}getinf/getTextRepositoryTree`, Company).then(
  //     (result) => {
  //       console.log("get-Repository-tree-result:", result);
  //       if (result.success === true) {
  //         //加载数据到tree中
  //         // console.log(result);
  //         let realdata = GetRealData(result);
  //         //console.log("realdata", realdata);
  //         var treeData = ConvertJsonToTree(realdata, "");
  //         this.setState({
  //           treeData: treeData,
  //           fullData: realdata,
  //         });
  //       } else {
  //       }
  //       //console.log("logout_ok:",this.state)
  //     },
  //     (error) => {}
  //   );
  // };
  return (
    <div style={{ marginLeft: "10px", marginRight: "10px" }}>
      <div>
        <Button onClick={insertHandler}>插入</Button>
        <Button onClick={reloadHandler}>刷新</Button>
        <Button onClick={changeHandler}>上传文档</Button>
      </div>

      <Tree
        checkable
        // onSelect={onSelect}
        onCheck={(checkedKeys, info) => props.checkHandler(checkedKeys, info)}
        treeData={props.treeData}
      />
    </div>
  );
}

export default Treeshow;
