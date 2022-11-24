import axios from "axios";
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";


export default class ClassList extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeClassID = this.onChangeClassID.bind(this);
        this.retriveClasses = this.retriveClasses.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveClass = this.refreshList.bind(this);

        this.state = {
            classes: [],
            currentClass: null,
            currentIndex: -1,
            searchClass: ""
        };
    }

    componentDidMount() {
        this.retriveClasses();
    }

    onChangeClassID(e) {
        const searchClass = e.target.value;
        this.setState({
            searchClass: searchClass
        });
    };

    refreshList() {
        this.retriveClasses();
        this.setState({
            currentClass: null,
            currentIndex: -1
        });
    };

    setActiveClass(classobj, index) {
        this.setState({
            currentClass: classobj,
            currentIndex: index
        });
    };

    retriveClasses() {
        axios.get(`http://localhost:5000/Class/All`).then(response => {
            this.setState({
                classes: response.data
            });
            console.log(response.data);
        })
            .catch(e => { console.log(e); });
    };

    render() {
        const { searchClass, classes, currentClass, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchClass}
                            onChange={this.onChangeClassID}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchClass}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Class List</h4>

                    <ul className="list-group">
                        {classes &&
                            classes.map((classobj, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveClass(classobj, index)}
                                    key={index}
                                >
                                    {classobj.classID}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentClass ? (
                        <div>
                            <h4>Class</h4>
                            <div>
                                <label>
                                    <strong>Class:</strong>
                                </label>{" "}
                                {currentClass.classID}
                            </div>
                            <div>
                                <label>
                                    <strong>Class Name:</strong>
                                </label>{" "}
                                {currentClass.className}
                            </div>
                            <div>
                                <label>
                                    <strong>Type:</strong>
                                </label>{" "}
                                {currentClass.type ? "Tutorial" : "Lecture"}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Tutorial...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

};