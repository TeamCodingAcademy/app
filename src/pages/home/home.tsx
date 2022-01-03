import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import { Container, Title, DescriptionContainer, TitleContainer, Mark } from './home.styled';
import * as Locale from '~/locales/localeKeys';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <DescriptionContainer>
        <TitleContainer>
          <Title>{t(Locale.home.title)}</Title>
          <Mark>{t(Locale.home.project)} |</Mark>
        </TitleContainer>
        <Button variant="contained" size="large">
          {t(Locale.home.start)}
        </Button>
      </DescriptionContainer>
    </Container>
  );
};

export default Home;
