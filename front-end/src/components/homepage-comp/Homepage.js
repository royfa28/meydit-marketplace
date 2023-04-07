import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Homepage() {
    return (
        <Container fluid className="bg-light">
            <Row className="py-5">
                <Col>
                    <h2>Welcome to the Marketplace</h2>
                    <p className="lead">
                        Discover, buy, and sell unique and artisanal products from around the world.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Homepage;