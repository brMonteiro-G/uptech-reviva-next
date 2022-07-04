import Link from 'next/link';
import styled from 'styled-components';


export const LogoTemplate = styled.div`
 cursor:pointer;
  display: flex;
  flex-direction: column;
  width: max-content;
  height: auto;
  padding: 1%;
  
  p,
  h1 {
    font-size: ${(props)=> props.theme.fonts.font_size_title};
    
    font-weight: ${(props)=> props.theme.fonts.font_weight_title};
  }
`;

export const FooterLogo = styled(LogoTemplate)`
  align-items: flex-start;
  justify-self: right;
  align-self: flex-end;
`;

export const BannerLogo = styled(LogoTemplate)`
  font-size: ${(props)=> props.theme.fonts.font_size_text};
  font-weight: ${(props)=> props.theme.fonts.font_weight_text};
  padding-bottom: 1em;
`;

export const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const Title = styled.p`
  margin: 0;
`;
export const Subtitle = styled.small`
  align-self: flex-end;
`;
