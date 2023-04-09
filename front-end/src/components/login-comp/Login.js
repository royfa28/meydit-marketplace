/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Modal, Form, Button, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMyAuthContext } from '../../context/AuthContext';

// Login or register modal
export default function LoginModal(props) {

    const [userType, setUserType] = useState('consumer');
    const [isRegister, setIsRegister] = useState(true);

    const { register, registerStatus, loginAuth, addAccount, error } = useMyAuthContext();

    const handleAuth = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Check if the user want to register or login
        if (!isRegister) {
            const userAccount = {
                emailAddress: formData.get("email"),
                password: formData.get("password"),
            }
            console.log(userAccount);
            // loginAuth(userAccount);
        } else {
            console.log("Register");
            const userAccount = {
                firstName: formData.get("firstName"),
                lastName: formData.get("lastName"),
                emailAddress: formData.get("email"),
                password: formData.get("password"),
                phoneNumber: formData.get("phone"),
                userType: userType
            }
            // addAccount(userAccount);
            console.log(userAccount);
        }
    };

    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isRegister ? 'Register' : 'Login'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAuth}>
                    {isRegister && (
                        <Form.Group controlId="formBasicName">
                            <FloatingLabel controlId="floatingFirstName">First Name</FloatingLabel>
                            <Form.Control type="text" placeholder="Enter first name" name="firstName" required />
                            <FloatingLabel controlId="floatingLastName">Last Name</FloatingLabel>
                            <Form.Control type="text" placeholder="Enter last name" name="lastName" required />
                        </Form.Group>
                    )}

                    <Form.Group controlId="formBasicEmail">
                        <FloatingLabel controlId="floatingLastName">Email address</FloatingLabel>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" />
                    </Form.Group>

                    {/* Check if the user is trying to register or login */}
                    {isRegister && (
                        <Form.Group>
                            <Form.Label>Register as:</Form.Label>
                            <Form.Check type="radio" label="Consumer" name="userType" value="consumer" checked={userType === 'consumer'} onChange={() => setUserType('consumer')} />
                            <Form.Check type="radio" label="Maker" name="userType" value="maker" checked={userType === 'maker'} onChange={() => setUserType('maker')} />
                        </Form.Group>
                    )}
                    <Button variant="primary" type="submit">
                        {isRegister ? 'Register' : 'Login'}
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {isRegister ? (
                    <p>Already have an account?{' '}
                        <a href="#" onClick={() => setIsRegister(false)}>Log in here</a>
                    </p>
                ) : (
                    <p>Don't have an account?{' '}
                        <a href="#" onClick={() => setIsRegister(true)}>Register Header</a>
                    </p>
                )}
            </Modal.Footer>
        </Modal>
    );
}