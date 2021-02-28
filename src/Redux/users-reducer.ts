import {UserType} from "../types";
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utilities/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
export type toggleIsFetchingACType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
export type toggleFollowingProgressACType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: number
}
export type UsersACType = FollowACType | UnFollowACType |
    SetUsersACType | SetCurrentPageACType |
    SetUsersTotalCountACType | toggleIsFetchingACType | toggleFollowingProgressACType

let initialState = {
    users: [ ] as UserType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: UsersACType): InitialState => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.usersId,"id",{followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.usersId) {
                //         return {...u, followed: true}
                //     }
                //     return u
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.usersId,"id",{followed: false})
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
        case  TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case  "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress,  action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (usersId: number): FollowACType => ({type: FOLLOW, usersId})
export const unfollowSuccess = (usersId: number): UnFollowACType => ({type: UNFOLLOW, usersId})
export const setUsers = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetUsersTotalCountACType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingACType  => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressACType  => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


 export const getUsers = (currentPage: number, pageSize:number) => {  //ThunkCreator
              return async (dispatch: any) => {
              dispatch(toggleIsFetching(true))
              dispatch(setCurrentPage(currentPage))

              let data = await usersAPI.getUsers(currentPage, pageSize);
              dispatch(toggleIsFetching(false))
              dispatch(setUsers(data.items))
              dispatch(setTotalUsersCount(data.totalCount))
      }
}

export const followUnfollowFlow = async (dispatch: any,userId: number,apiMethod: any,actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId);

    if(response.data.resultCode === 0) {
        dispatch(actionCreator(userId))}
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => {  //ThunkCreator
        return async (dispatch: any) => {
            followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess)
           }
}

export const unfollow = (userId: number) => {  //ThunkCreator
        return async (dispatch: any) => {
            followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess)
        }
}


export default usersReducer;