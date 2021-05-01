import React from "react"
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'
import {FieldValidatorType} from "../../../utilities/validators/Validators";

type FormsControlsPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormsControlsPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error

    return <div className={s.formControl + " " + (hasError ? s.error : "")}>
        <div>
            {children}
        </div>
        {hasError && <span>{error}</span>}
    </div>
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea className={s.textarea} {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input className={s.input} {...input} {...restProps}/></FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | null,
                                                         name: string,
                                                         validators: FieldValidatorType[],
                                                         component: React.FC<WrappedFieldProps>,
                                                         //component: (value: string) => (string | undefined),
                                                         props = {},
                                                         text = "") {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>