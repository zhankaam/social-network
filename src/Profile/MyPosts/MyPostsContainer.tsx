import React, { FC } from 'react';
import {addPost, PostsPropsType, updateNewPostText} from "../../Redux/profile-reducer";
import MyPosts, {MyPostsPropsType} from "./MyPosts";
import {
    connect,
    ConnectedComponent, ConnectedProps, DispatchProp,
    InferableComponentEnhancer,
    InferableComponentEnhancerWithProps
} from "react-redux";
import {RootStateRedux} from "../../Redux/redux-store";
import {Dispatch} from "redux";


export type MapStateToPropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
}
export type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: RootStateRedux): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
// /*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         updateNewPostText: (text: string) => {
//             let action = updateNewPostTextActionCreator(text);
//             dispatch(action)
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         }
//     }
// }*/



export default connect<MapStateToPropsType, MapDispatchToPropsType, null, RootStateRedux>
(mapStateToProps, {addPost, updateNewPostText})(MyPosts) as ConnectedComponent<any, {}>