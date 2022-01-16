import React from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { ProcessScreenContainer, StepContainer, StepCardContent, ArrowRight } from './home.styled';
import { home } from '~/locales/localeKeys';

const steps = [
  {
    id: '1',
    title: 'Take some courses',
    description:
      "Learn basics of the web technologies the way you like. You'll need knowledge of HTML, CSS, JS, React.",
  },
  {
    id: '2',
    title: 'Submit the application for Team Coding Academy',
    description: 'You can login and use this platform to track your progress. It is free.',
  },
  {
    id: '3',
    title: 'Start creating a project with your team',
    description: 'You can start your practise with the team or on your own task by task.',
  },
  {
    id: '4',
    title: 'Use your project in portfolio applying for jobs',
    description: 'Your CV will stand out with the link to GitHub and learned the whole delivery process.',
  },
];

const ProcessScreen = () => {
  const { t } = useTranslation();
  return (
    <ProcessScreenContainer>
      <Typography variant="h3" mb={5} color="white">
        {t(home.howWorks)}
      </Typography>
      <StepContainer>
        {steps.map((step, i) => (
          <>
            <Card key={step.id}>
              <StepCardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {t(step.title)}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  {t(step.description)}
                </Typography>
              </StepCardContent>
            </Card>
            {i < steps.length - 1 && <ArrowRight />}
          </>
        ))}
      </StepContainer>
    </ProcessScreenContainer>
  );
};

export default ProcessScreen;
