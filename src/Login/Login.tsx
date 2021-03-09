import React from 'react'
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LoginForm, PropsType} from "./LoginForm";
import {login} from "../Redux/auth-reducer";
import { Redirect } from 'react-router-dom';
import {RootStateRedux} from "../Redux/redux-store";

const LoginReduxForm = reduxForm<LoginFormValuesType,PropsType>({ form: 'login'})(LoginForm)
type MapStateToPropsType = {
    captchaUrl: string | null
    isAuth: boolean

}
type MapDispatchToPropsType = {
    login: (email:string, password:string,rememberMe:boolean,captcha: string) => void
}
export type LoginFormValuesType = {
    password: string
    email: string
    rememberMe: boolean
    captchaUrl: string
}
const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType > = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password,formData.rememberMe, formData.captchaUrl)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: RootStateRedux): MapStateToPropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);