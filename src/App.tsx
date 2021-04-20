import React, {useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {Breadcrumb, Layout, Menu} from 'antd';
import {LaptopOutlined, UserOutlined,NotificationOutlined} from '@ant-design/icons';
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {UsersPage} from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import store, {RootStateRedux} from "./redux/redux-store";
import {Preloader} from "./assets/common/Preloader";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";
import {AppHeader} from "./components/Header/AppHeader";

const DialogsContainer = React.lazy(() => import('./components/Profile/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage)


type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType
const App: React.FC<PropsType> = ({initialized, initializeApp}) => {


    let catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured')
    }

    useEffect(() => {
        initializeApp();
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
        window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
    }, [])

    if (!initialized) {
        return <Preloader/>
    }

    const { SubMenu } = Menu;
    const { Content, Footer, Sider } = Layout;

    return (
        <Layout>
            <AppHeader/>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                           // defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                                <Menu.Item key="1"> <Link to="/profile" > Profile</Link></Menu.Item>
                                <Menu.Item key="2"> <Link to="/dialogs"> Messages</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                                <Menu.Item key="5"><Link to="/users"> Users</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Messages">
                                <Menu.Item key="9"><Link to="/chat">Chat</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Switch>
                            <Route exact path="/"
                                   render={() => <Redirect to={"/profile"}/>}/>
                            <Route path='/dialogs'
                                   render={() => <SuspendedDialogs/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <SuspendedProfile/>}/>
                            <Route path='/users'
                                   render={() => <UsersPage/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/chat' render={() => <SuspendedChatPage/>}/>
                        </Switch>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Social Network ©2021 Created by Samurai Zhanat</Footer>
        </Layout>
    )
}

const mapStateToProps = (state: RootStateRedux): MapStateToPropsType => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp