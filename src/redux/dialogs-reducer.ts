import {InferActionsType} from "./redux-store";


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
        {id: 1, message: "Hello,How are you today? How may I help you? :)"},
        {id: 2, message: "Hey! I'm fine. Thanks for asking! "},
        {id: 3, message: "I have a question about your product. "},
        {id: 4, message: "Could you help me?"},
        {id: 5, message: " of course, what's the problem?"}
    ],
    newMessageBody: ""
}


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SEND_MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

// ACTION CREATORS
export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: "SN/DIALOGS/SEND_MESSAGE", newMessageBody} as const)
}

// TYPES
export type ActionsType = InferActionsType<typeof actions>
export type InitialStateType = typeof initialState
export default dialogsReducer;