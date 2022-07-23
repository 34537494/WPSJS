import { Tree } from "antd";
import React from "react";

const Treeshow = (props) => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  // console.log("val:" + props.val);

  return (
    <div>
      {(props.val == 0 ? true : false) ? (
        <div>
          <Tree
            checkable
            defaultExpandedKeys={["0-0-0", "0-0-1"]}
            defaultSelectedKeys={["0-0-0", "0-0-1"]}
            defaultCheckedKeys={["0-0-0", "0-0-1"]}
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={props.treeData}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Treeshow;
