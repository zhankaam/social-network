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
import { useHistory } from "react-router-dom";
import * as queryString from "querystring";


type PropsType = {}

type QueryParamsType = { term?: string; page?: string; friend?: string };
export const Users: React.FC<PropsType> = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const users = useSelector(getUsersState)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingInProgress)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if(!!parsed.page) actualPage = Number(parsed.page)


        if(!!parsed.term) actualFilter = {...actualFilter,term: parsed.term as string}
        switch(parsed.friend){
            case "null":
                actualFilter = {...actualFilter,friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter,friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter,friend: false}
                break;
        }

        dispatch(getUsers(actualPage, pageSize, actualFilter))
    },[])

    useEffect(() => {

        const query: QueryParamsType = {}

        if(!!filter.term) query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !== 1) query.page = String(currentPage)


        history.push({
            pathname: "/users",
            search: queryString.stringify(query)
        })
    },[filter,currentPage])

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

