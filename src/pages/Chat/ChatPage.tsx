import React, {useEffect, useState} from 'react';

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

export const Chat: React.FC = () => {

    const [wsChannel,setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        function createChannel() {
            setWsChannel(new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx\n"))
        }
        createChannel()

    },[])

    useEffect(() => {
        wsChannel?.addEventListener('close', () => {
            console.log("CLOSE WS")
        })
    },[wsChannel])

    return <div>
        <Messages wsChannel={wsChannel}/>
        <AddMessageForm wsChannel={wsChannel}/>
    </div>
}

export const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel?.addEventListener("message", (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [wsChannel])


    return <div style={{height: "400px", overflowY: "auto"}}>
        {messages.map((m: any, index) => <Message message={m} key={index}/>)}
    </div>
}

export const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {


    return <div>
        <img src={message.photo} style={{width: "30px"}}/><b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}

export const AddMessageForm: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [message, setMessage] = useState("")
    const [readyStatus,setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        wsChannel?.addEventListener('open',() => {
            setReadyStatus("ready")
        })
    },[wsChannel])

    const sendMessage = () => {
        if (!message) {
            return;
        }
        wsChannel?.send(message)
        setMessage("")
    }


    return <div>
        <div>
            <textarea value={message}
                onChange={(e) => setMessage(e.currentTarget.value)} ></textarea>
        </div>
        <div>
            <button disabled={wsChannel === null || readyStatus !== "ready"} onClick={sendMessage}>Send</button>
        </div>
    </div>
}


export default ChatPage
