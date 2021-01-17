import React from 'react';
import s from './ProfileInfo.module.css';
type ProfileInfoPropsType = {

}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
        <div className={s.img}>
        <img src='https://sun9-36.userapi.com/impg/HZnWrqzamma2_Yw7xcSD-8XXR_IZKSxjJp0WNQ/EYak3s-RlnY.jpg?size=1080x1079&quality=96&proxy=1&sign=8743d906f74b4baec37a9fb4f8481d8a&type=album' />
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>

      </div>

    );
}

export default ProfileInfo;