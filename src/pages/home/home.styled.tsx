import styled from 'styled-components';

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import laptop from '../../images/laptop.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    min-height: 100vh;
  }
`;

export const IntroScreenContainer = styled.div`
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

export const ProcessScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  overflow: hidden;
  background: linear-gradient(-30deg, transparent 30%, #855cd6 30%, #855cd6 70%, transparent 70%);
`;

export const StepContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  justify-content: center;
  align-items: stretch;
  max-width: 1000px;
  gap: 1vw;

  > * {
    flex: 1;
    text-align: center;
  }
`;

export const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;

  border-left: 15px solid white;
`;

export const StepCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
`;
