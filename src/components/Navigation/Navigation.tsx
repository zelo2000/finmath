import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Navigation: FC = () => {
  return (
    <Sider trigger={null} collapsible>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="0">
          <Link to="/">Головна</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/task/1">Тема 1.</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/task/2">Тема 2.</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/task/3">Тема 3.</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/task/4">Тема 4.</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/task/5">Тема 5.</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/task/7">Тема 7.</Link>
        </Menu.Item>
      </Menu>

      <div className="copyright">YaZOKP ©2021</div>
    </Sider>
  );
};

export default Navigation;
