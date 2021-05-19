let subscribers = [] as SubscriberType[];

let ws: WebSocket | null = null;
const closeHandler = () => {
    console.log("CLOSE WS");
    setTimeout(createChannel, 3000);
};

let messageHandler = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages));
};

function createChannel() {

    ws?.removeEventListener("close", closeHandler);
    ws?.close();

    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx\n");
    ws.addEventListener("close", closeHandler);
    ws.addEventListener("message", messageHandler);
}

export const chatAPI = {
    start(){
      createChannel()
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback);
        return () => {
            subscribers = subscribers.filter(s => s !== callback);
        };
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback);
    },
    sendMessage(message: string){
        ws?.send(message)
    },
    stop(){
        subscribers = []
        ws?.removeEventListener("close", closeHandler);
        ws?.removeEventListener("message", messageHandler);
        ws?.close()
    }
};


type SubscriberType = (messages: ChatMessageType[]) => void
export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}