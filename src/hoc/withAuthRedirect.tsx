import React from 'react'
import {Redirect} from 'react-router'
import {RootStateRedux} from "../Redux/redux-store";
import {connect} from "react-redux";

 type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsWithRedirect = (state: RootStateRedux)/*: MapStateToPropsType*/ => ({
    isAuth: state.auth.isAuth
} as MapStatePropsType)

export function withAuthRedirect <P> (Component: React.ComponentType<P>){
    const RedirectComponent: React.FC<MapStatePropsType > = (props) => {
        let {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to="/login"/>

         return <Component {...restProps as P}/>
    }

   let ConnectAuthRedirectComponent = connect(mapStateToPropsWithRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent
}