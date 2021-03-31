import React from 'react';import {actions, InitialStateType} from "../../../redux/dialogs-reducer";import Dialogs from "./Dialogs";import {connect} from "react-redux";import {RootStateRedux} from "../../../redux/redux-store";import {compose, Dispatch} from "redux";import {withAuthRedirect} from "../../../hoc/withAuthRedirect";type MapStateToPropsType = {    dialogsPage: InitialStateType}type MapDispatchToPropsType = {    sendMessage: (newMessageBody: string) => void}   let mapStateToProps = (state: RootStateRedux): MapStateToPropsType => ({dialogsPage: state.dialogsPage })   let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => (       {sendMessage: (newMessageBody:string) => {       dispatch(actions.sendMessageCreator(newMessageBody)) }   })export default compose<React.ComponentType>(    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateRedux>(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)