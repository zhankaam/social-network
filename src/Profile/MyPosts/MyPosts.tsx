import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utilities/validators/Validators";
import {Textarea} from "../../assets/common/FormsControls/FormsControls";
import { PostsPropsType } from '../../types';

export type MyPostsPropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
    addPost: (newPostText: any) => void
}

const maxLength10 = maxLengthCreator(10)

    function AddNewPostForm(props: any) {
        return <form onSubmit={props.handleSubmit} >
            <div>
                <Field name="newPostText" component={Textarea}
                       placeholder={"Post message"}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>;
    }

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo((props:MyPostsPropsType) => {

    let postsElements = props.posts.map((p, i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }

        return (
            <div className={s.postsBlock}>
                <h3> My posts </h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        );
})


export default MyPosts