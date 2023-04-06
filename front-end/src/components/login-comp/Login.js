import React, { useState, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMyAuthContext } from '../../context/AuthContext';

// Login or register modal
export default function LoginModal(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('consumer');
    const [isRegister, setIsRegister] = useState(true);

    const { register, registerStatus, loginAuth, error } = useMyAuthContext();

    const handleClose = () => {
        registerStatus(false);
    };

    const handleAuth = async (event) => {
        event.preventDefault();

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isRegister ? 'Register' : 'Login'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAuth}>
                    {isRegister && (
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                        </Form.Group>
                    )}

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>

                    {isRegister && (
                        <Form.Group>
                            <Form.Label>Register as:</Form.Label>
                            <Form.Check
                                type="radio"
                                label="Consumer"
                                name="userType"
                                value="consumer"
                                checked={userType === 'consumer'}
                                onChange={() => setUserType('consumer')}
                            />
                            <Form.Check
                                type="radio"
                                label="Maker"
                                name="userType"
                                value="maker"
                                checked={userType === 'maker'}
                                onChange={() => setUserType('maker')}
                            />
                        </Form.Group>
                    )}

                    <Button variant="primary" type="submit">
                        {isRegister ? 'Register' : 'Login'}
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {isRegister ? (
                    <p>
                        Already have an account?{' '}
                        <a href="#" onClick={() => setIsRegister(false)}>
                            Log in here
                        </a>
                    </p>
                ) : (
                    <p>
                        Don't have an account?{' '}
                        <a href="#" onClick={() => setIsRegister(true)}>
                            Register here
                        </a>
                    </p>
                )}
            </Modal.Footer>
        </Modal>
    );
}