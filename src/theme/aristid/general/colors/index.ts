import {IKitColorsPalette, IKitColorsPaletteCssTokens} from '@theme/types/general/colors';

export const colorsPalette: IKitColorsPalette = {
    primary: {
        blue50: '#F4F7FF',
        blue100: '#E6EDFF',
        blue200: '#97B9FD',
        blue300: '#5784FC',
        blue400: '#0141EC',
        blue500: '#0B37AF',
        blue600: '#062064',
        blue700: '#010819'
    },
    neutral: {
        black: '#000000',
        white: '#FFFFFF',
        grey: {
            grey100: '#F3F7F9',
            grey200: '#D1DFE9',
            grey300: '#AFC9D9',
            grey400: '#8DB1C8',
            grey500: '#637C8D',
            grey600: '#00254E',
            grey700: '#0E1214'
        }
    },
    secondary: {
        warning: {
            orange100: '#FFF4E6',
            orange200: '#FFD8A8',
            orange300: '#FFA94D',
            orange400: '#FF922B',
            orange500: '#FD7E14',
            orange600: '#F76707',
            orange700: '#360F00'
        },
        error: {
            red100: '#FFFAFA',
            red200: '#FFDFE1',
            red300: '#FF6169',
            red400: '#EB0D18',
            red500: '#B10710',
            red600: '#8B1117',
            red700: '#4C0307'
        },
        success: {
            green100: '#ECFBF7',
            green200: '#AFF1DD',
            green300: '#6CE5C3',
            green400: '#00D9A9',
            green500: '#009876',
            green600: '#025744',
            green700: '#051511'
        }
    },
    tertiary: {
        yellow: {
            yellow100: '#FFF9EC',
            yellow200: '#FEE7B1',
            yellow300: '#FDD671',
            yellow400: '#FFC100',
            yellow500: '#B08919',
            yellow600: '#654E11',
            yellow700: '#191405'
        },
        pink: {
            pink100: '#FDF0F7',
            pink200: '#F8C0DF',
            pink300: '#F08FC6',
            pink400: '#E75DAD',
            pink500: '#A34179',
            pink600: '#5D2645',
            pink700: '#170911'
        }
    }
};

const base = '--general-colors';

export const kitColorsPaletteCssTokens: IKitColorsPaletteCssTokens = {
    primary: {
        blue50: `${base}-primary-blue50`,
        blue100: `${base}-primary-blue100`,
        blue200: `${base}-primary-blue200`,
        blue300: `${base}-primary-blue300`,
        blue400: `${base}-primary-blue400`,
        blue500: `${base}-primary-blue500`,
        blue600: `${base}-primary-blue600`,
        blue700: `${base}-primary-blue700`
    },
    neutral: {
        black: `${base}-neutral-black`,
        white: `${base}-neutral-white`,
        grey: {
            grey100: `${base}-neutral-grey-grey100`,
            grey200: `${base}-neutral-grey-grey200`,
            grey300: `${base}-neutral-grey-grey300`,
            grey400: `${base}-neutral-grey-grey400`,
            grey500: `${base}-neutral-grey-grey500`,
            grey600: `${base}-neutral-grey-grey600`,
            grey700: `${base}-neutral-grey-grey700`
        }
    },
    secondary: {
        warning: {
            orange100: `${base}-secondary-warning-orange100`,
            orange200: `${base}-secondary-warning-orange200`,
            orange300: `${base}-secondary-warning-orange300`,
            orange400: `${base}-secondary-warning-orange400`,
            orange500: `${base}-secondary-warning-orange500`,
            orange600: `${base}-secondary-warning-orange600`,
            orange700: `${base}-secondary-warning-orange700`
        },
        error: {
            red100: `${base}-secondary-error-red100`,
            red200: `${base}-secondary-error-red200`,
            red300: `${base}-secondary-error-red300`,
            red400: `${base}-secondary-error-red400`,
            red500: `${base}-secondary-error-red500`,
            red600: `${base}-secondary-error-red600`,
            red700: `${base}-secondary-error-red700`
        },
        success: {
            green100: `${base}-secondary-success-green100`,
            green200: `${base}-secondary-success-green200`,
            green300: `${base}-secondary-success-green300`,
            green400: `${base}-secondary-success-green400`,
            green500: `${base}-secondary-success-green500`,
            green600: `${base}-secondary-success-green600`,
            green700: `${base}-secondary-success-green700`
        }
    },
    tertiary: {
        yellow: {
            yellow100: `${base}-tertiary-yellow-yellow100`,
            yellow200: `${base}-tertiary-yellow-yellow200`,
            yellow300: `${base}-tertiary-yellow-yellow300`,
            yellow400: `${base}-tertiary-yellow-yellow400`,
            yellow500: `${base}-tertiary-yellow-yellow500`,
            yellow600: `${base}-tertiary-yellow-yellow600`,
            yellow700: `${base}-tertiary-yellow-yellow700`
        },
        pink: {
            pink100: `${base}-tertiary-pink-pink100`,
            pink200: `${base}-tertiary-pink-pink200`,
            pink300: `${base}-tertiary-pink-pink300`,
            pink400: `${base}-tertiary-pink-pink400`,
            pink500: `${base}-tertiary-pink-pink500`,
            pink600: `${base}-tertiary-pink-pink600`,
            pink700: `${base}-tertiary-pink-pink700`
        }
    }
};
