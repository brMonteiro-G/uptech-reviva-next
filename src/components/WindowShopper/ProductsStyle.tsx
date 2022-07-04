import styled from 'styled-components';

export const GridProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 0.2fr);
  grid-template-rows: 26em;
  align-items: center;
  justify-content: center;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 2fr); 
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 2fr);
  } 
`;

export const DivImageButtons = styled.div`
  box-sizing: border-box;
  width: 285px;

  img {
    box-sizing: border-box;
    border: 1px solid #c4c4c4;
    border-radius: 1%;
    padding: 4%;
    transition: 1s all;
  }
  img:hover {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  }
`;

export const ImageProducts = styled.img`
  width: 18em;
  height: 23em;
  box-sizing: border-box;
  &:hover {
    cursor:pointer;
    transform: scale(0.97);
    transition: 0.5s all;
    border-left: 1px solid rgba(#00000023, 0.9);
    border-right: 1px solid rgba(#00000023, 0.9);
  }
`;

export const ProductInfo = styled.div`
  font-weight: 400;
  font-size: calc(${(props)=> props.theme.fonts.font_size_text} / 0.9);
  margin: 0 auto;
  @media (max-width: 1200px) {
    font-size: 3vw;
}
`;

export const ProductName = styled(ProductInfo)`
  color: black;
 
`;
export const ProductPrice = styled(ProductInfo)`
  color: #666666;

  @media (max-width: 1600px) {
    text-align: center;
  }
 
`;

export const BoxModel = styled.div`
  box-sizing: border-box;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 22em 1em 1em 3em;
  align-items: center;
  row-gap: 5%;
  width: 26em;
  height: 30em;
  padding: 4em;
  padding-top: 0;
  margin-bottom: 4em;
  margin-top: 4em;

  &:hover {
    transition: 0.2s all;
    transform: scale(1.1);
  }

  @media (max-width: 1600px) {
    display: flex;
    width: 100%;
  }
  @media (max-width: 700px) {
    flex-direction:column;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;
