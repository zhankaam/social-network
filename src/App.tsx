import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import News from "./Profile/News/News";
import Music from "./Profile/Music/Music";
import Settings from './Profile/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Profile/Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./Redux/app-reducer";
import {RootStateRedux} from "./Redux/redux-store";
import {Preloader} from "./assets/common/Preloader";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    initializeApp: () => void
}

export class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        debugger
        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>

                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/dialogs' render={() => <News/>}/>
                        <Route path='/profile' render={() => <Music/>}/>
                        <Route path='/dialogs' render={() => <Settings/>}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: RootStateRedux) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})(App))