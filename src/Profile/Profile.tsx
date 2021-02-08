import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../types";

export type ProfilePropsType = {
      profile: ProfileType | null
      updateStatus: () => void
      status: string
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
           <MyPostsContainer />
        </div>

    );
}

export default Profile;