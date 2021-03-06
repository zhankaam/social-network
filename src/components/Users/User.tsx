import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";
import {NavLink} from "react-router-dom"
import {UserType} from "../../types";
import { Button } from "antd";
import s from "./Users.module.css"

type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export let User: React.FC<UserPropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
        <span>
             <div>
                <NavLink to={'./profile/' + user.id}>
                     <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                </NavLink>
            </div>
             <div>{user.followed
                 ? <button className={s.btn}
                           disabled={followingInProgress.some(id => id === user.id)}
                           onClick={() => {
                               unfollow(user.id)
                           }}>Unfollow</button>
                 : <button className={s.btn}
                           disabled={followingInProgress.some(id => id === user.id)}
                           onClick={() => {
                               follow(user.id)
                           }}>Follow</button>}
            </div>
        </span>
        <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    {/*<div>{"user.location.country"}</div>*/}
                    {/*<div>{"user.location.city"}</div>*/}
                </span>
         </span>
    </div>
}
