import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditJobModal(props) {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    useEffect(() => {
        if (props && props.job) {
            setJobTitle(props.job.title);
            setJobDescription(props.job.description);
            // setJobPrice(props.job.price);
        }
    }, [props]);

    const handleSubmit = () => {
        // const updatedJob = { id: props.job.id, title, description };
        // props.onSubmit(updatedJob);
    };

    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title: {jobTitle}</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder={jobDescription} value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default EditJobModal;