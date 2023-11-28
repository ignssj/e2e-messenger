import './styles.css';

interface IUserInfo {
    title: string;
    onUsernameChange: (username: string) => void;
    onPassChange: (pass: string) => void;
}

const UserInfo: React.FC<IUserInfo> = ({title, onUsernameChange, onPassChange}) => {
  return (
      <div>
      <h2 className="title-container">{title}</h2>
      <div className="form-group">
        <input type="email" placeholder="Your email" className="form-input" onChange={(e) => onUsernameChange(e.target.value)}/>
      </div>
      <div className="form-group">
        <input type="password" placeholder="Your password" className="form-input" onChange={(e) => onPassChange(e.target.value)}/>
      </div>
    </div>
  )
}

export default UserInfo;