import { CartButtonDetails } from 'components/Button/ButtonStyle';
import styled from 'styled-components';
import { font_size_text, font_weight_text, primary_color, tertiary_color } from 'utils/Variables';

export const ReviewPayment = styled.div`
  width: 100%;
  button {
    display: block;
    margin: auto;
    margin-top: 159%;
    border: none;
    height: 3em;
    background-color: $tertiary-color;
  }

  button:hover { 
    color: white;
    cursor: pointer;
  }
`;

export const ReviewPaymentConfig = styled.div`
  height: 100%;
  padding: 11%;
  padding-top: 0;
  text-align: center;
  font-weight: ${font_weight_text};
  font-size:calc(${font_size_text}*1.5);
  background-color: ${tertiary_color};
`;

export const ButtonPayment = styled(CartButtonDetails)`
background-color:${primary_color};
width: 205px;
color:black;
&:hover{
  border: 1px solid ${primary_color};
  background-color:transparent;
}
`;