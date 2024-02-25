import { AiOutlineUser } from "react-icons/ai";
import React from 'react'
import styles from './styles.module.css';

const User: React.FC<IMyInfo> = ({ userId }) => {

  return (
    <div className={styles.borderContainer}>
        <div className={styles.rounded}>
        <AiOutlineUser size={30}/>
        </div>
        <h3 className={styles.textContainer}>{userId}</h3>
    </div>
  )
}

export default User;