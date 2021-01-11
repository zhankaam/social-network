import React from 'react';
import s from './ProfileInfo.module.css';
type ProfileInfoPropsType = {

}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
        <div className={s.img}>
        <img src='https://sun9-38.userapi.com/impg/miRWABkPRBhAO4LbjCV64B0-3iAdVtX5UGBi3g/S4LNaqO-GUg.jpg?size=864x1080&quality=96&sign=81fd65fc60da72e94506ebed14ba69ef&type=album' />
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>

      </div>

    );
}

export default ProfileInfo;