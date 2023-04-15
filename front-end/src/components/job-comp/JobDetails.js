/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Row, Col, Card, Tab, Tabs } from 'react-bootstrap';

import { Container } from 'react-bootstrap';

// This page is the product details page, which will show individual product details
export default function JobDetailPage() {

    // Get the params that was passed from ProductCard.js
    const { jobId } = useParams();

    // Get data from database, with the productID as the parameter
    // useEffect(() => {
    //     axios.get(`/api/jobs/${jobId}`).then((res) => {
    //         setJob(res.data);
    //     });
    // }, [jobId]);

    return (
        <div>
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
                                <p>By: username </p>
                                <p>Category: </p>
                                <p>Budget: $</p>
                            </Card.Body>

                            <Card.Footer>
                                Bid ?
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h5>Job Description</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mi vitae sapien faucibus, a semper nunc vulputate. </p>
                        <p>Ut at mauris ut enim fermentum dignissim. Morbi pharetra, leo sed aliquam porttitor, libero mi iaculis mi, at aliquet velit velit sed elit. Ut at mauris ut enim fermentum dignissim. </p>
                        <ul>
                            <li>Proin eleifend orci vel nisi viverra, non gravida purus convallis.</li>
                            <li>Maecenas lacinia velit a nisi malesuada, et tempus ex faucibus.</li>
                            <li>Donec eget sem at neque tincidunt interdum.</li>
                        </ul>
                        <p>Suspendisse semper, augue vel consequat finibus, enim velit congue ante, ut ullamcorper nibh sapien ut felis. Nam nec bibendum purus. Duis ut pharetra purus, vel maximus lacus. Pellentesque ut ipsum dolor. Donec scelerisque auctor velit ut eleifend. </p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}