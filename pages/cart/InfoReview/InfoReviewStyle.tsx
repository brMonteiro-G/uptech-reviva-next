import styled from 'styled-components';

export const InfoReviewTemplate = styled.div`
  display: grid;
  grid-template-columns: 3fr;
  grid-template-rows: 1fr auto;
  padding: 0 1%;
  width:100%;
`;

export const InfoReviewTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const InfoReviewContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
