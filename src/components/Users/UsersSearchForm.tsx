import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users/users-reducer";


export const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

export type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm:React.FC<PropsType> = props => {


    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        props.onFilterChanged(values)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{term: ''}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}