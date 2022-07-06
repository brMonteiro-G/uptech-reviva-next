import styled from 'styled-components';

export const ReviewTemplate = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1%;

  &:first-child{
    width: 100%;
  }
`;

// export const InfoReview = styled.div`
//   width: 100%;
// `;

export const PaymentReview = styled.div`
  width: 20%;
  background-color: ${(props)=> props.theme.colors.tertiary_color};
`;

export const ItemContent = styled.div`
width: 74%;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
left: 30px;

`;

export const DisplaySelectSizeButton = styled.div`
width: 119px;
height: 64px;

`;
 
export const ContentItemText = styled.p`
display: inline-block;
width: ${(props)=>props.id=='value'?67:175}px;

`;