import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers, unfollow,
} from "../../redux/users-reducer";
import {RootStateRedux} from "../../redux/redux-store";
import {UserType} from "../../types";
import {Users} from "./Users";
import {Preloader} from "../../assets/common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersState
} from "../../redux/users-selectors";
import {actions} from "../../redux/users-reducer";


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

const mapStateToProps = (state: RootStateRedux):MapStateToPropsType => {
    return {
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>
    (mapStateToProps,{
        follow,
        unfollow,
        getUsers,
        setUsers:actions.setUsers,
        setCurrentPage: actions.setCurrentPage,
        setTotalUsersCount: actions.setTotalUsersCount,
        toggleIsFetching: actions.toggleIsFetching,
        toggleFollowingProgress:actions.toggleFollowingProgress
    } )
) (UsersContainer)