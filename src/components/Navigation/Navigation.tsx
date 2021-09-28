import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Navigation: FC = () => {
  const location = useLocation();

  return (
    <Sider trigger={null} collapsible>
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">Головна</Link>
        </Menu.Item>
        <Menu.Item key="/task/1">
          <Link to="/task/1">Тема 1.</Link>
        </Menu.Item>
        <Menu.Item key="/task/2">
          <Link to="/task/2">Тема 2.</Link>
        </Menu.Item>
        <Menu.Item key="/task/3">
          <Link to="/task/3">Тема 3.</Link>
        </Menu.Item>
        <Menu.Item key="/task/4">
          <Link to="/task/4">Тема 4.</Link>
        </Menu.Item>
        <Menu.Item key="/task/5">
          <Link to="/task/5">Тема 5.</Link>
        </Menu.Item>
        <Menu.Item key="/task/7">
          <Link to="/task/7">Тема 7.</Link>
        </Menu.Item>
      </Menu>

      <div className="copyright">YaZOKP ©2021</div>
    </Sider>
  );
};

export default Navigation;
