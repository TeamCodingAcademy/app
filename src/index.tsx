/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@mui/material';

import { createi18n } from './i18n';

import { initClient } from './api/rest/apiBase';

import { App } from './app/app';
import history from './app/history';
import store from './app/store';
import ErrorBoundary from '~/shared/errorBoundary';
import GlobalStyles from './styles/globalStyle';
import { theme } from '~/styles/theme';

initClient(store);
createi18n('en');

const Root = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ConnectedRouter>
      </ErrorBoundary>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
