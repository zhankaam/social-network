import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    ChatMessageType,
    sendMessage,
    startMessagesListening,
    StatusType,
    stopMessagesListening
} from "../../redux/chat-reducer";
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

    const status = useSelector<RootStateRedux>(state => state.chat.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        };
    }, []);

    return <div>
        {status === 'error' && <div>alert("error occured.Please refresh the page")</div>}
        <>
            <Messages/>
            <AddMessageForm/>
        </>
    </div>;
};

export const Messages: React.FC = () => {

    const messages = useSelector<RootStateRedux, ChatMessageType[]>(state => state.chat.messages);
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(true)


    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [messages])

    const scrollHandler = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = event.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    return <div style={{height: "400px", overflowY: "auto"}} onScroll={scrollHandler}>
        {messages.map((m, index) => <Message message={m} key={m.id}/>)}
        <div ref={messagesAnchorRef}></div>
    </div>;
};

export const Message: React.FC<{ message: ChatMessageType }> = React.memo(({message}) => {

    return <div>
        <img src={message.photo} style={{width: "30px"}}/><b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>;
})

export const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState("");
    const status = useSelector<RootStateRedux, StatusType>(state => state.chat.status);
    const dispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message));
        setMessage("");
    };


    return <div>
        <div>
            <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
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
