import { CartButtonDetails } from 'components/Button/ButtonStyle';
import styled from 'styled-components';

export const ReviewPayment = styled.div`
  width: 100%;
  button {
    display: block;
    margin: auto;
    margin-top: 159%;
    border: none;
    height: 3em;
    background-color: ${(props)=> props.theme.colors.tertiary_color};
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
  font-weight: ${(props)=> props.theme.fonts.font_weight_text};
  font-size:calc(${(props)=> props.theme.fonts.font_size_text}*1.5);
  background-color: ${(props)=> props.theme.colors.tertiary_color};
`;

export const ButtonPayment = styled(CartButtonDetails)`
background-color:${(props)=> props.theme.colors.primary_color};
width: 205px;
color:black;
&:hover{
  border: 1px solid ${(props)=> props.theme.colors.primary_color};
  background-color:transparent;
}
`;