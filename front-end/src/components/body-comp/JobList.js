import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useMyJobContext } from '../../context/JobContext';

function JobList() {

    const { jobs, getAllJobs } = useMyJobContext();

    useEffect(() => {
        getAllJobs();
        const interval = setInterval(() => {
            getAllJobs();
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container fluid className="my-4">
            <Row xs={1} md={2} lg={3} className="g-4">

                {/* Loop through jobs and display in card */}
                {jobs.map((job, index) => {
                    // console.log(job);
                    return (

                        <Col className="mb-4" key={index}>
                            <Card style={{ height: '300px' }}>
                                <Link to={`/job-details/${job.id}`}>
                                    <Card.Img variant="top" style={{ height: '150px' }} />
                                    <Card.Body>
                                        <Card.Title>{job.title}</Card.Title>
                                        <Card.Text>Budget: ${job.budget}</Card.Text>
                                        <Card.Text>Posted by: {job.user.first_name + " " + job.user.last_name}</Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>
        </Container>
    );
}

export default JobList;