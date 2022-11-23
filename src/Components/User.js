import React from "react";

export default class User extends React.Component
{
    constructor(props)
    {
        super(props);
        
        // set User attributes to default values.
        this.state = { username: "", password: "", email: "", telephoneNo: "", canEditModule: false, canEditCourse: false };
    }

    // required function in Class.
    render()
    {
        return (
            <div>
                <h1> {this.state.username} 's details </h1>
                <p> password: {this.state.password} </p>
                <p> email: {this.state.email} </p>
                <p> telephoneNo. {this.state.telephoneNo} </p>
                <p> canEditModule {this.state.canEditModule} </p>
                <p> canEditModule {this.state.canEditCourse} </p>
            </div>
        )
    }

    setUsername = (username) => {
        this.setState().username = username;
    }

    setPassword = (password) => {
        this.setState().password = password;
    }

    setEmail = (email) => {
        this.setState().email = email;
    }

    setTelephoneNo = (telephoneNo) => {
        this.setState().telephoneNo = telephoneNo;
    }

    getUsername = () => {
        return this.username;
    }

    getPassword = () => {
        return this.password;
    }

    getEmail = () => {
        return this.email;
    }

    getTelephoneNo = () => {
        return this.telephoneNo;
    }

    getUser = () => {
        return this.User;
    }
}