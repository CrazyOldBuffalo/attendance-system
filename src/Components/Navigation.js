import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";


import "../resources/styles/Nav.scss";
import CreateUser from "./Users/User-Create";
import Home from "../Components/Home";
import Login from "../Components/Auth/Login";
import ModuleList from  "./Module/Module-List";

export default function Navigation() {
    return (
        <div className="navigation">
            <Router>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Login</Link>
                            <Link className="nav-link" to="/Home">Home</Link>
                            <Link className="nav-link" to="/User/Create">User</Link>
                            <Link className="nav-link" to="/Module/List">Module</Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/User/Create" element={<CreateUser />}/>
                    <Route path="/Module/List" element={<ModuleList />}/>
                </Routes>
            </Router>
        </div>
    )
};