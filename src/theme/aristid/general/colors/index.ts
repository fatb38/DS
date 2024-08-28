import {IKitColorsPalette, IKitColorsPaletteCssTokens} from '@theme/types/general/colors';

export const colorsPalette: IKitColorsPalette = {
    primary: {
        50: '#F4F7FF',
        100: '#E6EDFF',
        200: '#97B9FD',
        300: '#5784FC',
        400: '#0141EC',
        500: '#0B37AF',
        600: '#062064',
        700: '#010819'
    },
    neutral: {
        black: '#000000',
        white: '#FFFFFF',
        grey: {
            100: '#F3F7F9',
            200: '#D1DFE9',
            300: '#AFC9D9',
            400: '#8DB1C8',
            500: '#637C8D',
            600: '#00254E',
            700: '#0E1214'
        }
    },
    secondary: {
        warning: {
            100: '#FFF4E6',
            200: '#FFD8A8',
            300: '#FFA94D',
            400: '#FF922B',
            500: '#FD7E14',
            600: '#F76707',
            700: '#360F00'
        },
        error: {
            100: '#FFFAFA',
            200: '#FFDFE1',
            300: '#FF6169',
            400: '#EB0D18',
            500: '#B10710',
            600: '#8B1117',
            700: '#4C0307'
        },
        success: {
            100: '#ECFBF7',
            200: '#AFF1DD',
            300: '#6CE5C3',
            400: '#00D9A9',
            500: '#009876',
            600: '#025744',
            700: '#051511'
        }
    },
    tertiary: {
        yellow: {
            100: '#FFF9EC',
            200: '#FEE7B1',
            300: '#FDD671',
            400: '#FFC100',
            500: '#B08919',
            600: '#654E11',
            700: '#191405'
        },
        pink: {
            100: '#FDF0F7',
            200: '#F8C0DF',
            300: '#F08FC6',
            400: '#E75DAD',
            500: '#A34179',
            600: '#5D2645',
            700: '#170911'
        }
    }
};

const base = '--general-colors';

export const kitColorsPaletteCssTokens: IKitColorsPaletteCssTokens = {
    primary: {
        50: `${base}-primary-50`,
        100: `${base}-primary-100`,
        200: `${base}-primary-200`,
        300: `${base}-primary-300`,
        400: `${base}-primary-400`,
        500: `${base}-primary-500`,
        600: `${base}-primary-600`,
        700: `${base}-primary-700`
    },
    neutral: {
        black: `${base}-neutral-black`,
        white: `${base}-neutral-white`,
        grey: {
            100: `${base}-neutral-grey-100`,
            200: `${base}-neutral-grey-200`,
            300: `${base}-neutral-grey-300`,
            400: `${base}-neutral-grey-400`,
            500: `${base}-neutral-grey-500`,
            600: `${base}-neutral-grey-600`,
            700: `${base}-neutral-grey-700`
        }
    },
    secondary: {
        warning: {
            100: `${base}-secondary-warning-100`,
            200: `${base}-secondary-warning-200`,
            300: `${base}-secondary-warning-300`,
            400: `${base}-secondary-warning-400`,
            500: `${base}-secondary-warning-500`,
            600: `${base}-secondary-warning-600`,
            700: `${base}-secondary-warning-700`
        },
        error: {
            100: `${base}-secondary-error-100`,
            200: `${base}-secondary-error-200`,
            300: `${base}-secondary-error-300`,
            400: `${base}-secondary-error-400`,
            500: `${base}-secondary-error-500`,
            600: `${base}-secondary-error-600`,
            700: `${base}-secondary-error-700`
        },
        success: {
            100: `${base}-secondary-success-100`,
            200: `${base}-secondary-success-200`,
            300: `${base}-secondary-success-300`,
            400: `${base}-secondary-success-400`,
            500: `${base}-secondary-success-500`,
            600: `${base}-secondary-success-600`,
            700: `${base}-secondary-success-700`
        }
    },
    tertiary: {
        yellow: {
            100: `${base}-tertiary-yellow-100`,
            200: `${base}-tertiary-yellow-200`,
            300: `${base}-tertiary-yellow-300`,
            400: `${base}-tertiary-yellow-400`,
            500: `${base}-tertiary-yellow-500`,
            600: `${base}-tertiary-yellow-600`,
            700: `${base}-tertiary-yellow-700`
        },
        pink: {
            100: `${base}-tertiary-pink-100`,
            200: `${base}-tertiary-pink-200`,
            300: `${base}-tertiary-pink-300`,
            400: `${base}-tertiary-pink-400`,
            500: `${base}-tertiary-pink-500`,
            600: `${base}-tertiary-pink-600`,
            700: `${base}-tertiary-pink-700`
        }
    }
};
