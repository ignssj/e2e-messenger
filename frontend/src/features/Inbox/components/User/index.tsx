import { AiOutlineUser } from "react-icons/ai";
import React from 'react'
import styles from './styles.module.css';

const User: React.FC<IUser> = ({ userId, isSelected}) => {

  return (
    <div className={ isSelected ? styles.selected : styles.notSelected}>
        <div className={styles.rounded}>
        <AiOutlineUser size={30}/>
        </div>
        <h3 className={styles.textContainer}>{userId}</h3>
    </div>
  )
}

export default User;