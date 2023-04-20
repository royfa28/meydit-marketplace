import axios from "axios";
import { createContext, useContext, useState } from "react";

const userCxt = createContext();
export const useMyUserContext = () => useContext(userCxt);

function AccountContext(props) {
    const [user, setUser] = useState([]);

    const viewAccount = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3333/user/${id}`);
            setUser(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const Values = {
        user,
        viewAccount
    }
    return (
        <userCxt.Provider value={Values}>
            {props.children}
        </userCxt.Provider>
    );
}

export default AccountContext