import React, {FC} from 'react'
import './Footer.scss'
import {Footer} from "antd/lib/layout/layout";

export const AppFooter: FC = () => {
  return (
      <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#ffffff'}}>
        Social Network ©2023 Created by Artem Wolkov
      </Footer>
  )
}