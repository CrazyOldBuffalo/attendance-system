import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Styles/Login.scss'

export default function Login() {
    return (
        <div className="Login-Wrapper">
            <Form>
                <h1>Login</h1>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">Username:</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="username" size="lg"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" className="form-control" size="lg"/>
                </Form.Group>
                <Button type="Submit" variant="primary" size="lg">Submit</Button>
            </Form>
        </div>
    )
}