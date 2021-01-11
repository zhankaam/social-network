import React from "react";
import styles from "./users.module.css"
import {UsersArrayType, usersReducerPropsType} from "../Redux/users-reducer";
import axios from 'axios'

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UsersArrayType>
    setUsers: (users: Array<UsersArrayType>) => void
}

let Users = (props: UsersPropsType ) => {
if(props.users.length === 0){props.setUsers([
    {
        id: 1,
        photoUrl: 'https://sun9-33.userapi.com/impf/7vLxgBVgBc-40c49ga_Aznq9swc1Rmzols4AVQ/390poHMbqew.jpg?size=1242x1242&quality=96&proxy=1&sign=940c60e6825110cf707f780611a734b1&type=album',
        followed: false,
        fullName: 'Zhanat',
        status: 'If you never try you will never know',
        location: {city: 'Minsk', country: 'Belarus'}
    },
    {
        id: 2,
        photoUrl: 'https://sun9-27.userapi.com/impf/CLmV3Ycjr4aYpne62jsNIs-0jaXiJz_K1evJFQ/1oB2xL23d4A.jpg?size=750x750&quality=96&proxy=1&sign=1e220f22ed1879d9cb6f4edd80949eee&type=album',
        followed: true,
        fullName: 'Bella',
        status: 'I am a bitch, I am a boss',
        location: {city: 'Los-Angeles', country: 'USA'}
    },
    {
        id: 3,
        photoUrl: 'https://sun9-10.userapi.com/impf/goGHDCQViubu6c5lMfhRC_DldQtVclE03yrx1Q/OumhVO_UMKY.jpg?size=749x752&quality=96&proxy=1&sign=610344e5ec5c1900caad26e208bef416&type=album',
        followed: true,
        fullName: 'Diana',
        status: 'loving you is a losing game',
        location: {city: 'Almaty', country: 'Kazakhstan'}
    },
    {
        id: 4,
        photoUrl: 'https://sun9-72.userapi.com/impf/dPOxSK6R3uXdB6wLl4OQw5BYdqkw3buECfFvIg/mu2gt_TXIiI.jpg?size=1080x1080&quality=96&proxy=1&sign=4127870fa2eb556f49e1001cd7574401&type=album',
        followed: false,
        fullName: 'Audrey',
        status: 'Dream as if you’ll live forever, live as if you’ll die today',
        location: {city: 'Paris', country: 'France'}
    },
])}

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}


export default Users;