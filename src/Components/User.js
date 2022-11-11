import React from "react";

export default class User extends React.Component
{
    constructor(props)
    {
        super(props);
        
        // set User attributes to default values.
        this.state = 
        {
            username: "-",
            password: "-",
            email: "-",
            telephoneNo: "0",
            canEditModule: Boolean(false),
            canEditCourse: Boolean(false)
        }
    }

    // required function in Class.
    render()
    {
        return
    }


    // test
    setUsername = (username) => {
        this.setState().username = username;
    }
}