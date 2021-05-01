import {required} from "../../utilities/validators/Validators";
import {createField, Input, GetStringKeys} from "../../assets/common/FormsControls/FormsControls";
import React from "react";
import s from "../../assets/common/FormsControls/FormsControls.module.css";
import {InjectedFormProps} from "redux-form";
import {LoginFormValuesType} from "./Login";

export type PropsType = {
    captchaUrl: string | null
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, PropsType> & PropsType> = ({
                                                                                                       handleSubmit,
                                                                                                       error,
                                                                                                       captchaUrl
                                                                                                   }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(null, "rememberMe", [], Input, {type: "checkbox"}, "")}

            {captchaUrl && <img src={captchaUrl} alt={"not found"}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>
