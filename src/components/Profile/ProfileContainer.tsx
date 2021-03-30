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
    /* setUserProfile: (data: any) => void*/
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


// class ProfileContainer1 extends React.Component<AllPropsType> {
//     componentDidMount() {
//         let userId: number | undefined = this.props.match.params.userId ? Number(this.props.match.params.userId) : undefined
//         if (!userId) {
//             userId = this.props.authorizedUserId
//             if (!userId) {
//                 this.props.history.push("/login")
//             }
//         }
//         this.props.getUserProfile(2)
//         this.props.getStatus(2)
//     }
//
//     render() {
//         return (
//             <Profile {...this.props}
//                      profile={this.props.profile}
//                      status={this.props.status}
//                      updateStatus={this.props.updateStatus}
//             />
//         );
//     }
// }

let mapStateToProps = ({profilePage,auth}: RootStateRedux): MapStateToPropsType => ({
    profile: profilePage.profile,
    status: profilePage.status,
    authorizedUserId: auth.userId,
    isAuth: auth.isAuth
})


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto,saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

// export default withRouter(connect(mapStateToProps,{getUserProfile, getStatus, updateStatus})(ProfileContainer))

/*
 connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent)*/
// const connector = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>(mapStateToProps, {getUserProfile, getStatus, updateStatus})
// type PropsType = ConnectedProps<typeof connector>
// export default connector(withRouter(ProfileContainer))