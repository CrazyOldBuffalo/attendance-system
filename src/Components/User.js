import React from "react";
import axios from "axios";
import test from "../Services/user.service";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormGroup } from "react-bootstrap";

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searched: false,
            fetchedUser: {},
            value: ""
        };
        this.userChanged = this.userChanged.bind(this);
        this.searchForUser = this.searchForUser.bind(this);
    };

    userChanged(event) {
        this.setState({ value: event.target.value });
        event.preventDefault();
    };

    searchForUser(event) {
        test.get(this.state.value)
            .then(
                (result) => {
                    this.setState({
                        searched: true,
                        fetchedUser: result.data
                    });
                },
                (error) => {
                    this.setState({
                        searched: false,
                        fetchedUser: {}
                    });
                },
            )
        this.setState({ searchedForUser: this.state.value });
        event.preventDefault();
    }

    // required function in Class.
    render() {
        return (
            <div className="UserSearch">
                <div className="UserSearchForm">
                    <Form onSubmit={this.searchForUser}>
                        <h1>User Search</h1>
                        <FormGroup>
                            <Form.Label htmlFor="username">Username: </Form.Label>
                            <Form.Control type="text" className="form-control" placeholder="username" value={this.state.value} onChange={this.userChanged} />
                        </FormGroup>
                        <Button type="submit">Search</Button>
                    </Form>
                </div>
                <div className="UserSearchResults">
                    {this.state.searched && this.state.fetchedUser.username}
                </div>
            </div>

        )
    }
}