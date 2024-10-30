import axios from 'axios';
import { createContext, useState } from "react";
import { UserRegister } from "../@types/UserRegister";
import { UserLogin } from '../@types/UserLogin';

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
        baseURL: 'http://localhost:3000'
    });


    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         api.defaults.headers.Authorization = `Bearer ${token}`;
    //     }
    // }, [])

    // Register userRegister
    const handleRegister = async (userRegister: UserRegister) => {
        const response = await api.post('/register', userRegister);
        setUserRegister(response.data);
        setUserLogin(userRegister);
        handleLogin(userLogin);

    }

    // SignIn userRegister
    const handleLogin = async (userLogin: UserLogin) => {
        const response = await api.post('/login', userLogin);

        if (response.data.error) {
            return alert(response.data.error);
        } else {
            setUserLogin(response.data);
            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            localStorage.setItem('@Auth:userToken', JSON.stringify(response.data.token));
        }
    }

    // SignOut userRegister
    const handleLogout = () => {
        localStorage.clear();
        api.defaults.headers.Authorization = null;
    }

    return (
        <UserContext.Provider value={{ userRegister, userLogin, handleRegister, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;