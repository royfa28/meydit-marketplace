import Axios from "../axios";
import { createContext, useContext, useState } from "react";

const userCxt = createContext();
export const useMyUserContext = () => useContext(userCxt);

function AccountContext(props) {
    const [accountDetails, setAccountDetails] = useState([]);

    const viewAccount = (id) => {
        Axios({
            url: `Account_Page/${id}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            // Set the accountDetails with the response taken from the GET
            setAccountDetails(response.data);
            // console.log(response.data);
        }).catch((error) => {
            console.log("Internal server error");
        });
    }

    const Values = {
        viewAccount
    }
    return (
        <userCxt.Provider value={Values}>
            {props.children}
        </userCxt.Provider>
    );
}

export default AccountContext