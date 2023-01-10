import {Spin} from "antd";
import React, {FC} from "react";
import {StyledPreloader} from "./styles";

export const Preloader: FC = () => {
    return (
        <StyledPreloader>
            <Spin size="large"/>
        </StyledPreloader>
    )
}