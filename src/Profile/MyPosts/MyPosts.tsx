import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsPropsType} from "../../Redux/profile-reducer";
import {useSelector} from "react-redux";
import {RootStateRedux} from "../../Redux/redux-store";

export type MyPostsPropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
    addPost: () => void
    // onPostChange: (text: string) => void
    updateNewPostText: (text: string) => void
}

const MyPosts = (props:MyPostsPropsType) => {

    let postsElements =
       props.posts.map((p, i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value);
    }

        return (
            <div className={s.postsBlock}>
                <h3> My posts </h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        );
}
export default MyPosts