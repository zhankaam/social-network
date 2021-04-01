import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateRedux} from "../../../../redux/redux-store";
import {PostsPropsType} from "../../../../types";
import {actions} from "../../../../redux/profile-reducer";


export type MapStateToPropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
}
export type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: RootStateRedux): MapStateToPropsType => ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
})


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>
(mapStateToProps, {addPost: actions.addPost})(MyPosts) /*as ConnectedComponent<any, {}>*/