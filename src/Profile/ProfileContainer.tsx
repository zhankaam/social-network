import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateRedux} from "../Redux/redux-store";
import {getStatus, getUserProfile, ProfileStateType, updateStatus} from "../Redux/profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../types";


type MapStateToPropsType ={
    profile: ProfileType | null
    status: string
    isAuth: boolean
    userId: number
    authorizedUserId: number
}
type MapDispatchToPropsType = {
   /* setUserProfile: (data: any) => void*/
    updateStatus: () => void
    getUserProfile: (userId: number ) => void
    getStatus: (userId: number) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = {
    userId: string | undefined
}
type AllPropsType = RouteComponentProps<PathParamsType> & PropsType


    class ProfileContainer extends React.Component<AllPropsType> {
    componentDidMount() {
    let userId: number | undefined = this.props.match.params.userId ? Number(this.props.match.params.userId): undefined
        if(!userId){
            userId = this.props.authorizedUserId
        }
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
    }
    render() {

    return (
        <Profile {...this.props}
                 profile={this.props.profile}
                 status={this.props.status}
                 updateStatus={this.props.updateStatus}
        />
    );
  }
}

    let mapStateToProps = ({profilePage,auth}: RootStateRedux)/*: MapStateToPropsType*/ => ({
        profile: profilePage.profile,
        status: profilePage.status,
        authorizedUserId: auth.userId,
        isAuth: auth.isAuth
    })


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let WithUrlDataContainerComponent  = withRouter(AuthRedirectComponent)


export default compose<React.ComponentType>(
        connect(mapStateToProps, {getUserProfile, getStatus,updateStatus}),
        withRouter,
       // withAuthRedirect
    ) (ProfileContainer)



/*
 connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent)*/
