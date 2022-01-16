import { ActionType, createReducer } from 'typesafe-actions';
import * as Actions from './actions';

export interface CoursesState {
  courses: Record<string, Models.Course>;
}

export const initialState: CoursesState = {
  courses: {
    1: {
      id: '1',
      title: 'Online Blog with comments',
      description:
        'This is a front-end course that will help you to create React SPA (single-page application) from scratch. At the end you will have your own working forum website in your portfolio.',
      link: 'https://uowcq.csb.app/',
      tasks: [
        {
          id: '1',
          title: 'Initial setup of the project',
          description:
            'The goal is to create a repository with the code template that works locally. For the simplicity you can just create a new sandbox in any online editor like CodeSandbox and do not mess with Git.',
          criteria: [
            'New repository is created in your Git account',
            'SSH key is used for connection to Git account',
            'You can access the application on http://localhost:3000/',
            'Typescript is used (optional, examples will use Typescript)',
          ],
          sandbox: 'weathered-sunset-b5qps',
        },
        {
          id: '2',
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
          id: '3',
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
          id: '4',
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
          id: '5',
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
          id: '6',
          title: 'Fetch the posts',
          description:
            'Now you can make the first API request. For now it is fake data, but if you want you may use your API or local data as well to show your own posts.',
          criteria: [
            'The separate Posts component is created',
            'Each time this component is mounted, the list of the posts is fetched from API (GET https://jsonplaceholder.typicode.com/posts)',
            'The posts are displayed in console and stored in the state',
            'The typing for the object received is created',
          ],
          sandbox: 'snowy-meadow-77tox',
          usefulLinks: [
            'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
            'https://www.typescriptlang.org/docs/handbook/namespaces.html',
            'https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html',
          ],
        },
        {
          id: '7',
          title: 'Display the posts',
          description: 'Create a component for a post and show the list of posts.',
          criteria: [
            'The posts are displayed on http://localhost:3000/ under the Author info',
            'Each post contains the title, text and Read More button',
            'The posts are aligned nicely no matter what screen size is',
          ],
          sandbox: 'jovial-sound-bcbbs',
        },
        {
          id: '8',
          title: 'Show loading progress',
          description: 'While the server request is being processing, the user should see the progress.',
          criteria: [
            'Show loading spinner during the fetching',
            'Spinner should be hidden as soon as result is available',
            'Show error if it is a case',
          ],
          sandbox: 'lucid-austin-cdknr',
          usefulLinks: [
            'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally',
            'https://mui.com/components/progress/',
          ],
        },
        {
          id: '9',
          title: 'Add posts splitting',
          description:
            "Since the server returns all posts at once we can use it and create pagination locally. So we can determine how many posts we want to display at one time (let's say 20), remember what page is displayed and show only this part.",
          criteria: [
            'Store all of the posts in the state',
            'Store the current page number (only the first page for now)',
            'Show the posts relying on the current page number',
          ],
          sandbox: 'quirky-cdn-hsjss',
          usefulLinks: ['https://en.wikipedia.org/wiki/Pagination'],
        },
        {
          id: '10',
          title: 'Add pagination',
          description: 'Use the logic from the previous task and add buttons to control the page displayed',
          criteria: ['User can click and display the next and previous pages with posts'],
          sandbox: 'elegant-leakey-uowcq',
          usefulLinks: ['https://mui.com/components/pagination/'],
        },
      ],
    },
  },
};

type ActionTypes = ActionType<typeof Actions>;

export const coursesReducer = createReducer<CoursesState, ActionTypes>(initialState);
