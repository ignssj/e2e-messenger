import User from "../User";
import styles from "./styles.module.css";

const ChatList: React.FC<IChatList> = ({ chatList, selectedId }) => {
    const chat = chatList.map((chat: {userId: string}) => {
        return (<User userId={chat.userId} key={chat.userId} isSelected={selectedId === chat.userId}/>);
    });

  return (
    <div className={styles.container}>
        {chat}
    </div>
  )
}

export default ChatList;