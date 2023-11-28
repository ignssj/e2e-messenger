import UserInfo from "./components/UserInfo";
import styles from "./styles.module.css";
import useSignIn from "./hooks";

const Login = () => {
    const { handleUsernameChange, handlePasswordChange,handleRegisterClick } = useSignIn();
    return (
        <div>
            <h2 className={styles.h2}>Welcome to E2EM!</h2>
            <div className={styles.userForm}>
                <UserInfo title='Log in into your account' onUsernameChange={handleUsernameChange} onPassChange={handlePasswordChange}/>
                <div className={styles.registerLink}>
                    <span>Don't have an account yet?</span>
                    <button onClick={handleRegisterClick}>Register now</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
