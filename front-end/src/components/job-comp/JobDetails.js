/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { Row, Col, Card, Container, Modal, Button, Form } from 'react-bootstrap';

import { useMyJobContext } from '../../context/JobContext';
import { useMyUserContext } from '../../context/UserContext';
import { useMyEmailContext } from '../../context/EmailContext';

// This page is the product details page, which will show individual product details
export default function JobDetailPage() {

    // Get the params that was passed from ProductCard.js
    const params = useParams();
    const { jobDetails, getJobDetails } = useMyJobContext();
    const { user } = useMyUserContext();
    const { sendEmail } = useMyEmailContext();

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    // Get data from database, with the jobID as the parameter
    useEffect(() => {
        getJobDetails(params.jobID);
        const interval = setInterval(() => {
            getJobDetails(params.jobID);
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    // This function is to just show a loading screen before the job details get loaded
    if (!jobDetails) {
        return <div>Loading...</div>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const emailData = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: jobDetails.user.email,
            jobID: params.jobID,
            quote: formData.get("quote"),
            comment: formData.get("comment"),
        };
        sendEmail(emailData);
    }

    return (
        <div>
            {/* {console.log(jobDetails)} */}
            <Container className='mt-4'>
                <Row className="Product-Page justify-content-between">
                    <Col md={7} xs={12} className="product-Col">
                        {/* <ProductImageSlider /> */}
                        Job image
                    </Col>

                    <Col md={4} xs={12} className="product-Col">
                        <Card className="product-card">
                            <Card.Body>
                                <h2>Job Title</h2>
                                <p>By: {jobDetails.user.first_name + " " + jobDetails.user.last_name} </p>
                                <p>Category: {jobDetails.category}</p>
                                <p>Budget: ${jobDetails.budget}</p>
                            </Card.Body>

                            <Card.Footer>
                                {/* Only show this button if you are browsing as a maker */}
                                {user.user_type === "maker" && (
                                    <Button onClick={handleShowModal}>Send Quote</Button>
                                )}
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

                <Modal centered show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Send Quote</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>

                            <Form.Group controlId="formQuote">
                                <Form.Label>Quote</Form.Label>
                                <Form.Control type="number" placeholder="Enter quote"
                                    name="quote" required />
                            </Form.Group>
                            <Form.Group controlId="formComment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter comment"
                                    name="comment" required />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Row>
                    <Col>
                        <h5>Job Description</h5>
                        <div dangerouslySetInnerHTML={{ __html: jobDetails.description }} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}