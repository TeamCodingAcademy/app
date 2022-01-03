import { initialState as initialAuthState } from '../auth/reducers';
import { initialState as initialCoursesState } from '../courses/reducers';
import { RootStateType } from './reducers';

const initialState: RootStateType = {
  router: {
    location: {
      pathname: '/',
      search: '',
      hash: '',
      state: '',
      query: {},
    },
    action: 'POP',
  },
  auth: initialAuthState,
  courses: initialCoursesState,
};

export default initialState;
