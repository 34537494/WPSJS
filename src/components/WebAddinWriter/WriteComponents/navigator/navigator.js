import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "antd/dist/antd.css";
import { Layout, Menu, AutoComplete } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  FullscreenExitOutlined,
  AppstoreFilled,
  FileWordOutlined,
  ShopOutlined,
  DeliveredProcedureOutlined,
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
          <Menu.ItemGroup key="g2">
            <Menu.Item key="2" icon={<LaptopOutlined />}>
              <NavLink to="/writer/function">数据预处理</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g3">
            <Menu.Item key="3" icon={<NotificationOutlined />}>
              <NavLink to="/writer/edit">插入处理</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g4">
            <Menu.Item key="4" icon={<FullscreenExitOutlined />}>
              <NavLink to="/writer/four">格式处理</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g5">
            <Menu.Item key="5" icon={<AppstoreFilled />}>
              <NavLink to="/writer/expand">拓展功能</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g6">
            <Menu.Item key="6" icon={<FileWordOutlined />}>
              <NavLink to="/writer/merge">文档合并</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g7">
            <Menu.Item key="7" icon={<DeliveredProcedureOutlined />}>
              <NavLink to="/writer/fillTable">填充表格</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g8">
            <Menu.Item key="8" icon={<ShopOutlined />}>
              <NavLink to="/writer/Repository">内容库</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g9">
            <Menu.Item key="9" icon={<TableOutlined />}>
              <NavLink to="/writer/Table">表格插入</NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    );
  }
}

export default Navigator;
