import {getAuthUserData} from "./auth-reducer";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {chatAPI, ChatMessageType} from ".././api/chat-api";
import {Dispatch} from "redux";
import {FormAction} from "redux-form";

export type StatusType = "pending" | "ready";
let initialState = {
    messages: [] as ChatMessageType[],
    status: "pending" as StatusType
};

export const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SN/CHAT/MESSAGES_RECEIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            };
        case "SN/CHAT/STATUS_CHANGED":

        default:
            return state;
    }
};

// THUNK CREATOR

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;

const newMessagesHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages));
        };
    }

    return _newMessageHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe("messages-received", newMessagesHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe("messages-received", newMessagesHandlerCreator(dispatch));
    chatAPI.stop();
};

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
};

// ACTION CREATORS
export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: "SN/CHAT/MESSAGES_RECEIVED",
        payload: {messages}
    } as const),
    statusChanged: (status: StatusType) => ({
        type: "SN/CHAT/STATUS_CHANGED",
        payload: {status}
    } as const)
};

// TYPES
export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>