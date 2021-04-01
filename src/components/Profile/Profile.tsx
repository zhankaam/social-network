import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer/MyPostsContainer";
import { ProfileType} from "../../types";

export type ProfilePropsType = {
        profile: ProfileType | null
        updateStatus: (status:string) => void
        status: string | null
        isOwner: boolean
        savePhoto: (file: File) => void
        saveProfile: (formData: ProfileType) => Promise<any>
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
           <MyPostsContainer />
        </div>

    );
}

export default Profile;