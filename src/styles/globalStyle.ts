import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';

export default createGlobalStyle`
    body, #root {
        margin: 0;
        min-width: 100vw;
        min-height: 100vh;
        font-family: ${Fonts.primaryRegular};
    }
    
    a {
      text-decoration: none;
    }

    @media only screen and (min-device-width: 1024px) {
        html {
            scroll-behavior: smooth;
        }
    }
`;
