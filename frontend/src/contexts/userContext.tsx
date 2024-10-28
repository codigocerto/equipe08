import { createContext, useEffect, useState  } from "react";
import axios from 'axios';


type UserContextType = {
    authenticate: boolean;
    handleLogin: () => void;
    handleLogout: () => void;
}

const UserContext = createContext<UserContextType>({
    authenticate: false,
    handleLogin: () => {},
    handleLogout: () => {}
})

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
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

    async function handleLogin() {
        const {data: { token }} = await api.post('/login');

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticate(true);
    }

    function handleLogout() {
        setAuthenticate(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
    }

    return (
        <UserContext.Provider value={{ authenticate, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;