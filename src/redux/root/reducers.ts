import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';

import { History } from 'history';
import { authReducer, AuthState } from '../auth/reducers';
import { coursesReducer, CoursesState } from '../courses/reducers';

export interface RootStateType {
  router: RouterState;
  auth: AuthState;
  courses: CoursesState;
}

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    courses: coursesReducer,
  });
