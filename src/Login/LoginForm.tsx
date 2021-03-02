import {Field} from "redux-form";
import {required} from "../utilities/validators/Validators";
import {createField, Input} from "../assets/common/FormsControls/FormsControls";
import React from "react";
import s from "../assets/common/FormsControls/FormsControls.module.css"

type PropsType = {
    handleSubmit: (formData: any) => void
    error: string
    captchaUrl: string | null
}

export const LoginForm: React.FC<PropsType> = ({handleSubmit,error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Email","email",[required],Input)}
                {createField("Password","password",[required],Input,{type: "password"})}
                {createField(null,"rememberMe",[],Input,{type: "checkbox"},"remember me")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&  createField("Symbols from image","captcha",[required],Input,{})}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}