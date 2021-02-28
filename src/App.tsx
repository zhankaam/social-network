import React, {useEffect} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import News from "./Profile/News/News";
import Music from "./Profile/Music/Music";
import Settings from './Profile/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
import {connect, Provider} from "react-redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./Redux/app-reducer";
import store, {RootStateRedux} from "./Redux/redux-store";
import {Preloader} from "./assets/common/Preloader";
import {compose} from "redux";
const DialogsContainer = React.lazy(() => import('./Profile/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));

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
const App: React.FC<PropsType> = ({initialized,initializeApp} ) => {

    useEffect(() => {
       initializeApp()
    },[])
    if(!initialized) {
        return <Preloader/>
    }
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => {
                           return <React.Suspense fallback={<Preloader/>}>
                               <DialogsContainer/>
                           </React.Suspense>
                       }}/>
                <Route path='/profile/:userId?'
                       render={() => {
                           return <React.Suspense fallback={<Preloader/>}>
                               <ProfileContainer/>
                           </React.Suspense>
                       }}/>
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
const AppContainer = compose<any>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
//  export default withRouter(connect(mapStateToProps, {initializeApp})(App))

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp