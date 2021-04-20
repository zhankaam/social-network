import React from 'react';

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
    let messages =  [1,2,3,4]

    return <div>
        {messages.map((m:any) => <Message/>)}
    </div>
}

export const Message: React.FC = () => {
     const message = {
         url: "https://via.placeholder.com/30",
         author: "Zhanat",
         text: "Hello World!"
     }

    return <div>
        <img src={message.url}/><b>{message.author}</b>
        <br/>
        {message.text}
        <hr/>
    </div>
}

export const AddMessageForm: React.FC = () => {
    return <div>
        <div>
            <textarea ></textarea>
        </div>
      <div>
          <button>Send</button>
      </div>
    </div>
}


export default ChatPage
