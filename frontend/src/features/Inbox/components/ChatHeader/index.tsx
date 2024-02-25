import { AiOutlineUser } from "react-icons/ai";
import styles from './styles.module.css';

const ChatHeader: React.FC<IChatHeader> = ({ userId, status }) => {
  return (
    <div className={styles.container}>
        <div className={styles.rounded}>
            <AiOutlineUser size={30}/>
        </div>
        <div className={styles.userInfo}>
            <h3>{userId}</h3>
            <h4 className={styles.statusContainer}>{status ? 'online': 'offline'}</h4>
        </div>
    </div>
  )
}

export default ChatHeader;