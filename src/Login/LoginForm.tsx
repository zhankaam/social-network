import {Field} from "redux-form";
import {required} from "../utilities/validators/Validators";
import {Input} from "../assets/common/FormsControls/FormsControls";
import React from "react";
import s from "../assets/common/FormsControls/FormsControls.module.css"

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    validate={[required]}
                    name={"email"}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    type={"password"}
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
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}