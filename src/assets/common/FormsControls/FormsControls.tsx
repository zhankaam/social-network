import  React from "react"
import {Field, WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'

const FormControl: React.FC<WrappedFieldProps> = ({meta: {touched,error}, children}) => {
    const hasError = touched && error

    return <div className={s.formControl + " " + (hasError ? s.error : "")}>
        <div>
            {children}
        </div>
        {hasError && <span>{error}</span>}
    </div>
}

export const Textarea: React.FC<WrappedFieldProps>  = (props) => {
    const {input,meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps>  = (props) => {
    const {input, meta, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder: string | null,name:any,validators:any,component:any,props= {},text = "") => {
   return <div>
        <Field  placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>