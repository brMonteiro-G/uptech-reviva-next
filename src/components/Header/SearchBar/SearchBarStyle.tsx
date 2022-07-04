import styled from 'styled-components';

export const SearchBarTemplate = styled.fieldset`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  width: 96%;
  @media screen and (max-width: 554px) {
    display: block;
    text-align: center;
  }
`;

export const SearchBarButton = styled.button`
  background-image: url(\'/images/search.png\');
  background-color:${(props)=>props.theme.colors.tertiary_color};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 55px;
  width: 8%;
  height: 3em;
  border: none;

  &:hover {
    cursor:pointer;
    transition: 0.5s all ease-in;
    transform: scale(1.1);
  }
  @media screen and (max-width: 554px) {
    width: 50%;
  }
`;

export const SearchBarInput = styled.input`
  width: 90%;
  height: 2em;
  &:placeholder {
    font-size: 1em;
  }
`;
