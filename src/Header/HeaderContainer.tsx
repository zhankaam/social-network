import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../Redux/auth-reducer";
import {instance} from "../api/api";
import {RootStateRedux} from "../Redux/redux-store";

type PropsType = {
    setAuthUserData: (id: number, email: string, login: string, isAuth: boolean) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        instance.get(`auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login, true)
                }
            })
    }

    render() {
        return (
            <Header setAuthUserData={this.props.setAuthUserData}
            isAuth={this.props.isAuth}
            login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: RootStateRedux ) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)