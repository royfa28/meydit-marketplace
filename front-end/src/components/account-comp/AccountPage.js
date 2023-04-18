/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Tab, Tabs, Button, Container } from 'react-bootstrap';
import { useMyUserContext } from "../../context/UserContext";
import JWTDecode from "jwt-decode";

import AccDetailsPage from "./AccountDetailsPage";
// import AccOrderHistoryPage from './AccOrderHistoryPage';
import ProductListedPage from './ProductListedPage';

export default function AccountPage() {

    const navigate = useNavigate();
    const decodedToken = JWTDecode(localStorage.getItem("token"));
    const { viewAccount } = useMyUserContext();

    // When logout was selected, remove token from local storage and go back to windows
    function logout() {
        console.log("Logout");
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    }

    useEffect(() => {
        viewAccount(decodedToken.email);
        const interval = setInterval(() => {
            viewAccount(decodedToken.email);
        }, 1000 * 3600);

        return () => clearInterval(interval);
    }, []);

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
                        <ProductListedPage />
                        <Link to="/AddJob"><Button >List product</Button></Link>
                    </Tab>

                    <Tab eventKey="Logout" title="Logout">
                        <Button onClick={logout} variant="danger">  LOGOUT </Button>
                    </Tab>
                </Tabs>
            </Container>
        </>

    );
}
