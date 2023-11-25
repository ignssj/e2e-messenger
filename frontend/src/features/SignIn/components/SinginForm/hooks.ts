import { useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { login } from "../../../../redux/slices/authSlice";
import useAuthService from "../../../../service/auth";

const useSignIn = () => {
    const dispatch = useAppDispatch();
    const { authUser } = useAuthService();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleUsernameChange = (input: string) => {
        setUsername(input);
    }

    const handlePasswordChange = (input: string) => {
        setPassword(input);
    }

    const handleLoginClick = async () => {
        const isAuth = await authUser(username, password);
        if(isAuth){
            dispatch(login({userId: isAuth.userId, username, password, token: isAuth.token}));
            return true;
        }
        return false;
    }

    return {
        username,
        password,
        handleUsernameChange,
        handlePasswordChange,
        handleLoginClick,
    }
}

export default useSignIn;