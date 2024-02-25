import ChatHeader from "../ChatHeader";
import Message from "../Message";

const Chat: React.FC<IChat> = ({ messages }) => {
    const chatMessages = messages.map((message: Message) => {
        return (
            <Message key={message._id} {...message}/>
        );
    });
    
  return (
    <div>
        <ChatHeader status userId="John D"/>
        {chatMessages}
    </div>
    )
}

export default Chat;