import { createContext, useContext, useState } from "react";
import axios from 'axios';

const authCxt = createContext();
export const useMyAuthContext = () => useContext(authCxt);

export function AuthProvider(props) {
    const [modalShow, setModalShow] = useState(false);
    const [register, setRegister] = useState(false);
    const [error, setError] = useState(null);

    const setModal = () => {
        setModalShow(!modalShow);
        console.log(modalShow);
    };

    const registerStatus = () => {
        setRegister(!register);
        setError("");
    };

    // login authentication
    const loginAuth = async (email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:3333/login', { email, password });
            localStorage.setItem('token', response.data.token);
            console.log("login");
            setError(null);
            return true;
        } catch (err) {
            setError(err.response.data.message);
            return false;
        }
    };

    const addAccount = async (account) => {
        try {
            const response = await axios.post('/api/register', account);
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.log(error);
            setError('An error occurred while trying to add user');
        }
    };

    const value = {
        modalShow, register, error,
        registerStatus, setModal, loginAuth, addAccount
    };

    return (
        <authCxt.Provider value={value}>
            {props.children}
        </authCxt.Provider>);
}

export default AuthProvider;
