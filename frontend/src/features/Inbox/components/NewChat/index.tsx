import styles from './styles.module.css';

const NewChat: React.FC<INewChat> = ({ onClick }) => {
  return (
    <div className={styles.container}>
        <button className={styles.button} onClick={onClick}>New Chat</button>
    </div>
  )
}

export default NewChat;