import React from "react";
import userService from "../../Services/user.service";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from "react-bootstrap/esm/FormLabel";

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.newUser = this.newUser.bind(this);
        this.userChanged = this.userChanged.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);

        this.state = {
            id: null,
            username: "",
            password: "",
            email: "",
            telephone: "",
            canEditCourse: false,
            canEditModule: false,

            submitted: false,
        };
    }

    userChanged(event) {
        this.setState({ value: event.target.value });
        event.preventDefault();
    }

    saveUser() {
        var data = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.password,
            telephone: this.state.telephone,
            canEditCourse: this.state.canEditCourse,
            canEditModule: this.state.canEditModule
        };

        userService.create(data).then(response => {
            this.setState({
                id: response.data.id,
                username: response.data.username,
                email: response.data.email,
                telephone: response.data.email,
                canEditCourse: response.data.canEditCourse,
                canEditModule: response.data.canEditModule,

                submitted: true
            });
            console.log(response.data);
        }).catch(e => { console.log(e) });
    }

    newUser() {
        this.setState({
            id: null,
            username: "",
            password: "",
            email: "",
            telephone: "",
            canEditCourse: false,
            canEditModule: false,

            submitted: false
        });
    }


    render() {
        return (
            <div className="createUser">
                {this.state.submitted ? (
                    <div>
                        <h2>User Created</h2>
                        <button className="btn btn-success" onClick={this.newUser}>Next</button>
                    </div>
                ) : (
                    <div className="userform">
                        <Form>
                            <h2>Create User</h2>
                            <Form.Group>
                                <FormLabel htmlFor="username">username: </FormLabel>
                                <Form.Control type="text" className="form-control" placeholder="username"/>
                            </Form.Group>
                            <Form.Group>
                                <FormLabel htmlFor="password">password: </FormLabel>
                                <Form.Control type="password" className="form-control" placeholder="******"/>
                            </Form.Group>
                            <Form.Group>
                                <FormLabel htmlFor="email">Email: </FormLabel>
                                <Form.Control type="text" className="form-control" placeholder="email@emai.com" />
                            </Form.Group>
                            <Form.Group>
                                <FormLabel htmlFor="telephone">telephone: </FormLabel>
                                <Form.Control type="text" className="form-control" placeholder="01010101" />
                            </Form.Group>
                            <Form.Group>

                            </Form.Group>
                            <Form.Group>
                                
                            </Form.Group>
                        </Form>
                    </div>
                )}

            </div>
        )
    }
};