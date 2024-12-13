import axios from 'axios';
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserLogin } from '../@types/UserLogin';
import { UserRegister } from "../@types/UserRegister";

type UserContextType = {
    handleRegister: (userRegister: UserRegister) => void;
    userRegister: UserRegister;
    userLogin: UserLogin;
    handleLogin: (userLogin: UserLogin) => void;
    handleLogout: () => void;
}

const UserContext = createContext<UserContextType>({
    handleRegister: () => { },
    userRegister: {} as UserRegister,
    userLogin: {} as UserLogin,
    handleLogin: () => { },
    handleLogout: () => { }
})

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [userRegister, setUserRegister] = useState({} as UserRegister);
    const [userLogin, setUserLogin] = useState({} as UserRegister);

    const api = axios.create({
        baseURL: 'https://codigocerto-lmfe.onrender.com/'
    });

    // Register userRegister
    const handleRegister = async (userRegister: UserRegister) => {
        const response = await api.post('/register', userRegister);
        try {
            await setUserRegister(response.data);
            await setUserLogin(userRegister);
            toast.success("Usuario cadastrado com sucesso");
            handleLogin({ email: userRegister.email, password: userRegister.password });
            setInterval(() => {
                window.location.href = "/";
            }, 2000);
        } catch (error) {
            toast.error("Email já cadastrado");
        }
    }

    // SignIn userRegister
    const handleLogin = async (userLogin: UserLogin) => {
        try {
            const response = await api.post('/login', userLogin);
            setUserLogin(response.data);
            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            toast.success("Login efetuado com sucesso");
            setInterval(() => {
                window.location.href = "/";
                localStorage.setItem('@Auth:userToken', JSON.stringify(response.data.token));
            }, 2000);
        } catch (error) {
            toast.error("Email ou senha inválido");
        }
    }

    // SignOut userRegister
    const handleLogout = () => {
        localStorage.clear();
        api.defaults.headers.Authorization = null;
        window.location.href = "/";
    }

    return (
        <UserContext.Provider value={{ userRegister, userLogin, handleRegister, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;