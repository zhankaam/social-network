import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateRedux} from "../Redux/redux-store";
import {getUserProfile} from "../Redux/profile-reducer";


type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
   /* setUserProfile: (data: any) => void*/
    getUserProfile: (userId: number ) => void
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
}
    render() {

        if (!this.props.isAuth) return <Redirect to="/login"/>

    return (
        <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}

let mapStateToProps = (state: RootStateRedux)/*: MapStateToPropsType*/ => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
  let WithUrlDataContainerComponent  = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent)