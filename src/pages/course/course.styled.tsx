import styled from 'styled-components';
import work from '../../images/work.jpg';

export const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 1024px) {
    & {
      flex-direction: column-reverse;
    }
  }
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2vw;
  max-width: 900px;
  flex: 2;
  overflow: auto;
`;

export const DescriptionContainer = styled.div`
  background: linear-gradient(to top, rgba(2, 0, 36, 0.7), rgba(13, 13, 180, 0.1)), center no-repeat url(${work});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  color: white;
  padding: 10vw;
`;

export const Title = styled.h1``;

export const Description = styled.p``;
