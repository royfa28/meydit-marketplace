import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { useMyUserContext } from "../../context/UserContext";

export default function AccountDetailsPage() {

    const { user } = useMyUserContext();

    return (
        <><Container fluid>
            <Row className="account-details">
                {/* {console.log(accountDetails)} */}
                <h3>Personal Details</h3>
                <Row>
                    <label>First name: {user.first_name}</label>
                    <label>Last name: {user.last_name}</label>
                </Row>
            </Row>

            <Row className="account-details">
                <h3>Contact Details</h3>
                <Row className="justify-content-between mb-2">
                    <Col><label>Email address: {user.email}</label></Col>
                </Row>
                <Row className="justify-content-between  mb-2">
                    <Col><h5>Phone Number: {user.phone_number}</h5></Col>
                </Row>
            </Row>

            <Row className="account-details">
                <Row className="justify-content-between mb-2">
                    <Col><h3>Delivery Address</h3></Col>
                    <Col className="col-1"><Button>Add</Button></Col>
                </Row>

                <Row className="justify-content-between mb-2">
                    {/* <Col>{accountDetails.address}</Col> */}
                    <Col className="col-1">
                        <Button>Edit</Button>
                    </Col>
                </Row>
            </Row>
        </Container></>
    )
}