import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsPropsType} from '../../../types';
import AddNewPostForm, {AddPostFormValuesType} from "./AddNewPostForm";

export type MapStateToPropsType = {
    posts: Array<PostsPropsType>
}
export type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}


const MyPosts: React.FC<MapStateToPropsType & MapDispatchToPropsType> = React.memo((props) => {

    let postsElements = props.posts.map((p, i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

        return (
            <div className={s.postsBlock}>
                <h3> My posts </h3>
                <AddNewPostForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        );
})


export default MyPosts