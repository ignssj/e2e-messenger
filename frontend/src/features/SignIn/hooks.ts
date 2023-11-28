import { login } from "../../redux/slices/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import useAuthService from "../../service/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useSignIn = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { authUser } = useAuthService();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    
    const handleLoginClick = async (username: string, password: string) => {
        const isAuth = await authUser(username, password);
        if(isAuth){
            dispatch(login({userId: isAuth.userId, username, password, token: isAuth.token}));
            return true;
        }
        return false;
    }
    
    const handleRegisterClick = () => {
        navigate('/signup');
    }
    
    const handleUsernameChange = (input: string) => {
        setUsername(input);
    }
    
    const handlePasswordChange = (input: string) => {
        setPassword(input);
    }

    return {
        username,
        password,
        handlePasswordChange,
        handleUsernameChange,
        handleLoginClick,
        handleRegisterClick,
    }
}

export default useSignIn;