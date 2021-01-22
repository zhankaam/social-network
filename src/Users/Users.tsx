import React from "react";
import styles from "./users.module.css";
import userPhoto from "../assets/images/390poHMbqew.jpg";
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom"
import {instance} from "../api/api";
import {UserType} from "../types";

type PropsType = {
    onPageChanged: (p: number) => void
    followingInProgress: number[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:  (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

export let Users = (props: MapDispatchToPropsType & MapStateToPropsType & PropsType ) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage: ''}
                             onClick={ (e) => { props.onPageChanged(p) }}
                >{p}</span>
            })}
        </div>
        <div>
            {
                props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'./profile/' + u.id}>
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles                                 .userPhoto}/>
                </NavLink>
            </div>
             <div>{u.followed
                 ?  <button disabled={props.followingInProgress
                            .some(id => id === u.id)}
                            onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                     return instance.delete(`follow/${u.id}`,  {
                         withCredentials: true,
                         headers: {
                             "API-KEY": "e08e1901-cb67-4f8e-968d-12deec271219"
                         }
                       })
                         .then(response => {
                             if(response.data.resultCode == 0){
                                 props.unfollow(u.id)    }
                             props.toggleFollowingProgress(false,u.id)
                         })


                 }}>Unfollow</button>
                 : <button disabled={props.followingInProgress.some(id => id === u.id)}
                           onClick={() => {
                     props.toggleFollowingProgress(true, u.id)
                     instance.post(`follow/${u.id}`, {}, {
                         withCredentials: true
                     })
                         .then(response => {
                            if(response.data.resultCode == 0){
                                props.follow(u.id)}
                             props.toggleFollowingProgress(false, u.id)
                         })
                 }}>Follow</button>}
            </div>
        </span>
                    <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                </span>
                </div>)
            }
        </div>
    </div>
}
