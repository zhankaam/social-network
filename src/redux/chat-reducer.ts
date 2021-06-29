import {BaseThunkType, InferActionsType} from "./redux-store";
import {chatAPI, ChatMessageAPIType} from ".././api/chat-api";
import {Dispatch} from "redux";
import {FormAction} from "redux-form";
import { v1 } from "uuid";


export type StatusType = "pending" | "ready" | "error";
let initialState = {
    messages: [] as ChatMessageType[],
    status: "pending" as StatusType
};


export type ChatMessageType = ChatMessageAPIType & {id: string}

export const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SN/CHAT/MESSAGES_RECEIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m,id: v1()}))]
                    .filter((m,index,array) => index >= array.length - 100)
            };
        case "SN/CHAT/STATUS_CHANGED":

        default:
            return state;
    }
};

// THUNK CREATOR

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null;
const newMessagesHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages));
        };
    }

    return _newMessageHandler;
};


let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status));
        };
    }

    return _statusChangedHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe("messages-received", newMessagesHandlerCreator(dispatch));
    chatAPI.subscribe("status-changed", statusChangedHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe("messages-received", newMessagesHandlerCreator(dispatch));
    chatAPI.unsubscribe("status-changed", statusChangedHandlerCreator(dispatch));
    chatAPI.stop();
};

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
};

// ACTION CREATORS
export const actions = {
    messagesReceived: (messages: ChatMessageAPIType[]) => ({
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