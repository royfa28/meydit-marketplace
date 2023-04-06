import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navigation.css"
import { Link } from "react-router-dom";

export default function NavBar() {
    // const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div className='bg-info text-white'>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end nav" justify="true" style={{width: "100%"}}>
                        {/* Tell the router to open the PS4 which will filter product based on PS4 only */}
                        <Nav.Link> <Link to="/Product-List/ps4"> PS 4 </Link></Nav.Link>
                        <Nav.Link> <Link to="/Product-List/ps5"> PS 5 </Link></Nav.Link>
                        <Nav.Link> <Link to="/Product-List/XBox"> XBox</Link></Nav.Link>
                        <Nav.Link> <Link to="/Product-List/Nintendo-Switch"> Nintendo Switch </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}