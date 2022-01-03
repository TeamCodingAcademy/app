// Core
import React, { lazy } from 'react';
import { Switch, Route } from 'react-router';

// Styled
import { Container } from '~/app/app.styled';
import { Routes } from '~/app/routes';

// Pages
import withSuspense from '~/hoc/withSuspense';
import NotFound from '~/pages/notFound';

const Home = lazy(() => import('../pages/home'));

export const App: React.FunctionComponent = () => {
  return (
    <Container>
      <Switch>
        <Route path={Routes.home} exact component={withSuspense(Home)} />

        {/* 404 Handler must come last */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Container>
  );
};
