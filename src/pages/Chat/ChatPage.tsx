import React, {useEffect, useState} from 'react';

const wsChannel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx\n")

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

    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}

export const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener("messages", (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])


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

export const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState("")

    const sendMessage = () => {
        if (!message) {
            return;
        }
        wsChannel.send(message)
        sendMessage("")
    }


    return <div>
        <div>
            <textarea value={message}
                onChange={(e) => setMessage(e.currentTarget.value)} ></textarea>
        </div>
        <div>
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>
}


export default ChatPage
