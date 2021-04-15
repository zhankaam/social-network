import React from "react";
import {connect} from "react-redux";
import {
    FilterType,
    follow, getUsers, unfollow,
} from "../../redux/users/users-reducer";
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
    getTotalUsersCount, getUsersFilter,
    getUsersState
} from "../../redux/users/users-selectors";
import {actions} from "../../redux/users/users-reducer";


class UsersContainer extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {

    componentDidMount() {
        const {currentPage,pageSize, filter} = this.props
        this.props.getUsers(currentPage, pageSize,filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNumber, pageSize,filter)
    }

     onFilterChanged = (filter: FilterType) => {
     const {pageSize} = this.props

     this.props.getUsers(1,pageSize,filter)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                onPageChanged={this.onPageChanged}
                onFilterChanged={this.onFilterChanged}
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
    filter: FilterType
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number,filter: FilterType) => void
}

const mapStateToProps = (state: RootStateRedux):MapStateToPropsType => {
    return {
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
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