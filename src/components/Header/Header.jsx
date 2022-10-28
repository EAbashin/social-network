import s from './Header.module.css';
import logo from './logo/logo.png';
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    const exitLogin = () => {
        props.deleteAuthLoginThunkCreator();
    };
    return (
        <header className={s.header_wrapper}>
            <div className={s.container}>
                <div className={s.header}>
                    <div className={s.logo_wrapper}>
                        <img className={s.logo} src={logo} alt="logo"/>
                        <h1 className={s.title}>KU-KU!</h1>
                    </div>
                    <div>
                        {props.isAuth
                            ? <button className={s.btn} onClick={exitLogin}>Exit</button>
                            : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;