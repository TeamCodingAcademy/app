import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import { Container, Title, DescriptionContainer, TitleContainer, Mark } from './home.styled';
import * as Locale from '~/locales/localeKeys';
import { path } from '~/utils';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <DescriptionContainer>
        <TitleContainer>
          <Title>{t(Locale.home.title)}</Title>
          <Mark>{t(Locale.home.project)} |</Mark>
        </TitleContainer>
        <Link to={path('/course/1')}>
          <Button variant="contained" size="large">
            {t(Locale.home.start)}
          </Button>
        </Link>
      </DescriptionContainer>
    </Container>
  );
};

export default Home;
