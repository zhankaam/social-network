import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../../../assets/common/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import {ProfileType} from "../../../../../types";
import userPhoto from "../../../../../assets/images/390poHMbqew.jpg";
import ProfileDataForm from "../ProfileData/ProfileDataForm";
import {ProfileData} from "../ProfileData/ProfileData";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string | null
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt={"try again later"} className={s.mainPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData goToEditMode={() => {
                    setEditMode(true)
                }} profile={profile} isOwner={isOwner}/>}

            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}/>
        </div>
    );
}


export type ContactPropsType = {
    contactTitle: string | null
    contactValue: string | null
}

export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;

