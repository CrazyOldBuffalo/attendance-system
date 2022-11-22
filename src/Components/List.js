import axios from "axios";
import React from "react";

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      axios.get("http://localhost:5001/User/All")
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.data
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log(items);
        return (
          <ul>
            {items.map(item => (
              <li key={item._id}>
                {item.username} {item.password}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default List;