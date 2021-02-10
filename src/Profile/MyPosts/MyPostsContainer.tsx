import React from 'react';
import {addPost, PostsPropsType} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateRedux} from "../../Redux/redux-store";


export type MapStateToPropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
}
export type MapDispatchToPropsType = {
 //   updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: RootStateRedux): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         updateNewPostText: (text: string) => {
//             let action = updateNewPostTextActionCreator(text);
//             dispatch(action)
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         }
//     }
// }


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>
(mapStateToProps, {addPost})(MyPosts) /*as ConnectedComponent<any, {}>*/