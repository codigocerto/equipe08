import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { User } from "./interface";


type UserContextType = {
    user: User[];
    handleRegister: (user : User) => void;
    authenticate: boolean;
    handleLogin: () => void;
    handleLogout: () => void;
}

const UserContext = createContext<UserContextType>({
    user: [],
    handleRegister: () => { },
    authenticate: false,
    handleLogin: () => { },
    handleLogout: () => { }
})

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<User[]>([]);

    const api = axios.create({
        baseURL: 'http://localhost:3000'
    });

    const [authenticate, setAuthenticate] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticate(true);
        }
    }, [api.defaults.headers])

    // Register user
    async function handleRegister(user: User) {
        const { data } = await api.post('/register', user);
        setUser(data);
    }

    // SignIn user
    async function handleLogin() {
        const { data: { token } } = await api.post('/login');

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticate(true);
    }

    // SignOut user
    function handleLogout() {
        setAuthenticate(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
    }

    return (
        <UserContext.Provider value={{ user, authenticate, handleRegister, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;