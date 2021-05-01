import React from 'react';
import s from './Post.module.css';
import {LikeOutlined} from '@ant-design/icons';

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
          <div>
              <img
                  src='https://sun9-35.userapi.com/impf/HLP5CRTKbRvZisagdIWhrAzNRGxoFve9ZFJwLQ/ezCvng_UZZM.jpg?size=864x1080&quality=96&sign=439b5cff05a0cf4601e2b7c9f7625386&type=album'/>
          </div>
           <p className={s.chat}>{props.message}</p>
            <div className={s.block}>
                <span><LikeOutlined /></span>
                {props.likesCount}
            </div>
        </div>

    );
}

export default Post;