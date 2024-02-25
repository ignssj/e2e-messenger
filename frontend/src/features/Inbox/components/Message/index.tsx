import React from 'react'
import moment from 'moment';
import styles from './style.module.css';

const Message: React.FC<ChatMessage> = ({ createdAt, payload, sender}) => {
    console.log(sender);
  return (
    <div className={styles.container}>
        <div className={styles.payloadContainer}>
            {payload}
        </div>
        <div className={styles.dateContainer}>
            {moment(createdAt).calendar()}
        </div>
    </div>
  )
}

export default Message;