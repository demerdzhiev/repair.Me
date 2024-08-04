import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as authService from '../api/authApi';
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const showToast = (message) => {
        toast.error(message);
    };

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.username, values.email, values.password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
        } catch (error) {
            console.error(error);
            showToast(error.message);
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(values.username, values.email, values.password, values.confirmPassword);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
        } catch (error) {
            console.error(error);
            showToast(error.message);
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
