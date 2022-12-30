import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import './Logo.scss'

export const Logo: FC = () => {
    return (
        <NavLink to={'/'} className="Logo">
            <img src="https://bumper-stickers.ru/35276-thickbox_default/volk-iz-multfilma-jil-byl-pes.jpg"
                 alt="Wolf social"/>
            <span className="Logo__name">Заходи, если что...</span>
        </NavLink>
    );
};