import React, {FC} from 'react'
import {Content, Header} from 'antd/lib/layout/layout';
import {Logo} from "../common/Logo/Logo";
import {Row} from "antd";
import {Login} from "../common/Login/Login";

export const AppHeader: FC = () => {
    return (
        <Header className="header">
            <Content style={{width: '100%', maxWidth: '1280px', margin: '0 auto'}}>
                <Row justify="space-between">
                    <Logo/>
                    <Login/>
                </Row>
            </Content>
        </Header>
    )
}