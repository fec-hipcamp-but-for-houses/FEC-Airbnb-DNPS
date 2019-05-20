import React from 'react';
import axios from 'axios';
import Description from './Description.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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
        console.log('res.data.room: ', JSON.parse(res.data.room));
        this.setState({
          data: Object.assign({}, JSON.parse(res.data.room)),
        });
      });
  }

  render() {
    return (
      <div>
        <Description rooms={this.state.data} />
      </div>
    );
  }
}

export default App;
