import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../assets/common/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../../../types";


 type ProfileInfoPropsType = {
      profile: ProfileType |  null
      status: string | null
      updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile,status,updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large} alt={"try again later"}/>
            <ProfileStatusWithHooks status={status}
            updateStatus={updateStatus}/>
        </div>
    );
}

export default ProfileInfo;