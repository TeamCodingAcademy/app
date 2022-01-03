import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Container, TasksContainer, Description, Title } from './course.styled';
import { getCourse } from '~/redux/courses/selectors';
import ListItem from '~/components/listItem';

const Course = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const id = pathname.substring(pathname.lastIndexOf('/') + 1);
  const { title, description, tasks } = useSelector(getCourse(id));
  return (
    <Container>
      <TasksContainer>
        <Title>{t(title)}</Title>
        <Description>{t(description)}</Description>
        {tasks.map(task => (
          <Link to={`/task/${task.id}`}>
            <ListItem task={task} key={task.id} />
          </Link>
        ))}
      </TasksContainer>
    </Container>
  );
};

export default Course;
