const SEND_MESSAGE = "SEND_MESSAGE";

export type DialogsPropsType = {
    id: number
    name: string
}
export type MessagesPropsType = {
    id: number
    message: string
}
export type InitialStateType = {
    dialogs: Array<DialogsPropsType>
    messages:  Array<MessagesPropsType>
    newMessageBody: string
}
let InitialState = {
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
    newMessageBody: string
}
export type updateMessageAC = {
    type: "UPDATE_NEW_MESSAGE_BODY"
    body: string
}
export type actionsMessageType = sendMessageAC | updateMessageAC

const dialogsReducer = (state = InitialState, action: actionsMessageType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody:string): sendMessageAC => ({type: SEND_MESSAGE, newMessageBody} as const)


export default dialogsReducer;