import { Row, Col, Card, Statistic } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import ReactECharts from "echarts-for-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dayjs from "dayjs";

export default function Dashboard() {
  // ECharts 示例配置
  const chartOption = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        smooth: true,
        itemStyle: {
          color: "#1677ff",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(22, 119, 255, 0.5)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(22, 119, 255, 0)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* 顶部统计卡片 - Antd + Tailwind */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 m-0">仪表盘</h2>
        <span className="text-gray-500">
          更新时间：{dayjs().format("YYYY-MM-DD HH:mm:ss")}
        </span>
      </div>

      <Row gutter={24}>
        <Col span={8}>
          <Card className="hover:shadow-md transition-shadow">
            <Statistic
              title="活跃用户"
              value={112893}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="hover:shadow-md transition-shadow">
            <Statistic
              title="今日订单"
              value={93}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="hover:shadow-md transition-shadow">
            <Statistic
              title="总销售额"
              value={112893}
              prefix={<DollarOutlined />}
              precision={2}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        {/* Echarts 图表展示 */}
        <Col span={12}>
          <Card title="访问趋势" className="h-[400px]">
            <ReactECharts option={chartOption} style={{ height: "300px" }} />
          </Card>
        </Col>

        {/* Leaflet 地图展示 */}
        <Col span={12}>
          <Card title="用户分布" className="h-[400px]">
            <div className="h-[300px] w-full rounded-md overflow-hidden relative z-0">
              <MapContainer
                center={[39.9042, 116.4074]}
                zoom={10}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[39.9042, 116.4074]}>
                  <Popup>
                    北京市 <br /> 核心用户群
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
