import { CreatedUser } from './types';
import api from '../api';

const useUserService = () => {

    const registerUser = async (username: string, password: string, publicKey: string): Promise<CreatedUser | false> => {
        try{
            const response = await api.post(`/users`, {username, password, publicKey});
            return response.data;
        }catch(err){
            console.error(err);
            return false;
        }
    }

    return {
        registerUser,
    }
}

export default useUserService;