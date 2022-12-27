import React, {FC} from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";
import './Header-login.scss'
import {useAppSelector} from "../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/authReducer";

export const Header: FC = () => {
    const {isAuth, login} = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <header className="Header">
            <div className="Container">
                <div className="Header__inner">
                    <NavLink to={'/'} className="Logo">
          <span className="Logo__image">
            <img src="https://bumper-stickers.ru/35276-thickbox_default/volk-iz-multfilma-jil-byl-pes.jpg"
                 alt="Wolf social"/>
          </span>
                        <span className="Logo__name">Заходи, если что...</span>
                    </NavLink>
                    <div className="Header-login">
                        {isAuth
                            ? <div>{login} - <button onClick={onLogout}>Log out</button></div>
                            : <NavLink to={'/login'}>Log in</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    )
}