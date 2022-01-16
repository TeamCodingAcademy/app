import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import Button from '@mui/material/Button';
import { Container, TasksContainer, Description, Title, DescriptionContainer } from './course.styled';
import { getCourse } from '~/redux/courses/selectors';
import ListItem from '~/components/listItem';
import { path } from '~/utils';
import * as Locale from '~/locales/localeKeys';

const Course = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const id = pathname.substring(pathname.lastIndexOf('/') + 1);
  const { title, description, tasks, link } = useSelector(getCourse(id));
  return (
    <Container>
      <TasksContainer>
        {tasks.map(task => (
          <Link to={path(`/task/${task.id}`)}>
            <ListItem task={task} key={task.id} />
          </Link>
        ))}
      </TasksContainer>
      <DescriptionContainer>
        <Title>{t(title)}</Title>
        <Description>{t(description)}</Description>
        <a href={link} target="_blank" rel="noreferrer">
          <Button variant="contained">{t(Locale.course.viewExample)}</Button>
        </a>
      </DescriptionContainer>
    </Container>
  );
};

export default Course;
