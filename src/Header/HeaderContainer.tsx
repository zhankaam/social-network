import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateRedux} from "../Redux/redux-store";
import { logout} from "../Redux/auth-reducer";

type PropsType = {
    //setAuthUserData: (id: number, email: string, login: string, isAuth: boolean) => void
    isAuth: boolean
    login: string | null
    logout: () => void
}

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return (
            <Header /*setAuthUserData={this.props.setAuthUserData}*/
            isAuth={this.props.isAuth}
            login={this.props.login}
            logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state: RootStateRedux ) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)