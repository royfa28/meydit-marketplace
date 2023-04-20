/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Row, Col, Card, Container } from 'react-bootstrap';

import { useMyJobContext } from '../../context/JobContext';

// This page is the product details page, which will show individual product details
export default function JobDetailPage() {

    // Get the params that was passed from ProductCard.js
    const params = useParams();
    const { jobDetails, getJobDetails } = useMyJobContext();

    // Get data from database, with the jobID as the parameter
    useEffect(() => {
        getJobDetails(params.jobID);
        const interval = setInterval(() => {
            getJobDetails();
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {console.log(jobDetails)}
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
                                {/* {user.type === "maker" && (
                                    <button>Only visible for maker users</button>
                                )} */}
                                Bid ?
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

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