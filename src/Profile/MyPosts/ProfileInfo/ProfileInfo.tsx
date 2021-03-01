import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../assets/common/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import { ProfileType} from "../../../types";
import userPhoto from "../../../assets/images/390poHMbqew.jpg";

 type ProfileInfoPropsType = {
      profile: ProfileType |  null
      status: string | null
      updateStatus: (status: string) => void
      isOwner: boolean
      savePhoto: (file: File) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile,status,updateStatus,isOwner,savePhoto}) => {
    if(!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt={"try again later"} className={s.mainPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            <div>
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
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts}/>
                }) }
                </div>
            </div>

            <ProfileStatusWithHooks status={status}
            updateStatus={updateStatus}/>
        </div>
    );
}

export type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<ContactPropsType> = ({contactTitle,contactValue}) => {
     return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;

