import styled from 'styled-components';
import { quaternary_color, tertiary_color } from 'utils/Variables';

export const BannerTemplate = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background: linear-gradient(
    to bottom,
    ${quaternary_color},
    ${tertiary_color}
  );
  height: 19em;
  width: 100%;
  border-radius: 1%;
  margin-top: 4em;
`;

export const BannerTextContainer = styled.ul`
  font-size: 1.6em;
  font-weight: 300;
  margin: 1.7em auto;
  text-align: justify;
  margin-bottom: 0;
`;

export const BannerText = styled.li`
  width: 100%;
  height: 50px;
  display: inline-block;
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 0;
  }
`;
