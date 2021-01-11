import React, {ReactNode} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersArrayType, usersReducerPropsType,} from "../Redux/users-reducer";
import {RootStateRedux} from "../Redux/redux-store";
import {Dispatch} from "redux";

export type UsersPropsType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    state: UsersArrayType
}
type MapStateToPropsType = {
    users: Array<UsersArrayType>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersArrayType>) => void
}


let mapStateToProps = (state: RootStateRedux) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (usersId: number) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId: number) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users: Array<UsersArrayType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>(mapStateToProps, mapDispatchToProps)(Users)