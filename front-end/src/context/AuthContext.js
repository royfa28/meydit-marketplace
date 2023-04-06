import { createContext, useContext, useState } from "react";

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

    const value = {
        modalShow, register, loggedIn, error,
        loginStatus, registerStatus, setModal
    };

    return (
        <authCxt.Provider value={value}>
            {props.children}
        </authCxt.Provider>);
}

export default AuthProvider;
