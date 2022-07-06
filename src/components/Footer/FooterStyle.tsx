import { CartButtonDetails } from '@/components/Button/ButtonStyle';
import styled from 'styled-components';

export const FooterTemplate = styled.footer`
  background-color:${(props)=>props.theme.colors.quaternary_color};

  li {
    margin-top: 12px;
    font-size: calc($font-size-text * 1.1);
    font-weight: ${(props)=>props.theme.fonts.font_weight_text};
  }
`;  

export const FooterInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 1.5fr;
  grid-template-rows: 280px;
  padding: 1%; 
  ul {
    list-style: none;
    text-align: center;
    justify-content: center;
  }
  
`;

export const FooterIcons = styled(FooterInfos)`
  display: flex;
  justify-content: space-around;
`;

export const Teste = styled(FooterInfos)`
  width: min-content;
  height: 30px;

  &:before {
    content: '';
    background-image: url("${(props) => props.itemRef}");
    width: 24px;
    height: 24px;
  }
`;

export const FooterContacts = styled(FooterInfos)``;

export const FooterNewsletter = styled(FooterInfos)`
  display: flex;
  flex-direction: column;
  text-align: center;
  input {
    width: 280px;
    height: 32px;
    margin-right: 20px;
  }

`;

export const NewsletterButton=styled(CartButtonDetails)`
border-radius:4px;
background-color:${props=>props.theme.colors.tertiary_color};
width: 160px;
height: 38px;
border: none;
&:hover{
  color: black;
  cursor: pointer;
}
`;

export const FooterItems = styled(FooterInfos)`
  input {
    width: 280px;
    height: 32px;
    margin-right: 20px;
  }
`;
