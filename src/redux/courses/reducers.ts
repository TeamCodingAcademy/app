import { ActionType, createReducer } from 'typesafe-actions';
import * as Actions from './actions';

export interface CoursesState {
  courses: Record<string, Models.Course>;
}

export const initialState: CoursesState = {
  courses: {
    1: {
      id: '1',
      title: 'Online Forum like Reddit',
      description:
        'This is a front-end course that will help you to create React SPA (single-page application) from scratch. At the end you will have your own working forum website in your portfolio.',
      tasks: [
        {
          id: '1',
          title: 'Initial setup of the project',
          description: 'The goal is to create a repository with the code template that works locally.',
          criteria: [
            'New repository is created in your Git account',
            'SSH key is used for connection to Git account',
            'You can access the application on http://localhost:3000/',
            'Typescript is used (optional, examples will use Typescript)',
          ],
        },
        {
          id: '2',
          title: 'Create header for your website',
          description: 'The goal is to create your first component and implement first styling.',
          criteria: [
            'Header component is created in the separate file',
            'Header is displayed on each page',
            'Styling approach has been selected. You may use css / scss, styled-components, tailwind, react-bootstrap, etc. If you are new to css, I recommend to use Material UI.',
            'Header includes a logo (pick any image or text name) that is the link to the main page',
            'Header includes Login button',
            'Header includes Create post button that is the link to the "create" page',
            'Header includes Profile button that is the link to the "profile" page',
          ],
        },
        {
          id: '3',
          title: 'Display the posts',
          description: 'Now you can make the first API request and show the list of posts.',
          criteria: [
            'Several components have been created: the main page which fetches posts and is connect to the router, List and Post components',
            'The posts are fetched from the server',
            'The posts are displayed on http://localhost:3000/',
            'For each post the title, short preview (part of the text), date and author should be displayed',
          ],
        },
      ],
    },
  },
};

type ActionTypes = ActionType<typeof Actions>;

export const coursesReducer = createReducer<CoursesState, ActionTypes>(initialState);
