import axios from "axios";
import React from "react";

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searched: false,
        fetchedUser: {},
        value: ""
      };
      this.userChanged = this.userChanged.bind(this);
      this.searchForUser = this.searchForUser.bind(this);
    }

    //Don't touch this one
    userChanged(event){
      this.setState({value: event.target.value});
      event.preventDefault();
    }

    searchForUser(event) {
      axios.get("http://localhost:5001/Student/Find/"+this.state.value)
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
      this.setState({searchedForUser: this.state.value});
      event.preventDefault();
    }
  
    // componentDidMount() {
    //   axios.get("http://localhost:5001/User/All")
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           items: result.data
    //         });
    //       },
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )
    // }
  
    render() {
      return (
        <div>
        <form onSubmit={this.searchForUser}>
          <label>
            User:
            <input type="text" value={this.state.value} onChange={this.userChanged}/>
          </label>
          <input type="submit" value="Search"/>
        </form>
        {this.state.searched &&
          <div>Searched for user: {this.state.fetchedUser.studentID}</div>
        }
        </div>
    )
  }

}

  export default Search;