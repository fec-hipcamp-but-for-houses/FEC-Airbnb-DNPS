import React from 'react';
import axios from 'axios';
import Description from './Description.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3004/rooms', {
      params: {
        listingId: 0,
      },
    })
      .then((res) => {
        this.setState({
          data: JSON.parse(res.data.room),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    console.log('houseType ', this.state.data);
    return (
      <div>
        {this.state.data && <Description rooms={this.state.data} />}
      </div>
    );
  }
}

export default App;
