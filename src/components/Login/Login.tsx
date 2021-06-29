import React from 'react'
import {reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {LoginForm, PropsType} from "./LoginForm";
import {Redirect} from 'react-router-dom';
import {RootStateRedux} from "../../redux/redux-store";
import { login } from '../../redux/auth-reducer/auth-reducer-sagas';

const LoginReduxForm = reduxForm<LoginFormValuesType, PropsType>({form: 'login'})(LoginForm)

type LoginToPropsType = {}

export type LoginFormValuesType = {
    password: string
    email: string
    rememberMe: boolean
    captchaUrl: string
}
export const Login: React.FC<LoginToPropsType> = () => {

    const captchaUrl = useSelector((state: RootStateRedux) => state.auth.captchaUrl)
    const isAuth = useSelector((state: RootStateRedux) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl))
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1 style={{padding: "20px", margin:"10px",textTransform: "uppercase"}}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}


