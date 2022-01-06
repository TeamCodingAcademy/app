import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Description, Title } from './task.styled';
import { getTask } from '~/redux/courses/selectors';
import NotFound from '~/pages/notFound';
import Editor from '~/components/editor';

import * as Locale from '~/locales/localeKeys';

const Task = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const id = pathname.substring(pathname.lastIndexOf('/') + 1);
  const task = useSelector(getTask(id));

  const [value, setValue] = useState('1');

  if (!task) return <NotFound />;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { title, description, criteria, sandbox, usefulLinks } = task;
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={t(Locale.task.requirements)} value="1" />
            <Tab label={t(Locale.task.hints)} value="2" />
            {sandbox && <Tab label={t(Locale.task.example)} value="3" />}
          </TabList>
        </Box>
        <TabPanel value="1">
          <Title>{t(title)}</Title>
          <Description>{t(description)}</Description>
          <ul>
            {criteria.map((c, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i}>{t(c)}</li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel value="2">
          <h2>{t(Locale.task.links)}</h2>
          {usefulLinks?.map((l, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <a href={l} target="_blank" rel="noreferrer nofollow noopener">
                {l}
              </a>
            </li>
          ))}
        </TabPanel>
        <TabPanel value="3">
          <Editor sandboxName={sandbox} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Task;
