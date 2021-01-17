import {UserType} from "../types";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type FollowACType = {
    type: 'FOLLOW'
    usersId: number
}
export type UnFollowACType = {
    type: 'UNFOLLOW'
    usersId: number
}
export type SetUsersACType = {
    type: 'SET_USERS'
    users: UserType[]
}
export type SetCurrentPageACType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type SetUsersTotalCountACType = {
    type: 'SET_TOTAL_USERS_COUNT'
    count: number
}
export type UsersACType = FollowACType | UnFollowACType | SetUsersACType | SetCurrentPageACType | SetUsersTotalCountACType

let initialState = {
    users: [ ] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: UsersACType): InitialState => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case  SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case  SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
}

export const followAC = (usersId: number): FollowACType => ({type: FOLLOW, usersId})
export const unfollowAC = (usersId: number): UnFollowACType => ({type: UNFOLLOW, usersId})
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount: number): SetUsersTotalCountACType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})


export default usersReducer;