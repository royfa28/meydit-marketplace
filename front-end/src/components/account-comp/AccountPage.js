/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Tab, Tabs, Button, Container } from 'react-bootstrap';
import JWTDecode from "jwt-decode";

import AccDetailsPage from "./AccountDetailsPage";
// import AccOrderHistoryPage from './AccOrderHistoryPage';
// import ProductListedPage from './ProductListedPage';

// import { useMyAccountContext } from "../../context/accountContext";

export default function AccountPage() {

    const navigate = useNavigate();

    // When logout was selected, remove token from local storage and go back to windows
    function logout() {
        console.log("Logout");
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    }
    // Import JWTDecode to decode JWT string and decode it
    const decodedToken = JWTDecode(localStorage.getItem("token"));
    // const { viewAccount } = useMyAccountContext();

    // Load the view account to get account details for the rest of the page
    // useEffect(() => {
    //     viewAccount(decodedToken._id);
    //     const interval = setInterval(() => {
    //         viewAccount(decodedToken._id);
    //     }, 1000 * 3600);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
            <Container fluid="lg">
                <Tabs defaultActiveKey="Account Details" id="justify-tab-example" className="mb-3 mt-3" justify="true">
                    <Tab eventKey="Account Details" title="Account Details">
                        <AccDetailsPage />
                    </Tab>

                    <Tab eventKey="Order History" title="Order History">
                        {/* <AccOrderHistoryPage /> */}
                    </Tab>
                    <Tab eventKey="Products Listed" title="Products Listed">
                        <Link to="/List-Product"><Button >List product</Button></Link>
                        {/* <ProductListedPage /> */}
                    </Tab>

                    <Tab eventKey="Logout" title="Logout">
                        <Button onClick={logout} variant="danger">  LOGOUT </Button>
                    </Tab>
                </Tabs>
            </Container>
        </>

    );
}
