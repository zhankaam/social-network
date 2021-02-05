import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateRedux} from "../Redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../Redux/profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
   /* setUserProfile: (data: any) => void*/
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
        userId = 2
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

    let mapStateToProps = (state: RootStateRedux)/*: MapStateToPropsType*/ => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status
    // isAuth: state.auth.isAuth
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
