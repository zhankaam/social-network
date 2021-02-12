import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
  //  setAuthUserData: (id: number, email: string, login: string, isAuth: boolean) => void
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src='https://sun9-44.userapi.com/impf/c856136/v856136281/a9770/7RBeaUJ9A98.jpg?size=767x767&quality=96&proxy=1&sign=265e2a0e0a64547c891841d58ef10c51&type=album'/>
            <div className={s.loginBlock}>
                {props.isAuth
                              ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                              : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>);
}
export default Header;