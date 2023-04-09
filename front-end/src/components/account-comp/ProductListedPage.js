/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// import { useMyAccountContext } from "../../context/accountContext";
// import { useMyProductsContext } from '../../context/ProductsContext';

export default function ProductListedPage() {

    // const { accountDetails, productListed, viewListedProducts } = useMyAccountContext();
    // const { singleProduct, getSingleProduct } = useMyProductsContext();

    // Load the data from productslisted on database, and select only the matching email address
    // useEffect(() => {
    //     viewListedProducts(accountDetails.emailAddress);
    //     const interval = setInterval(() => {
    //         viewListedProducts(accountDetails.emailAddress);
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
    const products = [
        { id: 1, title: 'Web Development', description: 'Programming' },
        { id: 2, title: 'Logo Design', description: 'Design' },
        { id: 3, title: 'Content Writing', description: 'Writing' },
    ];


    const handleEdit = (id) => {
        // handle edit button click
    };

    const handleDelete = (id) => {
        // handle delete button click
    };

    return (
        <>
            {/* {console.log(singleProduct.productTitle)} */}
            <Container fluid>
                <Row>
                    {products.map((product) => (
                        <Col md={4} xs={12} key={product.id}>
                            <Card className="my-3">
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" onClick={() => handleEdit(product.id)}>
                                        Edit
                                    </Button>
                                    <Button variant="danger" className="mx-3" onClick={() => handleDelete(product.id)}>
                                        Delete
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>

    )
}
