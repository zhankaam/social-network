import React from 'react';
import s from './Header.module.css';
import {Link} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import { logout } from '../../redux/auth-reducer/auth-reducer-sagas';

export type HeaderPropsType = {

    // logout: () => void
}

export const AppHeader: React.FC<HeaderPropsType> = () => {

    const isAuth = useSelector<RootStateRedux>(selectIsAuth)
    const login = useSelector<RootStateRedux>(selectCurrentUserLogin)
    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    const {Header} = Layout;

    return (<Header className={s.header}>
        <div className="logo"/>
        <Row>
            <Col span={18}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to="/users"> Developers</Link></Menu.Item>
                </Menu>
            </Col>
                {isAuth
                    ? <>
                        <Col span={3}>
                            <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                            <span style={{color: "White"}}> {login} </span>
                        </Col>
                        <Col span={3}>
                            <Button onClick={logoutCallback}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={6}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Col>}
        </Row>
    </Header>)
}
/*
         {/!*<img src='https://p7.hiclipart.com/preview/799/906/393/web-development-angularjs-react-front-and-back-ends-satelite-thumbnail.jpg'/>*!/}
         <img
             src='https://p1.hiclipart.com/preview/570/557/170/react-logo-redux-javascript-vuejs-babel-nodejs-npm-web-application-png-clipart.jpg'/>
         <div className={s.loginBlock}>
             {props.isAuth
                 ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                 : <NavLink to={'/login'}>Login</NavLink>}
         </div> */


