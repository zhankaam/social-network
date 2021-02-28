import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../assets/common/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../../../types";
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
            <ProfileStatusWithHooks status={status}
            updateStatus={updateStatus}/>
        </div>
    );
}

export default ProfileInfo;