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

    
    const handleLoginClick = async () => {
        const isAuth = await authUser(username, password);
        if(!isAuth) return;
        dispatch(login({userId: isAuth.userId, username, password, token: isAuth.token}));
        navigate('/inbox');
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
        handlePasswordChange,
        handleUsernameChange,
        handleLoginClick,
        handleRegisterClick,
    }
}

export default useSignIn;