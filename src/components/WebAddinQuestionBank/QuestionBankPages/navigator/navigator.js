import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "antd/dist/antd.css";
import { Layout, Menu, AutoComplete } from "antd";
import {
  LaptopOutlined,
  ReadOutlined,
  QuestionCircleOutlined,
  SelectOutlined,
  ProfileOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
// import "./index.css"
const { Sider } = Layout;

class Navigator extends Component {
  render() {
    return (
      <Sider className="site-layout-background" width={60}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            paddingBottom: "40rem",
            margin: AutoComplete,
          }}
        >
          <Menu.ItemGroup key="g1" >
            <Menu.Item key="1" icon={<ReadOutlined /> }>
              <NavLink to="/QuestionBank/setBook">设置书本</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2">
            <Menu.Item key="2" icon={<LaptopOutlined />}>
              <NavLink to="/QuestionBank/setCourse">设置课程</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g3">
            <Menu.Item key="3" icon={<SelectOutlined />}>
              <NavLink to="/QuestionBank/setQuestionType">设置试题类型</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g4">
            <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
              <NavLink to="/QuestionBank/setQuestion">设置试题</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g5">
            <Menu.Item key="5" icon={<ProfileOutlined />}>
              <NavLink to="/QuestionBank/createPaper">生成试卷</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g6">
            <Menu.Item key="6" icon={<CloudDownloadOutlined />}>
              <NavLink to="/QuestionBank/historyPaper">已有试卷</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    );
  }
}

export default Navigator;
