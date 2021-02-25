import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateRedux} from "../Redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../Redux/profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../types";


type MapStateToPropsType = {
    profile: ProfileType | null
    status: string | null
    isAuth: boolean
    authorizedUserId: number | null
}
type MapDispatchToPropsType = {
    /* setUserProfile: (data: any) => void*/
    updateStatus: (status: string) => void
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = {
    userId: string | undefined
}
type AllPropsType = RouteComponentProps<PathParamsType> & PropsType

const ProfileContainer = (props: AllPropsType) => {
    let userId = props.match.params.userId
    useEffect(() => {

        if (!userId) {
            userId = String(props.authorizedUserId)
        }
        if (!userId) {
            props.history.push('/login')
        }
        props.getUserProfile(+userId)
    })

    if (props.profile) {
        props.getStatus(+props.profile.userId)
    }

    return (
        <Profile profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
    )
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

let mapStateToProps = ( state: RootStateRedux): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
//     withRouter,
//     // withAuthRedirect
// )(ProfileContainer)

export default withRouter(connect(mapStateToProps,{getUserProfile, getStatus, updateStatus})(ProfileContainer))

/*
 connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent)*/
