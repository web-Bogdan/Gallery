import React from 'react';
import {Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" expand={false}>
            <Container>
                <Navbar.Brand as={NavLink}  to="/">Фотомания</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Муню</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={NavLink}  to="/">Галерея</Nav.Link>
                            <Nav.Link as={NavLink}  to="/about">Обо мне</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;