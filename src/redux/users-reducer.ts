import {UserType} from "../types";
import {updateObjectInArray} from "../utilities/object-helpers";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";
import {APIResponseType} from "../api/api";


let initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of users ids
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users,action.usersId,"id",{followed: true})
            }
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users,action.usersId,"id",{followed: false})
            }
        case 'SN/USERS/SET_USERS': {
            return {...state, users: action.users}
        }
        case  'SN/USERS/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case  'SN/USERS/TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress,  action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

// ACTION CREATORS
export const actions = {
    followSuccess: (usersId: number) => ({type: 'SN/USERS/FOLLOW', usersId} as const),
    unfollowSuccess: (usersId: number)  => ({type: 'SN/USERS/UNFOLLOW', usersId} as const),
    setUsers: (users: Array<UserType>)  => ({type: 'SN/USERS/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => (
        {type: 'SN/USERS/SET_TOTAL_USERS_COUNT', count: totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => (
        {type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const)
}

// THUNK CREATORS
export const getUsers = (currentPage: number, pageSize:number): ThunkType => {  //ThunkCreator
              return async (dispatch) => {
              dispatch(actions.toggleIsFetching(true))
              dispatch(actions.setCurrentPage(currentPage))

              let data = await usersAPI.getUsers(currentPage, pageSize);
              dispatch(actions.toggleIsFetching(false))
              dispatch(actions.setUsers(data.items))
              dispatch(actions.setTotalUsersCount(data.totalCount))
      }
}

export const _followUnfollowFlow = async (dispatch: DispatchType,
                                          userId: number,
                                          apiMethod: (userId: number) => Promise<APIResponseType>,
                                          actionCreator: (userId: number) => ActionsType ) => {
    try{
        dispatch(actions.toggleFollowingProgress(true, userId))
        let data = await apiMethod(userId);

        if(data.resultCode === 0) {
            dispatch(actionCreator(userId))}
    }
    finally{
        dispatch(actions.toggleFollowingProgress(false, userId))
    }
}

export const follow = (userId: number): ThunkType => {  //ThunkCreator
        return async (dispatch) => {
            await _followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),actions.followSuccess)
           }
}

export const unfollow = (userId: number): ThunkType => {  //ThunkCreator
        return async (dispatch) => {
            await _followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),actions.unfollowSuccess)
        }
}

// TYPES
export type ActionsType = InferActionsType<typeof actions>
type DispatchType =  Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>
type InitialStateType = typeof initialState;