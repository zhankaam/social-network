import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../assets/common/FormsControls/FormsControls";
import {required} from "../utilities/validators/Validators";

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Login"}
                    validate={[required]}
                    name={"login"}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    validate={[required]}
                    name={"password"}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    type="checkbox"
                    name={"rememberMe"}
                    component={Input}
                /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}