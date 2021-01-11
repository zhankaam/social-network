import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
export type ProfilePropsType = {

}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            {/*<MyPostsContainer />*/}
            <MyPostsContainer />
        </div>

    );
}

export default Profile;