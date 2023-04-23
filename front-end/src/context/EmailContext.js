import axios from "axios";
import { createContext, useContext, useState } from "react";

const emailCxt = createContext();
export const useMyEmailContext = () => useContext(emailCxt);

function EmailContext(props) {

    const sendEmail = async (emailData) => {
        try {
            const response = await axios.post('http://localhost:3333/sendEmail', emailData);
            // const data = await response.json();
            console.log("It work");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    const Values = {
        sendEmail
    }
    return (
        <emailCxt.Provider value={Values}>
            {props.children}
        </emailCxt.Provider>
    );
}

export default EmailContext