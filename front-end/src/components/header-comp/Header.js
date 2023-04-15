import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useMyAuthContext } from "../../context/AuthContext";
import LoginModal from "../login-comp/Login";

export default function Header() {

    const { setModal, modalShow } = useMyAuthContext();

    function changeModal() {
        setModal();
    }

    return (
        <>
            <header>
                <Container fluid="lg">
                    <Row className="justify-content-between header-row">
                        {/* <!-- Logo --> */}
                        <Col className="col-2">
                            <h3><Link to="/">Marketplace</Link></h3>
                        </Col>

                        {/* <!-- Where the search bar and function --> */}
                        <Col className="col-5">
                            <Form className="d-flex header-bar">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            </Form>
                        </Col>

                        {/* <!-- If not logged in, will show register/login if not will show account --> */}
                        <Col className="col-1 order-last ">
                            {/* If token for account is there, show account otherwise Login */}
                            {localStorage.getItem("token") ?
                                <Link to="/Accountpage">
                                    <Button variant="primary">Account</Button>
                                </Link>
                                :
                                <Button variant="primary" onClick={changeModal}>Login</Button>}

                            <LoginModal show={modalShow} onHide={changeModal} />
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}
