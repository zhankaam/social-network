import {Button} from "antd";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ChatMessageType} from "../../api/chat-api";
import {sendMessage, startMessagesListening, StatusType, stopMessagesListening} from "../../redux/chat-reducer";
import {RootStateRedux} from "../../redux/redux-store";
import s from "./ChatPage.module.css";


const ChatPage = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

export const Chat: React.FC = () => {
    //  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    //
    //   useEffect(() => {           //   let ws: WebSocket
    //       const closeHandler = () => {
    //           console.log("CLOSE WS")
    //           setTimeout(createChannel, 3000)
    //       }
    //
    //       function createChannel() {
    //
    //           ws?.removeEventListener('close', closeHandler)
    //           ws?.close()
    //           ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx\n")
    //           ws.addEventListener('close', closeHandler)
    //           setWsChannel(ws)
    //       }
    //      createChannel()
    //
    //
    //     return () => {
    //         ws.removeEventListener('close', closeHandler)
    //         ws.close()
    //     }
    //
    // }, [])
    //
    // useEffect(() => {
    //     wsChannel?.addEventListener('close', () => {
    //         console.log("CLOSE WS")
    //     })
    // }, [wsChannel])

    const status = useSelector<RootStateRedux>(state => state.chat.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        };
    }, []);

    return <div>
        {status === 'error'
            ? <div>Some error occured.Please refresh the page</div>
            : <>
                <Messages/>
                <AddMessageForm/>
            </>}
    </div>;
};

export const Messages: React.FC = () => {
    // const [messages, setMessages] = useState<ChatMessageType[]>([]);
    const messages = useSelector<RootStateRedux, ChatMessageType[]>(state => state.chat.messages);

    // useEffect(() => {
    //     let messageHandler = (e: MessageEvent) => {
    //         let newMessages = JSON.parse(e.data);
    //         setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    //     };
    //     wsChannel?.addEventListener("message", messageHandler);
    //
    //
    //     return () => {
    //         wsChannel?.removeEventListener("message", messageHandler);
    //     };
    // }, [wsChannel]);

    return <div style={{height: "400px", overflowY: "auto"}}>
        {messages.map((m, index) => <Message message={m} key={index}/>)}
    </div>;
};

export const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {


    return <div>
        <img src={message.photo} style={{width: "30px"}}/><b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>;
};

export const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState("");
    const status = useSelector<RootStateRedux, StatusType>(state => state.chat.status);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     let openHandler = () => {
    //         setReadyStatus("ready");
    //     };
    //     wsChannel?.addEventListener("open", openHandler);
    //
    //     return () => {
    //         wsChannel?.removeEventListener("open", openHandler);
    //     };
    // }, [wsChannel]);

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message));
        setMessage("");
    };


    return <div>
        <div>
            <textarea value={message}
                      onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
        </div>
        <div>
            <button
                className={s.btn} onClick={sendMessageHandler} disabled={status !== "ready"}>
                Send
            </button>
        </div>
    </div>;
};


export default ChatPage;
