// 添加核心的react库
import React from 'react'

// 添加antd库, 用于承载echarts, 这个是引入的语法, 详见nodejs的文档
import { Layout, Menu } from 'antd'

// 添加css文件, css文件里又引入了antd的css
import './App.css'

// 添加路由
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

// 需要的组件
import Total from './component/Total'
import { Teams, TeamShow } from './component/Team'

import {
  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <a href="https://hackathon2020eastchina.top">
              <div className="sitename">
                Hackathon2020华东
            </div>
            </a>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="total" icon={<PieChartOutlined />}>
                <span>总览</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="team" icon={<TeamOutlined />}>
                <span>所有队伍</span>
                <Link to="/team" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, background: "white" }}>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              {/* 内容路由 */}
              <Route exact path="/" component={Total} />
              <Route exact path="/team" component={Teams} />
              <Route path="/team/:id" component={TeamShow} />

            </Content>
            <Footer style={{ textAlign: 'center' }}>Hackathon 2020 East China ©2020</Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App