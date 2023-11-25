import './styles.css';
import { CgLogIn } from "react-icons/cg";
import useSignIn from './hooks';

const SingupForm = () => {
    const { handleUsernameChange, handlePasswordChange, handleLoginClick } = useSignIn();
  return (
      <div className="signup-form-container">
      <h2 className="title-container">Log in to your account</h2>
      <div className="form-group">
        <input type="email" placeholder="Your email" className="form-input" onChange={(e) => handleUsernameChange(e.target.value)}/>
      </div>
      <div className="form-group">
        <input type="password" placeholder="Your password" className="form-input" onChange={(e) => handlePasswordChange(e.target.value)}/>
      </div>
      <button className="login-button" onClick={handleLoginClick}>
        Login <CgLogIn />
      </button>
      <div className="register-link">
        <span>Don't have an account yet?</span>
        <button>Register now</button>
      </div>
    </div>
  )
}

export default SingupForm;