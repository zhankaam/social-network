import React from "react";
import {Contact} from "./ProfileInfo";
import {ProfileType} from "../../../types";

export type ProfileDataPropsType = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: () => void
}

export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>FullName</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {
            Object
                .keys(profile.contacts)
                .map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as any]}/>
                })}
        </div>
    </div>
}