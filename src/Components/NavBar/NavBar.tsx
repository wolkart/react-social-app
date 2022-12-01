import React, {FC} from 'react'
import './NavBar.scss'
import {Nav} from "./Nav/Nav";

export const NavBar: FC = () => {
  return (
    <div className="NavBar">
      <div className="NavBar__inner">
        <Nav/>
      </div>
    </div>
  )
}