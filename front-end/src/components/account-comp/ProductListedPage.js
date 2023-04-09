/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import EditJobModal from "./EditJobModalPage";

// import { useMyAccountContext } from "../../context/accountContext";
// import { useMyjobsContext } from '../../context/jobsContext';

export default function ProductListedPage() {

    // const { accountDetails, productListed, viewListedjobs } = useMyAccountContext();
    // const { singleProduct, getSingleProduct } = useMyjobsContext();

    // Load the data from jobslisted on database, and select only the matching email address
    // useEffect(() => {
    //     viewListedjobs(accountDetails.emailAddress);
    //     const interval = setInterval(() => {
    //         viewListedjobs(accountDetails.emailAddress);
    //         // console.log(orderHistory);
    //     }, 1000 * 3600);
    //     return () => clearInterval(interval);
    // }, [accountDetails])

    // Tried to make a new array so link automated productID === productTitle
    // Currently not working
    // let productID = [...new Set(productListed.map((data) => data.productID))];

    // useEffect(() => {
    //     productID.map((data) => {
    //         getSingleProduct(data);
    //     })
    //     const interval = setInterval(() => {
    //         productID.map((data) => {
    //             getSingleProduct(data);
    //         })
    //     }, 1000 * 3600);
    //     return () => clearInterval(interval);
    // }, [accountDetails])

    // Using a fixed json for now
    const jobs = [
        { id: 1, title: 'Web Development', description: 'Programming' },
        { id: 2, title: 'Logo Design', description: 'Design' },
        { id: 3, title: 'Content Writing', description: 'Writing' },
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleShow = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const handleClose = () => {
        setSelectedJob(null);
        setShowModal(false);
    };

    const handleEdit = (id) => {
        // handle edit button click
        // Open up modal, with the edit button
        console.log("This is the ID with edit " + id)
    };

    const handleEditJob = (job) => {
        // code to update job details
        handleClose();
    };

    const handleDelete = (id) => {
        // handle delete button click
    };

    return (
        <>
            {/* {console.log(singleProduct.productTitle)} */}
            <Container fluid>
                <Row>
                    {jobs.map((job) => (
                        <Col md={4} xs={12} key={job.id}>
                            <Card className="my-3">
                                <Card.Img variant="top" src={job.image} />
                                <Card.Body>
                                    <Card.Title>{job.title}</Card.Title>
                                    <Card.Text>{job.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" onClick={() => handleShow(job)}>
                                        Edit
                                    </Button>
                                    <Button variant="danger" className="mx-3" onClick={() => handleDelete(job.id)}>
                                        Delete
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                    <EditJobModal job={selectedJob} show={showModal} onHide={handleClose} onSubmit={handleEditJob} />
                </Row>
            </Container>
        </>

    )
}
