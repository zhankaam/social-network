import React from 'react'
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LoginForm} from "./LoginForm";
import {login} from "../Redux/auth-reducer";
import { Redirect } from 'react-router-dom';
import {RootStateRedux} from "../Redux/redux-store";

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password,formData.rememberMe)
    }


    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: RootStateRedux) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);