import React from "react";
import {createField, Input, Textarea} from "../../../assets/common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types";

type PropsType = {
    profile: ProfileType
}
//type ProfileTypeKeys = GetStringKeys<ProfileType>

 const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({profile,handleSubmit}) => {

    return <form onSubmit={handleSubmit}>
             <div><button >save</button></div>
            <div>
                <b>FullName</b>: {createField("Full name","fullName", [],Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("","lookingForAJob", [],Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills</b>: {createField("My professional skills","lookingForAJobDescription", [],Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField("About me","aboutMe", [],Textarea)}
            </div>
            {/*<div>*/}
            {/*    <b>Contacts</b>: {*/}
            {/*    Object*/}
            {/*        .keys(profile.contacts)*/}
            {/*        .map((key) => {*/}
            {/*            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as any]}/>*/}
            {/*        })}*/}
            {/*</div>*/}
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;