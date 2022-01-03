// Core
import React, { lazy } from 'react';
import { Switch, Route } from 'react-router';

// Styled
import { Container } from '~/app/app.styled';
import { Routes } from '~/app/routes';

// Pages
import withSuspense from '~/hoc/withSuspense';
import NotFound from '~/pages/notFound';

// Utils
import { path } from '~/utils';

const Home = lazy(() => import('../pages/home'));
const Course = lazy(() => import('../pages/course'));
const Task = lazy(() => import('../pages/task'));

export const App: React.FunctionComponent = () => {
  return (
    <Container>
      <Switch>
        <Route path={path(Routes.home)} exact component={withSuspense(Home)} />
        <Route path={path(Routes.course)} exact component={withSuspense(Course)} />
        <Route path={path(Routes.task)} exact component={withSuspense(Task)} />

        {/* 404 Handler must come last */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Container>
  );
};
