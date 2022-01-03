import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, TasksContainer, Description, Title } from './course.styled';
import { getCourse } from '~/redux/courses/selectors';
import Task from '~/components/task';

const Course = () => {
  const { t } = useTranslation();
  const id = '1';
  const { title, description, tasks } = useSelector(getCourse(id));
  return (
    <Container>
      <TasksContainer>
        <Title>{t(title)}</Title>
        <Description>{t(description)}</Description>
        {tasks.map(task => (
          <Link to={`/course/${id}/${task.id}`}>
            <Task task={task} key={task.id} />
          </Link>
        ))}
      </TasksContainer>
    </Container>
  );
};

export default Course;
