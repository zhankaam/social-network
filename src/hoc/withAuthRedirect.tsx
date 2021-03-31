import React from 'react'
import {Redirect} from 'react-router'
import {RootStateRedux} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsWithRedirect = (state: RootStateRedux): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
} as MapStateToPropsType)

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapStateToPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to="/login"/>

        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsWithRedirect)(RedirectComponent)
    return ConnectAuthRedirectComponent
}