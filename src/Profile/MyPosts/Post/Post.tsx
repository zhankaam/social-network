import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType ) => {
    return (
         <div className={s.item}>
             <img src='https://sun9-22.userapi.com/impg/dwxCg3h8CMLZCggTTwOJS2HgGnqvoPddi4ZPaw/dNI9KpGL8dQ.jpg?size=720x1080&quality=96&sign=70489ebc5babeeaba2903a6b715cc575&type=album' />
             {props.message}
             <div> <span>like</span> {props.likesCount}
              </div>
          </div>
          
    );
}

export default Post;