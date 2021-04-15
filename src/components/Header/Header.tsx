import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            {/*<img src='https://p7.hiclipart.com/preview/799/906/393/web-development-angularjs-react-front-and-back-ends-satelite-thumbnail.jpg'/>*/}
            <img
                src='https://p1.hiclipart.com/preview/570/557/170/react-logo-redux-javascript-vuejs-babel-nodejs-npm-web-application-png-clipart.jpg'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>);
}
export default Header;