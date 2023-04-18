import { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import { useMyUserContext } from "../../context/UserContext";
import JWTDecode from "jwt-decode";
import 'react-quill/dist/quill.snow.css';

function AddJob() {
    const [clothingType, setClothingType] = useState('');
    const [images, setImages] = useState([]);
    const [jobDescription, setJobDescription] = useState('');
    const [jobBudget, setJobBudget] = useState('');

    const decodedToken = JWTDecode(localStorage.getItem("token"));
    const { user, viewAccount } = useMyUserContext();

    const isFormValid = clothingType && jobDescription && jobBudget;

    const handleSubmit = (e) => {
        e.preventDefault();
        // submit the form data to the backend API
        const { first_name, last_name, email } = user;
        const jobData = {
            clothingType,
            jobDescription,
            jobBudget,
            first_name,
            last_name,
            email
        };

        console.log(jobData);
    };

    useEffect(() => {
        viewAccount(decodedToken.email);
        const interval = setInterval(() => {
            viewAccount(decodedToken.email);
        }, 1000 * 3600);

        return () => clearInterval(interval);
    }, []);

    const handleClothingTypeChange = (e) => {
        setClothingType(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        setImages(selectedImages);
    };

    const handleDescriptionChange = (value) => {
        setJobDescription(value);
    };

    const handlePriceChange = (e) => {
        setJobBudget(e.target.value);
    };

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>

                    {/* Consumer can select what type of clothing they want to list */}
                    <Form.Group controlId="type">
                        <Form.Label>Type of Clothing</Form.Label>
                        <Form.Control as="select" value={clothingType} onChange={handleClothingTypeChange}>
                            <option value="">Select Type</option>
                            <option value="Dress">Dress</option>
                            <option value="Ethnic Wear - Sari / Blouse">Ethnic Wear - Sari / Blouse</option>
                        </Form.Control>
                    </Form.Group>

                    {/* Image uploader, and using accept="image/*" to let the file uploader know that it can only use images type file */}
                    <Form.Group controlId="images">
                        <Form.Label>Upload Images</Form.Label>
                        <Form.Control type="file" accept="image/*" multiple onChange={handleImageChange} />
                    </Form.Group>


                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <ReactQuill value={jobDescription} onChange={handleDescriptionChange}
                            modules={{
                                toolbar: [
                                    [{ header: [false] }],
                                    ['bold', 'italic', 'underline'],
                                    [{ list: 'bullet' }, { list: 'ordered' }],
                                    ['clean'],
                                ],
                            }} />
                        {/* Basic description */}

                        {/* A test to see everything works */}
                        <>
                            <div dangerouslySetInnerHTML={{ __html: jobDescription }} />
                        </>
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" value={jobBudget} onChange={handlePriceChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={!isFormValid}>
                        Submit
                    </Button>
                </Form>
            </Container>

        </>

    );
}

export default AddJob;