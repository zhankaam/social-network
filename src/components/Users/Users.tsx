import React, {useEffect} from "react";
import {Paginator} from "../../assets/common/Paginator/Paginator";
import {User} from "./User";
import {FilterType, getUsers} from "../../redux/users/users-reducer";
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersState
} from "../../redux/users/users-selectors";


type PropsType = {}

export const Users: React.FC<PropsType> = (props) => {

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize, filter))
    }, [])

    const totalUsersCount = useSelector(getTotalUsersCount)
    const users = useSelector(getUsersState)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingInProgress)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }

    const follow = (userId: number) => {
        dispatch(follow(userId))
    }

    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
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
                                  unfollow={unfollow}
                                  follow={follow}
                                  followingInProgress={followingInProgress}/>)}

        </div>
    </div>
}

