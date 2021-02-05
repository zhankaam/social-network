import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers, setTotalUsersCount, toggleIsFetching,
    unfollowSuccess, toggleFollowingProgress, getUsers, unfollow,
} from "../Redux/users-reducer";
import {RootStateRedux} from "../Redux/redux-store";
import {UserType} from "../types";
import {Users} from "./Users";
import {Preloader} from "../assets/common/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFetching={this.props.isFetching}
                totalUsersCount={this.props.totalUsersCount}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                toggleIsFetching={this.props.toggleIsFetching}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                getUsers={this.props.getUsers}
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
    followingInProgress: Array<number>
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


let mapStateToProps = (state: RootStateRedux): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
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

let withRedirect = withAuthRedirect(UsersContainer)

 /*connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>
(mapStateToProps, {follow, unfollow: unfollowSuccess, setCurrentPage, toggleFollowingProgress, getUsers, setUsers, setTotalUsersCount, toggleIsFetching})(withRedirect)*/


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>
    (mapStateToProps, {follow, unfollow: unfollowSuccess, setCurrentPage, toggleFollowingProgress, getUsers, setUsers, setTotalUsersCount, toggleIsFetching})
) (UsersContainer)