import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Container, TasksContainer, Description, Title } from './task.styled';
import { getTask } from '~/redux/courses/selectors';
import NotFound from '~/pages/notFound';

const Task = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const id = pathname.substring(pathname.lastIndexOf('/') + 1);
  const task = useSelector(getTask(id));
  if (!task) return <NotFound />;

  const { title, description, criteria } = task;
  return (
    <Container>
      <TasksContainer>
        <Title>{t(title)}</Title>
        <Description>{t(description)}</Description>
        <ul>
          {criteria.map((c, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>{t(c)}</li>
          ))}
        </ul>
      </TasksContainer>
    </Container>
  );
};

export default Task;
