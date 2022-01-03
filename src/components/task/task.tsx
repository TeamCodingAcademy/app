import React from 'react';
import { useTranslation } from 'react-i18next';

import Paper from '@mui/material/Paper';
import { Container, Title } from './task.styled';

type Props = {
  task: Models.Task;
};

const Task: React.FC<Props> = ({ task }) => {
  const { t } = useTranslation();
  return (
    <Paper elevation={3}>
      <Container>
        <Title>{t(task.title)}</Title>
      </Container>
    </Paper>
  );
};

export default Task;
