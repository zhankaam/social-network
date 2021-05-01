import {createField, GetStringKeys, Textarea} from "../../../../../assets/common/FormsControls/FormsControls";
import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../../../utilities/validators/Validators";
import { Button } from "antd";
import s from "./../MyPosts.module.css"

export type AddPostFormValuesType = {
    newPostText: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>
type PropsType = {}

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            {createField<AddPostFormValuesTypeKeys>("Post message", "newPostText", [required], Textarea)}
        </div>
        <div>
            <button className={s.btn}>Add post</button>
        </div>
    </form>
    )
}
export default reduxForm<AddPostFormValuesType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)