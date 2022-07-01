import styled from 'styled-components';
import { tertiary_color } from 'utils/Variables';

export const DivBackgroundBag = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 3em;
  justify-content: center;
  width: 285px;
  border-radius: 1%;

  img {
    justify-self: center;
    align-self: center;
    padding: 0 2% 2% 0;
  }

  p {
    align-self: center;
    justify-self: flex-end;
  }
  @media(max-width:1200px){
    grid-template-rows: 3em;
    width: 46vw;
  }
`;

export const CartButton = styled.button`
  background-color: ${tertiary_color};
  border: none;
  font-size: 15px;
  color: white;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const ShoppingCartButton = styled.button`
  background-image: url(\'/images/shopping-bag.png\');
  border:none;
  background-color:${tertiary_color};
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const DivButtonsDetails = styled(DivBackgroundBag)`
position:relative;
left:420px;
`;
export const CartButtonDetails = styled(CartButton)`
border-radius:20px;
width:500px;
`;