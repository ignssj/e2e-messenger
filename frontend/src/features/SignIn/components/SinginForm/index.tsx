import './styles.css';
import { CgLogIn } from "react-icons/cg";

const SingupForm = () => {
  return (
      <div className="signup-form-container">
      <h2 className="title-container">Log in to your account</h2>
      <div className="form-group">
        <input type="email" placeholder="Your email" className="form-input" />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Your password" className="form-input" />
      </div>
      <button className="login-button">
        Login <CgLogIn />
      </button>
      <div className="register-link">
        <text>Don't have an account yet?</text>
        <button>Register now</button>
      </div>
    </div>
  )
}

export default SingupForm;