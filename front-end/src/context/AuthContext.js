import { createContext, useContext, useState } from "react";
import axios from 'axios';

const authCxt = createContext();
export const useMyAuthContext = () => useContext(authCxt);

export function AuthProvider(props) {
    const [modalShow, setModalShow] = useState(false);
    const [register, setRegister] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    const setModal = () => {
        setModalShow(!modalShow);
        console.log(modalShow);
    };

    const registerStatus = () => {
        setRegister(!register);
        setError("");
    };

    const loginStatus = () => {
        setLoggedIn(!loggedIn);
    };

    // login authentication
    const loginAuth = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/login', {
                email,
                password,
            });
            localStorage.setItem('token', response.data.token);
            console.log("login");
            setLoggedIn(true);
            setError(null);
            return true;
        } catch (err) {
            setError(err.response.data.message);
            setLoggedIn(false);
            return false;
        }
    };

    const value = {
        modalShow, register, loggedIn, error,
        loginStatus, registerStatus, setModal, loginAuth
    };

    return (
        <authCxt.Provider value={value}>
            {props.children}
        </authCxt.Provider>);
}

export default AuthProvider;
