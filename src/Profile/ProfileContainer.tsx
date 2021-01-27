import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter } from 'react-router-dom';
import {RootStateRedux} from "../Redux/redux-store";
import { usersAPI} from "../api/api";
import {setUserProfile} from "../Redux/profile-reducer";


type MapStateToPropsType = {
    profile: any
}

type MapDispatchToPropsType = {
    setUserProfile: (data: any) => void
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
    usersAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response.data)
        })
}
    render() {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}

let mapStateToProps = (state: RootStateRedux): MapStateToPropsType => ({
    profile: state.profilePage.profile
})
  let WithUrlDataContainerComponent  = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)