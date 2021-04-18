import React from "react";
import {UserType} from "../../types";
import {Paginator} from "../../assets/common/Paginator/Paginator";
import {User} from "./User";
import {FilterType, getUsers} from "../../redux/users/users-reducer";
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersState
} from "../../redux/users/users-selectors";


type PropsType = {
    // onFilterChanged: (filter: FilterType) => void
    // followingInProgress: number[]
    // totalUsersCount: number
    // pageSize: number
    // currentPage: number
    isFetching: boolean
    // users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number,filter: FilterType) => void
}

export let Users = (props: PropsType) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const users = useSelector(getUsersState)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingInProgress)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize,filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1,pageSize,filter))
    }

    return <div>

        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
        />
        <div>
            {users.map(u => <User key={u.id}
                                        user={u}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                                        followingInProgress={followingInProgress}/>)}

        </div>
    </div>
}

