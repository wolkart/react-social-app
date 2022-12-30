import React, {FC, useEffect, useState} from 'react';
import './Login.scss'
import {Avatar, Button, Space, Typography} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {getAuthPhoto, logout} from "../../../redux/authReducer";
import {NavLink} from "react-router-dom";

const {Text} = Typography;

export const Login: FC = () => {
    const {isAuth, login, userId, photo} = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userId) {
            dispatch(getAuthPhoto(userId))
        }
    }, [])

    const handleClick = () => {
        if (!isAuth) return

        dispatch(logout())
    }

    const renderChildButton = () => {
        return isAuth
            ? 'Выйти'
            : <NavLink to={'/login'}>Войти</NavLink>
    }

    return (
        <div className="Login">
            <Space size='middle'>
                <Space size='small'>
                    <Avatar
                        size="default"
                        icon={<UserOutlined/>}
                        src={isAuth && photo}
                        style={{border: '1px solid white'}}
                    />
                    <Text strong style={{color: '#fff'}}>{isAuth ? login : 'Гость'}</Text>
                </Space>
                <Button
                    type='default'
                    ghost
                    onClick={handleClick}
                    children={renderChildButton()}/>
            </Space>
        </div>
    );
};