import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './navbar.css';

const NavigationBar = () => {

    return (
        <Container className="nav-container">
            <Navbar className="nav-bar" bg="nav-bar" variant="dark" fixed="top" expand="sm" collapseOnSelect>
                <Navbar.Brand className="nav-brand">
                    <Nav.Link href="/"><img className="logo" src={require("../Images/C-Cube.png")} alt="C-cube" /></Nav.Link>
                </Navbar.Brand>

                <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav-collapse">
                    <Nav className="nav">
                        <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-link" href="/about">About</Nav.Link>
                        <Nav.Link className="nav-link" href="/events">Events</Nav.Link>
                        <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
                        <Nav.Link className="nav-link" href="/donate">Donate</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavigationBar;