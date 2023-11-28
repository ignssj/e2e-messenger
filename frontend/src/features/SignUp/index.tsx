import UserInfo from "../SignIn/components/UserInfo";
import useSignUp from './hooks';
import styles from './styles.module.css';

const SignUp = () => {
    const { handlePasswordChange, handleUsernameChange, handleRegister } = useSignUp();
  return (
    <div>
        <h1>Signup</h1>
        <UserInfo title='We are almost done' onPassChange={handlePasswordChange} onUsernameChange={handleUsernameChange}/>
        <button className={styles.loginButton} onClick={handleRegister}>Create now!</button>
    </div>
  )
}

export default SignUp;