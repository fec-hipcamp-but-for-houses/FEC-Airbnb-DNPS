import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Title, City, MarginTitle, MarginCity, RoomBlock, FirstBlock, RoomDetail, Img,
  SecondBlock, HostDetail, ThirdBlock, LocalDetail, ForthBlock, CleanDetail,
  LineBlock, Line, DescriptionBlock, RmDescription, ReadBlock,
} from './style.js';


class Description extends React.PureComponent {
  render() {
    console.log('rmDescription: ', this.props.rooms.rmDescription);
    let rooms = this.props.rooms;
    return (
      <div>
        <MarginTitle>
          <Title>{rooms.title}</Title>
        </MarginTitle>
        <MarginCity>
          <City>{rooms.city}</City>
        </MarginCity>
        <RoomBlock>
          <FirstBlock>
            <Img src="https://s3-us-west-1.amazonaws.com/imageurl/privateHouse.svg" alt="house" />
            Private room in house

          </FirstBlock>
          <RoomDetail>
            <span>
              {rooms.room.houseType.guestNum}
              &nbsp;guests
            </span>
            <span> &middot; </span>
            <span>
              {rooms.room.houseType.bedroomNum}
              &nbsp;bedroom
            </span>
            <span> &middot; </span>
            <span>
              {rooms.room.houseType.bedNum}
              &nbsp;bed
            </span>
            <span> &middot; </span>
            <span>
              {rooms.room.houseType.bathNum}
              &nbsp;private bath
            </span>
          </RoomDetail>
          <SecondBlock>
            <Img src="https://s3-us-west-1.amazonaws.com/imageurl/medal.svg" alt="medal" />
          Superhost
          </SecondBlock>
          <HostDetail>
            <span>{rooms.room.superhost}</span>
          </HostDetail>
          <ThirdBlock>
            <Img src="https://s3-us-west-1.amazonaws.com/imageurl/location.svg" alt="location" />
             Great location
          </ThirdBlock>
          <LocalDetail>
            <span>{rooms.room.greatLocation}</span>
          </LocalDetail>
          <ForthBlock>
            <Img src="https://s3-us-west-1.amazonaws.com/imageurl/sparkling.svg" alt="clean" />
             Sparkling clean
          </ForthBlock>
          <CleanDetail>
            <span>{rooms.room.sparkling}</span>
          </CleanDetail>
        </RoomBlock>
        <LineBlock>
          <Line />
        </LineBlock>
        <DescriptionBlock>
          <RmDescription>{rooms.space}</RmDescription>
        </DescriptionBlock>
        <ReadBlock>
          {/* <ReadMore /> */}
        </ReadBlock>
      </div>
    );
  }
}


export default Description;
