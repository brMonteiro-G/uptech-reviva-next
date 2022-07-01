import styled from 'styled-components';

export const LeftPost = styled.article`
  width: 100%;

  img {
    height: 37em;
    width: 86%;
  }
  @media (max-width: 900px) {
    width: 95vw;
  }
`;

export const RightPost = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightArticle = styled.article`
  align-items: center;
  img {
    height: 17em;
    width: 86%;
  }
`;
