import React, {useEffect} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import News from "./Profile/News/News";
import Music from "./Profile/Music/Music";
import Settings from './Profile/Settings/Settings';
import { Route} from "react-router-dom";
import DialogsContainer from "./Profile/Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./Redux/app-reducer";
import {RootStateRedux} from "./Redux/redux-store";
import {Preloader} from "./assets/common/Preloader";

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

// class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
//
//     componentDidMount() {
//         this.props.initializeApp();
//     }
//
//     render() {
//         // if(!this.props.initialized) {
//         //     return <Preloader/>
//         // }
//
//         return (
//                 <div className='app-wrapper'>
//                     <HeaderContainer/>
//                     <Navbar/>
//                     <div className='app-wrapper-content'>
//
//                         <Route path='/dialogs'
//                                render={() => <DialogsContainer/>}/>
//                         <Route path='/profile/:userId?'
//                                render={() => <ProfileContainer/>}/>
//                         <Route path='/users'
//                                render={() => <UsersContainer/>}/>
//                         <Route path='/login' render={() => <Login/>}/>
//                         <Route path='/dialogs' render={() => <News/>}/>
//                         <Route path='/profile' render={() => <Music/>}/>
//                         <Route path='/dialogs' render={() => <Settings/>}/>
//
//                     </div>
//                 </div>
//         );
//     }
// }
type PropsType = MapStateToPropsType & MapDispatchToPropsType
const App = (props: PropsType ) => {

    useEffect(() => {
        props.initializeApp()
    },[])
    if(!props.initialized) {
        return <Preloader/>
    }
    return (
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
    )
}

const mapStateToProps = (state: RootStateRedux): MapStateToPropsType => ({
    initialized: state.app.initialized
})
// export default App
//
// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp}))(App)
 export default withRouter(connect(mapStateToProps, {initializeApp})(App))