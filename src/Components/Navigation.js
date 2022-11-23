import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Auth/Login";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

import "../resources/styles/Nav.scss";
import User from "./User";

export default function Navigation() {
    return (
        <div className="navigation">
            <Router>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/Login">Login</Link>
                            <Link className="nav-link" to="/User">User</Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/User" element={<User/>} />
                </Routes>
            </Router>
        </div>
    )
};