import {StatusType} from "../redux/chat-reducer";

const subscribers = {
    "messages-received": [] as MessagesReceivedSubscriberType[],
    "status-changed": [] as StatusChangedSubscriberType[]
};

let ws: WebSocket | null = null;
const closeHandler = () => {
    console.log("CLOSE WS");
    setTimeout(createChannel, 3000);
};

const cleanUp = () => {
    ws?.removeEventListener("close", closeHandler);
    ws?.removeEventListener("message", messageHandler);
};

let messageHandler = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    subscribers["messages-received"].forEach(s => s(newMessages));
};


function createChannel() {
    cleanUp();
    ws?.removeEventListener("close", closeHandler);
    ws?.close();

    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx\n");
    ws.addEventListener("close", closeHandler);
    ws.addEventListener("message", messageHandler);
}

export const chatAPI = {
    start() {
        createChannel();
    },
    subscribe(eventName: EventNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName].push(callback);
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
        };
    },
    unsubscribe(eventName: EventNamesType, callback: MessagesReceivedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
    },
    sendMessage(message: string) {
        ws?.send(message);
    },
    stop() {
        subscribers["messages-received"] = [];
        subscribers["status-changed"] = [];
        cleanUp();
        ws?.close();
    }
};


type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusChangedSubscriberType = (status: StatusType) => void


export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type EventNamesType = "messages-received" | "status-changed";
