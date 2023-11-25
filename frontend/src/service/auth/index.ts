import { TAuth } from './types';
import api from '../api';

const useAuthService = () => {

    const authUser = async (username: string, password: string): Promise<TAuth | false> => {
        try{
            const response = await api.post(`/auth`, {username, password});
            return response.data;
        }catch(err){
            console.error(err);
            return false;
        }
    }

    return {
        authUser,
    }
}

export default useAuthService;