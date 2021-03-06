import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users/users-reducer";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/users/users-selectors";
import s from "./Users.module.css"

export const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
};

type FriendFormType = "true" | "false" | "null";
export type FormType = {
    term: string,
    friend: FriendFormType
}

export type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo(props => {

    const filter = useSelector(getUsersFilter);

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        };

        props.onFilterChanged(filter);
        setSubmitting(false);
    };

    return <div>
        <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option className={s.option} value={"null"}>All</option>
                        <option value={"true"}>only followed</option>
                        <option value={"false"}>only unfollowed</option>
                    </Field>
                    <button className={s.btn} type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>;
});