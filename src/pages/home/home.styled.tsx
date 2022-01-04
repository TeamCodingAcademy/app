import styled from 'styled-components';

import laptop from '../../images/laptop.jpg';

export const Container = styled.div`
  background: center no-repeat url(${laptop});
  background-size: cover;
  display: flex;
`;

export const DescriptionContainer = styled.div`
  width: 70%;
  min-width: 300px;
  border-radius: 0 0 80% 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin-right: 7px;
  color: white;
`;

export const Mark = styled.h1`
  color: limegreen;
`;
