import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Auth/Login";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

import "../resources/styles/Nav.scss";

export default function Navigation() {
    return (
        <div className="navigation">
            <Router>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="basic-navbar-nav" />
                        <Nav classname="me-auto">
                            <Nav.Link><Link className="navlinks" to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link className="navlinks" to="/Login">Login</Link></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
};