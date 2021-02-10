import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsPropsType} from "../../Redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utilities/validators/Validators";
import {Textarea} from "../../assets/common/FormsControls/FormsControls";

export type MyPostsPropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
    addPost: (newPostText: any) => void
    // onPostChange: (text: string) => void
    // updateNewPostText: (text: string) => void
}

const maxLength10 = maxLengthCreator(10)

    function AddNewPostForm(props: any) {
        return <form onSubmit={props.handleSubmit} >
            <div>
                <Field name="newPostText" component={Textarea}
                       placeholder={"Post message"}
                       validate={[required, maxLength10]}
                />
              {/*  <textarea onChange={props.onChange} value={props.value}/>*/}
            </div>
            <div>
               {/* <button onClick={props.onClick}>Add post</button>*/}
                <button>Add post</button>
            </div>
        </form>;
    }

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props:MyPostsPropsType) => {

    let postsElements = props.posts.map((p, i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }

  /*  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value);
    }*/

        return (
            <div className={s.postsBlock}>
                <h3> My posts </h3>
              {/*  <AddNewPostForm onChange={onPostChange} value={props.newPostText} onClick={onAddPost}/>*/}
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        );
}


export default MyPosts