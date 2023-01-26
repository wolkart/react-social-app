import React, { useEffect } from 'react';
import 'antd/dist/reset.css'
import { AppFooter } from "./Components/Footer/Footer";
import { NavBar } from "./Components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { Preloader } from "./Components/common/Preloader/Preloader";
import { AppHeader } from "./Components/Header/Header";
import { AppRouter } from "./Components/Router/AppRouter";
import { Layout, theme } from 'antd';
import { useAppSelector } from "./hooks/useAppSelector";

const { Content, Sider } = Layout;

export const App = () => {
  const { initialized } = useAppSelector(state => state.app)
  const dispatch = useDispatch()

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  if (!initialized) return <Preloader/>

  return (
    <Layout style={{minHeight: '100vh'}}>
      <AppHeader/>
      <Content style={
        {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          flex: '1 1 auto',
        }
      }>
        <Layout style={{
          display: 'flex',
          columnGap: '20px',
          padding: '20px 15px',
          background: colorBgContainer,
          height: '100%'
        }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <NavBar/>
          </Sider>
          <Content style={{ minHeight: 280 }}>
            <AppRouter/>
          </Content>
        </Layout>
      </Content>
      <AppFooter/>
    </Layout>
  );
}