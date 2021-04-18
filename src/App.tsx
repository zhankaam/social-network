import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/Profile/News/News";
import Music from "./components/Profile/Music/Music";
import Settings from './components/Profile/Settings/Settings';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {UsersPage} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import store, {RootStateRedux} from "./redux/redux-store";
import {Preloader} from "./assets/common/Preloader";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Profile/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)


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
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path="/"
                       render={() => <Redirect to={"/profile"}/>}/>
                <Route path='/dialogs'
                       render={() => <SuspendedDialogs/>}/>
                <Route path='/profile/:userId?'
                       render={() => <SuspendedProfile/>}/>
                <Route path='/users'
                       render={() => <UsersPage/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/dialogs' render={() => <News/>}/>
                <Route path='/profile' render={() => <Music/>}/>
                <Route path='/dialogs' render={() => <Settings/>}/>
            </div>
        </div>
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