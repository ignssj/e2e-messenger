import styles from "./styles.module.css";
import ChatList from "./components/ChatList";
import MyInfo from "./components/MyInfo";
import NewChat from "./components/NewChat";
import Chat from "./components/Chat";
import ChatHeader from "./components/ChatHeader";

const Inbox = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            <MyInfo userId='Your Key'/>
            <div className={styles.chatList}>
                <ChatList chatList={[{userId: 'John D'}, {userId: 'Jason L'}, {userId: 'Linda B'}]} selectedId={'John D'}/>
                <NewChat onClick={(() => console.log('new chat clicked'))}/>
            </div>
        </div>
        <div className={styles.rightContainer}>
            <ChatHeader status userId="John D"/>
            <Chat messages={[{_id: 'asdnasd2', createdAt: new Date().toISOString(), payload: 'hey thereeeeeeeeeee', receiver: 'teuPrimo', sender: 'meuPrimo'}]}/>
        </div>
    </div>
  )
}

export default Inbox;