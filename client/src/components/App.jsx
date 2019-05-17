/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.addDescription = this.addDescription.bind(this);
  }

  componentDidMount() {
    this.addDescription();
  }

  addDescription() {
    axios.get('http://localhost:3004/rooms', {
      params: {
        listingId: 0,
      },
    })
      .then((res) => {
        console.log('res.data: ', res.data);
        this.setState({
          data: res.data,
        });
      });
  }
// output

  render() {
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}

export default App;
