import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateRedux} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {ProfileType} from "../../types";

type MapStateToPropsType = {
    profile: ProfileType |  null
    status: string | null
    isAuth: boolean
    authorizedUserId: number | null
}
type MapDispatchToPropsType = {
    updateStatus: (status: string) => void
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<{ userId: string }>>  {
    refreshProfile(){
        let userId = Number(this.props.match.params.userId)
        if(!userId){
            userId = Number(this.props.authorizedUserId);
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

   componentDidMount() {
       this.refreshProfile()
   }
   componentDidUpdate(prevProps: Readonly<PropsType & RouteComponentProps<{ userId?: string }>>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId !== this.props.match.params.userId){
            this.refreshProfile()
        }
}

    render() {
           return (
               <Profile  {...this.props}
                         saveProfile={this.props.saveProfile}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        updateStatus={this.props.updateStatus}
                        status={this.props.status}
                        savePhoto={this.props.savePhoto}
               />
           )
   }
}

let mapStateToProps = ({profilePage,auth}: RootStateRedux): MapStateToPropsType => ({
    profile: profilePage.profile,
    status: profilePage.status,
    authorizedUserId: auth.userId,
    isAuth: auth.isAuth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto,saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
