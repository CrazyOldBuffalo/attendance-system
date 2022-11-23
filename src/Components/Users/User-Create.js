import React from "react";
import userService from "../../Services/user.service";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from "react-bootstrap/esm/FormLabel";
import axios from "axios";

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.changeuser = this.changeuser.bind(this);
        this.changepassword = this.changepassword.bind(this);
        this.changeemail = this.changeemail.bind(this);
        this.changetel = this.changetel.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);

        this.state = {
            username: "",
            password: "",
            email: "",
            telephone: "",
            canEditCourse: false,
            canEditModule: false,

            submitted: false,
        };
    }

    changeuser(event) {
        this.setState({ username: event.target.value });
    }

    changepassword(event) {
        this.setState({password: event.target.value});
    }

    changeemail(event) {
        this.setState({email: event.target.value});
    }

    changetel(event) {
        this.setState({telephone: event.target.value});
    }

    saveUser() {
        const data = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            telephone: this.state.telephone,
        };
        console.log(data);
        userService.create(data);
        axios.post("http://localhost:5000/User/Create", data).then(response => {
            console.log(response.data);
        }).catch(e => {console.log(e)});
    }

    newUser() {
        this.setState({
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
                        <Form method="post">
                            <h2>Create User</h2>
                            <Form.Group>
                                <FormLabel htmlFor="username">username: </FormLabel>
                                <Form.Control name="username" type="text" className="form-control" placeholder="username" value={this.state.username} onChange={this.changeuser}/>
                            </Form.Group>
                            <Form.Group>
                                <FormLabel htmlFor="password">password: </FormLabel>
                                <Form.Control name="password" type="password" className="form-control" placeholder="******" value={this.state.password} onChange={this.changepassword}/>
                            </Form.Group>
                            <Form.Group>
                                <FormLabel htmlFor="email">Email: </FormLabel>
                                <Form.Control name="email" type="text" className="form-control" placeholder="email@email.com" value={this.state.email} onChange={this.changeemail}/>
                            </Form.Group>
                            <Form.Group>
                                <FormLabel htmlFor="telephone">telephone: </FormLabel>
                                <Form.Control name="telephone" type="text" className="form-control" placeholder="01010101" value={this.state.telephone} onChange={this.changetel}/>
                            </Form.Group>
                            <Button onClick={this.saveUser} className="btn btn-primary">Submit</Button>
                        </Form>
                    </div>
                )}

            </div>
        );
    }
};