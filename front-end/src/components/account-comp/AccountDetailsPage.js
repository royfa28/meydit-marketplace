import React, { useRef, useEffect } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { useMyUserContext } from "../../context/UserContext";
import JWTDecode from "jwt-decode";

export default function AccountDetailsPage() {

    // Import JWTDecode to decode JWT string and decode it
    const decodedToken = JWTDecode(localStorage.getItem("token"));
    const { user, viewAccount } = useMyUserContext();

    // Load the view account to get account details for the rest of the page
    useEffect(() => {
        viewAccount(decodedToken.email);
        const interval = setInterval(() => {
            viewAccount(decodedToken.email);
        }, 1000 * 3600);

        return () => clearInterval(interval);
    }, []);

    // Function to get the value of either of the input
    const fullNameRef = useRef(null);
    const phoneNumberRef = useRef(null);

    // Function to update full name
    function saveFullName() {
        // const newName = fullNameRef.current.value
        // // console.log("Full name is: ", newName);
        // updateAccount({ ...accountDetails, fullName: newName });
        // fullNameRef.current.value = "";
    }

    // Function to update phone number
    function savePhoneNumber() {
        // const newPhone = phoneNumberRef.current.value
        // // console.log("Phone number is: ", newPhone);
        // updateAccount({ ...accountDetails, phoneNumber: newPhone });
        // phoneNumberRef.current.value = "";
    }

    return (
        <><Container fluid>
            <Row className="account-details">
                {/* {console.log(accountDetails)} */}
                <h3>Personal Details</h3>
                <Row className="justify-content-between mb-2">
                    {/* <Col><h5>{accountDetails.fullName}</h5></Col> */}
                    <Col className="col-1">

                        {/* Check if the state is True or False and change content depending on what is chosen */}
                        {/* {(!changePersonalDetails) ?
                            <Button onClick={() => setChangePersonalDetails(true)}>Edit</Button>
                            : null} */}
                    </Col>
                </Row>
                {/* {(!changePersonalDetails) ? null : */}
                <>
                    <Row>
                        <label>First name: {user.first_name}</label>
                        <input
                            ref={fullNameRef} type="text" id="fullName" name="fullName"
                        ></input>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="col-2"><Button onClick={() => saveFullName()}>Save</Button></Col>
                        <Col className="col-2">
                            {/* <Button onClick={() => setChangePersonalDetails(false)}>Cancel</Button> */}
                        </Col>
                    </Row>
                </>
                {/* } */}
            </Row>

            <Row className="account-details">
                <h3>Contact Details</h3>
                <Row className="justify-content-between mb-2">
                    {/* <Col><h5>{accountDetails.emailAddress}</h5></Col> */}
                </Row>
                <Row className="justify-content-between  mb-2">
                    {/* <Col><h5>{accountDetails.phoneNumber}</h5></Col> */}
                    <Col className="col-1">

                        {/* Check if the state is True or False and change content depending on what is chosen */}
                        {/* {(!changeContactDetails) ?
                            <Button onClick={() => setChangeContactDetails(true)}>Edit</Button> : null} */}
                    </Col>
                </Row>

                {/* {(!changeContactDetails) ? null : */}
                <>
                    <Row>
                        <label>New Phone Number</label>
                        <input
                            ref={phoneNumberRef} type="text" id="phoneNumber" name="phoneNumber"
                        ></input>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="col-2"><Button onClick={() => savePhoneNumber()}>Save</Button></Col>
                        <Col className="col-2">
                            {/* <Button onClick={() => setChangeContactDetails(false)}>Cancel</Button> */}
                        </Col>
                    </Row>
                </>
                {/* } */}
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