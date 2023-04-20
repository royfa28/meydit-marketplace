/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Row, Col, Card, Container } from 'react-bootstrap';

import { useMyJobContext } from '../../context/JobContext';

// This page is the product details page, which will show individual product details
export default function JobDetailPage() {

    // Get the params that was passed from ProductCard.js
    const params = useParams();
    const { jobs } = useMyJobContext();
    const job = jobs[params.jobID - 1];

    // Get data from database, with the productID as the parameter
    // useEffect(() => {
    //     axios.get(`/api/jobs/${jobId}`).then((res) => {
    //         setJob(res.data);
    //     });
    // }, [jobId]);

    return (
        <div>
            {console.log(job)}
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
                                <p>By: {job.user.first_name + " " + job.user.last_name} </p>
                                <p>Category: {job.category}</p>
                                <p>Budget: ${job.budget}</p>
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
                        <div dangerouslySetInnerHTML={{ __html: job.description }} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}