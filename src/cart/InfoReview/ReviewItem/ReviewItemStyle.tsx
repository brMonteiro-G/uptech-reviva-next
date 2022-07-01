import styled from 'styled-components';

export const ReviewItemTemplate = styled.div`
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  right: 3.2em;

  input {
    width: 25px;
  }

  button {
    background-color: $tertiary-color;
    border-radius: 4px;
    border: none;
    width: 20px;
  }

  button:hover {
    color: white;
    cursor: pointer;
  }
`;

export const ImageProductTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;

export const ImageProduct = styled.img`
  width: 14em;
  height: 16em;
  margin-top: 3em;
`;

