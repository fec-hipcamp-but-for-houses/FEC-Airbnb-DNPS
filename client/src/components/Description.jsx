import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from './style';

class Description extends React.PureComponent {
  render() {
     console.log('props.rooms: ', this.props.rooms.city)
     let rooms = this.props.rooms;
    return (
      <div>
        <Title>{rooms.title}</Title>
        <div>
          <div>{rooms.city}</div>
        </div>
      </div>
    );
  }
}


export default Description;
