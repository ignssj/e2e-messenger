import React from 'react'
import moment from 'moment';
import styles from './style.module.css';

const Message: React.FC<ChatMessage> = ({ createdAt, payload, sentByMe }) => {
  return (
    <div className={ sentByMe ? styles.sent : styles.received }>
        <div className={ styles.messageContainer }>
            <div className={styles.payloadContainer}>
                {payload}
            </div>
            <div className={styles.dateContainer}>
                {moment(createdAt).calendar()}
            </div>
        </div>
    </div>
  )
}

export default Message;