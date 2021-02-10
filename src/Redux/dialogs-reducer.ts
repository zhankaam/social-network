//const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


export type DialogsPropsType = {
    id: number
    name: string
}
export type MessagesPropsType = {
    id: number
    message: string
}

export type DialogsStateType = {
    dialogs: Array<DialogsPropsType>
    messages:  Array<MessagesPropsType>
    newMessageBody: string
}
let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Viktor"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Andrew"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Valera"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your It-kamasutra? "},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ],
    newMessageBody: ""
}

export type sendMessageAC = {
    type: "SEND_MESSAGE"
    newMessageBody: any
}
export type updateMessageAC = {
    type: "UPDATE_NEW_MESSAGE_BODY"
    body: string
}

export type actionsMessageType = sendMessageAC | updateMessageAC
const dialogsReducer = (state: DialogsStateType = initialState, action: actionsMessageType): DialogsStateType => {

    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
               // newMessageBody: "",
                messages: [...state.messages,
                    {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody:any) => ({type: SEND_MESSAGE, newMessageBody} as const)
/*
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)
*/

export default dialogsReducer;