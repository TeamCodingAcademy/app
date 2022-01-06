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
          sandbox: 'weathered-sunset-b5qps',
        },
        {
          id: '11',
          title: 'Install Material UI library',
          description:
            'Now you need to choose how you are going to style your components. You may choose any options. In order to make the task simpler we will use the library with the components.',
          criteria: [
            'Styling approach has been selected. You may use css / scss, styled-components, tailwind, react-bootstrap, etc. If you are new to css, I recommend to use Material UI.',
            'The components from Material are available in the project, if you have selected Material.',
          ],
          usefulLinks: ['https://mui.com/getting-started/installation/'],
        },
        {
          id: '2',
          title: 'Create header for your website',
          description: 'The goal is to create your first component and implement first styling.',
          criteria: [
            'Header component is created in the separate file',
            'Header is displayed on each page',
            'Header includes a logo (pick any image or text name) that is the link to the main page',
            'Header includes Login button',
          ],
          sandbox: 'bitter-hooks-2ovi5',
          usefulLinks: ['https://mui.com/components/app-bar/'],
        },
        {
          id: '21',
          title: 'Create theming',
          description: 'Add colors and fonts for styling the components according to design',
          criteria: [
            'Header should use colors and fonts according to the design',
            'Buttons should reflect automatically two major theming colors',
            'The changes can be easily implemented for any component',
          ],
          sandbox: 'twilight-browser-glbrl',
          usefulLinks: [
            'https://mui.com/customization/theming/',
            'https://fonts.google.com/specimen/Cairo#standard-styles',
          ],
        },
        {
          id: '3',
          title: 'Display the author data',
          description: 'Add a card with some text and a photo instead of the boilerplate React text',
          criteria: [
            'The code of the author data component is in the separate file',
            'The text and the image are displayed under the header',
          ],
          sandbox: 'unruffled-meninsky-9y1cp',
          usefulLinks: ['https://mui.com/components/cards/'],
        },
        {
          id: '4',
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
