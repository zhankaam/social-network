import React from 'react';import s from './Dialogs.module.css';import DialogItem from "./DialogItem/DialogItem";import Message from "./Message/Message";import {DialogPageType} from "../../Redux/store";import {reduxForm, Field} from "redux-form";type StatePropsType = {    dialogsPage: DialogPageType    sendMessage: (newMessageBody: any) => void    updateNewMessageBody: (text: string) => void    isAuth: boolean};const Dialogs: React.FC<StatePropsType> = (props) => {    /*let state = props.dialogsPage;*/    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);    let messagesElements = props.dialogsPage.messages.map(m  => <Message message={m.message} key={m.id}/>);   // let newMessageBody = props.dialogsPage.newMessageBody;    /*let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {        let body = e.currentTarget.value;        props.updateNewMessageBody(body);    }*/    /*let onSendMessageClick = () => {        props.sendMessage();    }*/    const addNewMessage = (values: any) => {        props.sendMessage(values.newMessageBody);    }    return (        <div className={s.dialogs}>            <div className={s.dialogsItems}>                {dialogsElements}            </div>            <div className="messages">                <div>{messagesElements}</div>            </div>            <AddMessageFormRedux onSubmit={addNewMessage}/>        </div>    )}export const AddMessageForm = (props: any) => {    return (        <form onSubmit={props.handleSubmit}>            <div>                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>                {/*<textarea*/}                {/*onChange={onNewMessageChange}*/}                {/*value={newMessageBody}*/}                {/*placeholder='Enter your message'>*/}                {/*</textarea>*/}            </div>            <div>               {/* <button onClick={onSendMessageClick}>Send</button>*/}                <button >Send</button>            </div>        </form>    )}const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)export default Dialogs;