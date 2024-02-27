import Message from "../Message";
import styles from './styles.module.css';

const Chat: React.FC<IChat> = ({ messages }) => {
    const chatMessages = messages.map((message: Message) => {
        return (
            <Message key={message._id} {...message} sentByMe={true}/>
        );
    });
    
  return (
    <div className={ styles.container }>
        {chatMessages}
    </div>
    )
}

export default Chat;