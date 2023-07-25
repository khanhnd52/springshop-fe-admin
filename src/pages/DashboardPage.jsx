import React, { useEffect } from "react";
import "./DashboardPage.css";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Layout, Menu, Row, message, theme } from "antd";
import { useState } from "react";
import {
  MdAddCircleOutline,
  MdCategory,
  MdFormatListBulleted,
  MdInsertChartOutlined,
  MdLogout,
  MdManageAccounts,
  MdOutlineHome,
  MdOutlineInventory2,
  MdOutlineShoppingBag,
  MdRequestPage,
  MdSupervisorAccount,
} from "react-icons/md";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/home/Home";
import AddOrEditCategory from "../components/categories/AddOrEditCategory";
import ListCategory from "../components/categories/ListCategory";
import { useDispatch, useSelector } from "react-redux";
import { setError, setMessage } from "../redux/actions/commonAction";
import commonReducer from "./../redux/reducers/commonReducer";
import ListManufacturers from "../components/manufacturers/ListManufacturers";

const { Header, Sider, Content } = Layout;

function DashboardPage() {
  const [marginLeft, setMarginLeft] = useState(200);
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const msg = useSelector((state) => state.commonReducer.message);
  const err = useSelector((state) => state.commonReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (msg) {
      dispatch(setMessage(""));
      message.success(msg);
    }
    if (err) {
      dispatch(setError(""));
      message.error(err);
    }
  }, [msg, err]);

  const siteLayoutStyle = { marginLeft: marginLeft };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "0",
          bottom: "0",
        }}
      >
        <div className="logo">
          <h2>{collapsed ? "SS" : "SpringShop"}</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <MdOutlineHome />,
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <MdCategory />,
              label: "Category",
              children: [
                {
                  key: "21",
                  icon: <MdAddCircleOutline />,
                  label: "Add Category",
                  onClick: () => navigate("/categories/add"),
                },
                {
                  key: "22",
                  icon: <MdFormatListBulleted />,
                  label: "List Categories",
                  onClick: () => navigate("/categories/list"),
                },
              ],
            },
            {
              key: "23",
              icon: <MdCategory />,
              label: "Others",
              children: [
                {
                  key: "231",
                  icon: <MdAddCircleOutline />,
                  label: "List Manufacturers",
                  onClick: () => navigate("/manufacturers/list"),
                },
                {
                  key: "232",
                  icon: <MdFormatListBulleted />,
                  label: "List Countries",
                  onClick: () => navigate("/coutries/list"),
                },
                {
                  key: "233",
                  icon: <MdFormatListBulleted />,
                  label: "List Provinces",
                  onClick: () => navigate("/provinces/list"),
                },
              ],
            },
            {
              key: "3",
              icon: <MdOutlineInventory2 />,
              label: "Product",
            },
            {
              key: "4",
              icon: <MdOutlineShoppingBag />,
              label: "Orders",
            },
            {
              key: "5",
              icon: <MdRequestPage />,
              label: "Invoices",
            },
            {
              key: "6",
              icon: <MdInsertChartOutlined />,
              label: "Statistics",
            },
            {
              key: "7",
              icon: <MdManageAccounts />,
              label: "Profiles",
            },
            {
              key: "8",
              icon: <MdSupervisorAccount />,
              label: "Accounts",
            },
            {
              key: "9",
              icon: <MdLogout />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout style={siteLayoutStyle}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            right: 16,
            left: marginLeft + 16,
            top: 0,
            position: "fixed",
            height: 70,
          }}
        >
          <Row>
            <Col md={18}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                  const sts = !collapsed;
                  setCollapsed(sts);
                  setMarginLeft(sts ? 80 : 200);
                }}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col md={6}>
              <div>
                <Avatar
                  size="default"
                  icon={<UserOutlined></UserOutlined>}
                ></Avatar>
                &nbsp;Nguyễn Duy Khánh
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            marginTop: 80,
          }}
        >
          <div className="content-panel">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route
                path="/categories/add"
                element={<AddOrEditCategory key="a"></AddOrEditCategory>}
              ></Route>
              <Route
                path="/categories/update/:id"
                element={<AddOrEditCategory key="u"></AddOrEditCategory>}
              ></Route>
              <Route
                path="/categories/list"
                element={<ListCategory></ListCategory>}
              ></Route>
              <Route
                path="/manufacturers/list"
                element={<ListManufacturers />}
              ></Route>
            </Routes>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;
