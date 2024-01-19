import {createGlobalStyle} from 'styled-components';
import InterRoman from '@fonts/Inter-roman.var.woff2'
import InterItalic from '@fonts/Inter-italic.var.woff2'


export const KitFontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: local('Inter'), url(${InterRoman}) format('woff2');
        font-named-instance: 'Regular';
    }

    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 100 900;
        font-display: swap;
        src: local('Inter'), url(${InterItalic}) format('woff2');
        font-named-instance: 'Italic';
    }
`;
