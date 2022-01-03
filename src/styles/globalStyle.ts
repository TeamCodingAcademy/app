import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';

export default createGlobalStyle`
    body, #root {
        margin: 0;
        min-width: 100vw;
        min-height: 100vh;
        font-family: ${Fonts.primaryRegular};
    }

    @media only screen and (min-device-width: 1024px) {
        html {
            scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
            width: 16px;
            height: 16px;
        }
        
        ::-webkit-scrollbar-thumb {
            visibility: hidden;
            background-color: rgba(0, 0, 0, 0.38);
            border-radius: 20px;
            background-clip: padding-box;
            border: 4px solid transparent;
        }
        
        *:hover > ::-webkit-scrollbar-thumb {
          visibility: visible;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            visibility: visible;
            background-color: rgba(0, 0, 0, 0.18);
        }
        ::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        * { scroll-behavior: smooth; }
    }
`;
