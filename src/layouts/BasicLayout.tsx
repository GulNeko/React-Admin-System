import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default function BasicLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: "仪表盘",
    },
    {
      key: "/users",
      icon: <UserOutlined />,
      label: "用户管理",
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        className="border-r border-gray-200"
      >
        <div className="h-16 flex items-center justify-center border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary m-0">Admin System</h1>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          className="border-none mt-2"
        />
      </Sider>
      <Layout>
        <Header className="bg-white px-6 flex items-center shadow-sm z-10" />
        <Content className="m-6 p-6 bg-white rounded-lg shadow-sm overflow-auto">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
