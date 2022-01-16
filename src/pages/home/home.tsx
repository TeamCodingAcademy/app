import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './home.styled';
import IntroScreen from '~/pages/home/introScreen';
import ProcessScreen from '~/pages/home/processScreen';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <IntroScreen />
      <ProcessScreen />
    </Container>
  );
};

export default Home;
