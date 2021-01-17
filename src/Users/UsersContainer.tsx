import React, {ReactNode} from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    unfollowAC,
} from "../Redux/users-reducer";
import {RootStateRedux} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {UserType} from "../types";
import axios from "axios";
import {Users} from "./Users";
import preloader from "./../assets/images/Spin-1.4s-137px (1).svg"


class UsersContainer extends React.Component< MapDispatchToPropsType & MapStateToPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <img src={preloader}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      setCurrentPage={this.props.setCurrentPage}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      setUsers={this.props.setUsers}
        isFetching={this.props.isFetching}
        />
        </>
    }
}

export type MapStateToPropsType = {
    users: UserType[],
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
}
 export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:  (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}


let mapStateToProps = (state: RootStateRedux ):  MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

    let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
        return {
            follow: (usersId: number) => {
                dispatch(followAC(usersId))
            },
            unfollow: (usersId: number) => {
                dispatch(unfollowAC(usersId))
            },
            setUsers: (users: Array<UserType>) => {
                dispatch(setUsersAC(users))
            },
            setCurrentPage: (pageNumber: number) => {
                dispatch(setCurrentPageAC(pageNumber))
            },
            setTotalUsersCount: (totalCount: number) => {
                dispatch(setUsersTotalCountAC(totalCount))
            }
        }
    }


    export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>
    (mapStateToProps, mapDispatchToProps)(UsersContainer)
