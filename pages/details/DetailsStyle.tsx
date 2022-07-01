import styled from 'styled-components';
import { font_weight_text, tertiary_color } from 'utils/Variables';

export const RecomendationsSection = styled.section`
  margin-bottom: 20px;
`;
export const RecomendationsVisualize = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  flex-wrap: wrap;
`;
export const RecomendationsProducts = styled.figure`
  img {
    width: 14em;
    height: 16em;
  }
  &:hover img {
    cursor: pointer;
    transform: scale(0.97);
    transition: 0.5s all;
    border-left: 1px solid rgba(#00000023, 0.9);
    border-right: 1px solid rgba(#00000023, 0.9);
  }
`;
export const RecomendationsProductImages = styled.img`
  &:hover {
    cursor: pointer;
    transform: scale(0.97);
    transition: 0.5s all;
    border-left: 1px solid rgba(#00000023, 0.9);
    border-right: 1px solid rgba(#00000023, 0.9);
  }
`;

export const DetailsSection = styled.section`
  height: auto;
  width: 100%;
  padding: 2%;
  display: flex;
  box-sizing: border-box;
`;

export const DetailsGrid = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: repeat(4, 0.5fr) 0.2fr;
  grid-template-rows: 1fr 0.5fr;
  column-gap: 5%;
  padding: 1%;

  @media screen and (max-width: 1278px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.5fr 0.5fr;
    row-gap: 3%;
    margin-left: 35px;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 0.5fr 1fr;
    row-gap: 3%;
  }
`;

export const DetailsInfo = styled(DetailsSection)`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  font-weight: ${font_weight_text};

  h1,
  p {
    padding: 0 1% 0 1%;
    margin-bottom: 5px;
    margin-top: 0;
  }
`;
export const DetailsVisualize = styled.img`
  width: auto;
  height: 14em;
  &:hover {
    transform: rotateY(180deg);
  }
`;
export const DetailsModel = styled.div`
  @media screen and (max-width: 845px) {
    text-align: center;
  }
`;
export const DetailsImage = styled.img`
  width: auto;
  height: 29em;
  justify-content: center;

  &:hover {
    transform: scale(0.97);
    transition: 0.5s all;
    border-left: 1px solid rgba(#00000023, 0.9);
    border-right: 1px solid rgba(#00000023, 0.9);
  }
`;

export const ButtonsSize = styled.fieldset`
  border: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  & label {
    color: black;
    font-size: 0.1px;
  }
  & input {
    display: none;
  }
`;

export const DetailsButtonSize = styled.div`
  outline: red 1px solid;
  content: '';
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 3px;

  & input + label:before {
    border: none;
    cursor: pointer;
    border: 2px solid ${tertiary_color};
    background: url() no-repeat center;
    background-size: contain;
  }
  & input:checked + label:before {
    background-color: rgba(${tertiary_color}, 0.5);
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

