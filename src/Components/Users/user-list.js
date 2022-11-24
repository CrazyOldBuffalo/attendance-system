import React, { Component } from "react";
import userService from "../../Services/user.service";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.getUser = this.getUser.bind(this);
        
    }
    
}