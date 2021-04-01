import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import { logout} from "../../redux/auth-reducer";

type OwnPropsType = {
    logout: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<OwnPropsType & MapStateToPropsType> {

    render() {
        return (
            <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state: RootStateRedux ): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)