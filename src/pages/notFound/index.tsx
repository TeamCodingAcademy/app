import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container } from './notFound.styled';
import { Routes } from '~/app/routes';
import { path } from '~/utils';

const NotFound: React.FC = () => (
  <Container>
    <h1>404</h1>
    <h3>Unfortunately, we have not found the page.</h3>
    <Link to={path(Routes.home)}>
      <Button variant="contained" size="large">
        Home page
      </Button>
    </Link>
  </Container>
);

export default NotFound;
