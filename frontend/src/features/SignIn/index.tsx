import SinginForm from './components/SinginForm'
import styles from './styles.module.css';

const Login = () => {
  return (
    <div>
        <h2 className={styles.h2}>Sign In</h2>
        <SinginForm/>
    </div>
  )
}

export default Login