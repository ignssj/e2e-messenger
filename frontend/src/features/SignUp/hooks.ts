import { useState } from "react";
import useUserService from "../../service/user";
import forge from 'node-forge';


const useSignup = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');    
    const { registerUser } = useUserService();

    const generateKeyPair = () => {
        const rsa = forge.pki.rsa;
        const keyPair = rsa.generateKeyPair({bits: 2048, e: 0x10001 });
        const publicKey = forge.pki.publicKeyToPem(keyPair.publicKey);
        const privateKey = forge.pki.encryptRsaPrivateKey(
            keyPair.privateKey,
            password
        );
        return {publicKey, privateKey};
    }
    
    const handleRegister = async () => {
        console.log('entrei parceiros');
        const {publicKey, privateKey} = generateKeyPair();
        console.log(publicKey);
        console.log(privateKey);
        const response = await registerUser(username, password, publicKey);
        return response;
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
        handleRegister,
    }
}

export default useSignup;