import  Link  from 'next/link';
import styled from 'styled-components';
import {
  font_size_text,
  font_weight_text,
  quaternary_color,
  tertiary_color,
} from 'utils/Variables';

export const NavbarLink = styled(Link)<{ children: string }>`
    text-decoration: none;
    color: black;
    font-weight: ${font_weight_text};
    font-size: ${font_size_text};
}

`;
export const NavbarTemplate = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0;
  padding: 1%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    to bottom,
    ${quaternary_color},
    ${tertiary_color}
  );
  list-style: none;
  @media (max-width: 760px) {
    display: flex;

    li {
      padding: 1%;
    }
  }
`;
