import React, {FC} from 'react'
import './NavBar.scss'
import {Nav} from "./Nav/Nav";
import {Layout} from "antd";
import {StyledNavBar} from "./styled";

export const NavBar: FC = () => {
    return (
        <StyledNavBar>
            <Nav/>
        </StyledNavBar>
    )
}