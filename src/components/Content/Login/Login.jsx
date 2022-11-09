import s from './Login.module.css';
import logo from '../../../assets/img/logo.png';
import LoginForm from "../common/Forms/LoginForm/LoginForm";
import {Navigate} from "react-router-dom";
import React from "react";

const Login = (props) => {
    if (props.isAuth) return <Navigate to="/profile"/>

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <img className={s.logo} src={logo} alt="Logo"/>
                <h1 className={s.title}>KU-KU!</h1>
            </div>
            <div className={s.subheader}>
                <h2 className={s.subtitle + ' ' + s.active}>Login</h2>
                <h2 className={s.subtitle}>Registration</h2>
            </div>
            <LoginForm postAuthLoginThunkCreator={props.postAuthLoginThunkCreator} captcha={props.captcha}/>
        </div>
    )
};

export default Login;