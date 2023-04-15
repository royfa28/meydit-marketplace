import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function JobList() {


    useEffect(() => {

    }, []);

    return (
        <Container fluid className="my-4">
            <Row xs={1} md={2} lg={3} className="g-4">

                <Col className="mb-4">
                    <Card>
                        <Link to={`/jobDetails/1`}>
                            <Card.Img variant="top" />
                            <Card.Body>
                                <Card.Title>Job Title</Card.Title>
                                <Card.Text>Budget: $</Card.Text>
                                <Card.Text>Posted by:</Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                {/* This is for the call function later */}
                {/* {jobs.map(job => (
                    <Col key={job.id} className="mb-4">
                        <Card>
                            <Link to={`/job/${job.id}`}>
                                <Card.Img variant="top" src={job.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{job.title}</Card.Title>
                                    <Card.Text>Budget: ${job.budget}</Card.Text>
                                    <Card.Text>Posted by: {job.user.name}</Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))} */}
            </Row>
        </Container>
    );
}

export default JobList;