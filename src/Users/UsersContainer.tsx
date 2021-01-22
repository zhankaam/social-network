import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers, setTotalUsersCount, toggleIsFetching,
    unfollow, toggleFollowingProgress,
} from "../Redux/users-reducer";
import {RootStateRedux} from "../Redux/redux-store";
import {UserType} from "../types";
import {Users} from "./Users";
import {Preloader} from "../assets/common/Preloader";
import { usersAPI} from "../api/api";


class UsersContainer extends React.Component< MapDispatchToPropsType & MapStateToPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(true)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
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
                      toggleIsFetching={this.props.toggleIsFetching}
                   followingInProgress={this.props.followingInProgress}
                     toggleFollowingProgress={this.props.toggleFollowingProgress}/>
        </>
    }
}

export type MapStateToPropsType = {
    users: UserType[],
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
}
 export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:  (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
     toggleIsFetching: (isFetching: boolean) => void
     toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}


let mapStateToProps = (state: RootStateRedux ):  MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

   /* let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
            setUsersTotalCount: (totalCount: number) => {
                dispatch(setUsersTotalCountAC(totalCount))
            },
            toggleIsFetching: (isFetching: boolean) => {
                dispatch(toggleIsFetchingAC(isFetching))
            }
        }
    }*/


    export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>
    (mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
            setTotalUsersCount,toggleIsFetching, toggleFollowingProgress})(UsersContainer)
