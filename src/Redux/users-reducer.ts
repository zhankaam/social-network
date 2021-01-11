const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type LocationPropsType = {
    city: string
    country: string
}
export type UsersArrayType = {
    id: number
    fullName: string
    followed: boolean
    status: string
    location: LocationPropsType
    photoUrl: string
}


export type usersReducerPropsType = {
    users: Array<UsersArrayType>
}
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
    users: []
}
export type UsersACType = FollowACType | UnFollowACType | SetUsersACType
let initialState: usersReducerPropsType = {
    users: []
}

const usersReducer = (state: usersReducerPropsType = initialState, action: UsersACType): usersReducerPropsType => {

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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (usersId: number) => ({type: FOLLOW, usersId})
export const unfollowAC = (usersId: number) => ({type: UNFOLLOW, usersId})
export const setUsersAC = (users: Array<UsersArrayType>) => ({type: SET_USERS, users})


export default usersReducer;