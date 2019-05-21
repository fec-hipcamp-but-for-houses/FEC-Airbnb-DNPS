import styled, { createGlobalStyle, css } from 'styled-components';


const Title = styled.h1`
@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');
  font-family: 'Montserrat';
  margin: 0px !important;
  font-size: 32px !important;
  font-weight: 600 !important;
  color: #484848 !important;
  padding-top: 6px !important;
  padding-bottom: 6px !important;
  line-height: 1.125em !important;
  word-wrap: break-word !important;
`;

const City = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400&display=swap');
    font-family: 'Montserrat';
    margin: 0px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    width: 569px;
    height: 54px;
    min-height: 10em;
    display: table-cell;
    vertical-align: middle;
    margin-bottom: 16px;
`;
const MarginTitle = styled.div`
    margin-bottom: 6px;
`;
const MarginCity = styled.div`
    margin-bottom: 16px;
`;
const RoomBlock = styled.div`
    display: block;
    width: 617px;
    height: 232px;
`;
const FirstBlock = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
    font-family: 'Montserrat';
    margin: 0px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    display: block;
    width: 617px;
    height: 22px;
`;
const RoomDetail = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
    font-family: 'Montserrat';
    margin-top: 2px !important;
    margin-left: 24px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    display: table !important;
    width: 100% !important;
    border-spacing: 0px !important;
`;
const Img = styled.img`
    width: 12px; 
    height: 16px;
    margin-right: 10px;
    vertical-align: text-bottom;
    `;
const SecondBlock = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
    font-family: 'Montserrat';
    margin-top: 16px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    display: block;
    width: 617px;
    height: 22px;
    `;
const HostDetail = styled.div`
   @import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
    font-family: 'Montserrat';
    margin-top: 2px !important;
    margin-left: 22px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    display: table !important;
    width: 100% !important;
    border-spacing: 0px !important;
    `;
const ThirdBlock = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
    font-family: 'Montserrat';
    margin-top: 16px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    display: block;
    width: 617px;
    height: 22px;
    `;
const LocalDetail = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
    font-family: 'Montserrat';
    margin-top: 2px !important;
    margin-left: 22px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    display: table !important;
    width: 100% !important;
    border-spacing: 0px !important;
    `;
const ForthBlock = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
    font-family: 'Montserrat';
    margin-top: 16px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    display: block;
    width: 617px;
    height: 22px;
    `;
const CleanDetail = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
    font-family: 'Montserrat';
    margin-top: 2px !important;
    margin-left: 22px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    display: table !important;
    width: 100% !important;
    border-spacing: 0px !important;
    `;
const LineBlock = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    display: block;
    width: 617px;
    `;
const Line = styled.div`
   border-bottom-color: rgb(235, 235, 235);
   border-bottom-style: solid;
   border-bottom-width: 1px;
   display:block;
   box-sizing: border-box;
   `;
const DescriptionBlock = styled.div`
   overflow-wrap: break-word !important;
   display: block;
   margin-block-start: 14px;
   margin-block-end: 14px;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   width: 617px;
   height: 66px;
   box-size: border-box;
   line-height: 20.02px;
   `;
const RmDescription = styled.div`
   @import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
   font-family: 'Montserrat';
   margin: 0px !important;
   word-wrap: break-word !important;
   font-size: 16px !important;
   font-weight: 400 !important;
   line-height: 1.375em !important;
   color: #484848 !important;
   box-sizing: border-box;
   text-size-adjust: 100%
   display: inline;
   height: auto;
   width: auto;
    `;
const ReadBlock = styled.div`
   margin-top: 8px;
   margin-bottom: 24px;
   display: block;
   box-sizing: border-box;
   width: 617px;
   height: 28px;
   `;

export {
  Title, City, MarginTitle, MarginCity, RoomBlock, FirstBlock, RoomDetail, Img,
  SecondBlock, HostDetail, ThirdBlock, LocalDetail, ForthBlock, CleanDetail,
  LineBlock, Line, DescriptionBlock, RmDescription, ReadBlock,
};
