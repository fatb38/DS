import {IKitColorsPalette, IKitColorsPaletteCssTokens} from '@theme/types/general/colors';

export const colorsPalette: IKitColorsPalette = {
    primary: {
        primary50: '#F4F7FF',
        primary100: '#E7EDFF',
        primary200: '#97B9FD',
        primary300: '#5784FC',
        primary400: '#0141EC',
        primary500: '#0B37AF',
        primary600: '#062064',
        primary700: '#010819'
    },
    neutral: {
        typography: {
            default: '#00254E',
            black: '#000000',
            black60: '#BABABA',
            white: '#FFFFFF'
        },
        background: '#F7F7F7',
        grey: {
            grey100: '#F1F3F5',
            grey200: '#DEE2E6',
            grey300: '#CED4DA',
            grey400: '#ADB5BD',
            grey500: '#868E96',
            grey600: '#495057',
            grey700: '#212529'
        },
        black: '#000000',
        white: '#FFFFFF',
        black60: '#BABABA'
    },
    secondary: {
        mediumGrey: {
            mediumGrey100: '#F3F7F9',
            mediumGrey200: '#D1DFE9',
            mediumGrey300: '#AFC9D9',
            mediumGrey400: '#8DB1C8',
            mediumGrey500: '#637C8D',
            mediumGrey600: '#00254E',
            mediumGrey700: '#0E1214'
        },
        yellow: {
            yellow100: '#FFF9EC',
            yellow200: '#FEE7B1',
            yellow300: '#FDD671',
            yellow400: '#FFC100',
            yellow500: '#B08919',
            yellow600: '#654E11',
            yellow700: '#191405'
        },
        orange: {
            orange100: '#FFF4E6',
            orange200: '#FFD8A8',
            orange300: '#FFA94D',
            orange400: '#FF922B',
            orange500: '#FD7E14',
            orange600: '#F76707',
            orange700: '#360F00'
        },
        pink: {
            pink100: '#FDF0F7',
            pink200: '#F8C0DF',
            pink300: '#F08FC6',
            pink400: '#E75DAD',
            pink500: '#A34179',
            pink600: '#5D2645',
            pink700: '#170911'
        },
        red: {
            red100: '#FFEDEB',
            red200: '#FFB7AF',
            red300: '#FF8072',
            red400: '#FF412D',
            red500: '#C22D20',
            red600: '#6F1B14',
            red700: '#1C0705'
        },
        blue: {
            blue100: '#E7EDFF',
            blue200: '#97B9FD',
            blue300: '#5784FC',
            blue400: '#0141EC',
            blue500: '#0B37AF',
            blue600: '#062064',
            blue700: '#010819'
        },
        green: {
            green100: '#ECFBF7',
            green200: '#AFF1DD',
            green300: '#6CE5C3',
            green400: '#00D9A9',
            green500: '#009876',
            green600: '#025744',
            green700: '#051511'
        }
    }
};

const base = '--general-colors';

export const kitColorsPaletteCssTokens: IKitColorsPaletteCssTokens = {
    primary: {
        primary50: `${base}-primary-primary50`,
        primary100: `${base}-primary-primary100`,
        primary200: `${base}-primary-primary200`,
        primary300: `${base}-primary-primary300`,
        primary400: `${base}-primary-primary400`,
        primary500: `${base}-primary-primary500`,
        primary600: `${base}-primary-primary600`,
        primary700: `${base}-primary-primary700`
    },
    neutral: {
        typography: {
            default: `${base}-neutral-typography-default`,
            black: `${base}-neutral-typography-black`,
            black60: `${base}-neutral-typography-black60`,
            white: `${base}-neutral-typography-white`
        },
        background: `${base}-neutral-background`,
        grey: {
            grey100: `${base}-neutral-grey-grey100`,
            grey200: `${base}-neutral-grey-grey200`,
            grey300: `${base}-neutral-grey-grey300`,
            grey400: `${base}-neutral-grey-grey400`,
            grey500: `${base}-neutral-grey-grey500`,
            grey600: `${base}-neutral-grey-grey600`,
            grey700: `${base}-neutral-grey-grey700`
        },
        black: `${base}-neutral-black`,
        white: `${base}-neutral-white`,
        black60: `${base}-neutral-black60`
    },
    secondary: {
        mediumGrey: {
            mediumGrey100: `${base}-secondary-mediumGrey-mediumGrey100`,
            mediumGrey200: `${base}-secondary-mediumGrey-mediumGrey200`,
            mediumGrey300: `${base}-secondary-mediumGrey-mediumGrey300`,
            mediumGrey400: `${base}-secondary-mediumGrey-mediumGrey400`,
            mediumGrey500: `${base}-secondary-mediumGrey-mediumGrey500`,
            mediumGrey600: `${base}-secondary-mediumGrey-mediumGrey600`,
            mediumGrey700: `${base}-secondary-mediumGrey-mediumGrey700`
        },
        yellow: {
            yellow100: `${base}-secondary-yellow-yellow100`,
            yellow200: `${base}-secondary-yellow-yellow200`,
            yellow300: `${base}-secondary-yellow-yellow300`,
            yellow400: `${base}-secondary-yellow-yellow400`,
            yellow500: `${base}-secondary-yellow-yellow500`,
            yellow600: `${base}-secondary-yellow-yellow600`,
            yellow700: `${base}-secondary-yellow-yellow700`
        },
        orange: {
            orange100: `${base}-secondary-orange-orange100`,
            orange200: `${base}-secondary-orange-orange200`,
            orange300: `${base}-secondary-orange-orange300`,
            orange400: `${base}-secondary-orange-orange400`,
            orange500: `${base}-secondary-orange-orange500`,
            orange600: `${base}-secondary-orange-orange600`,
            orange700: `${base}-secondary-orange-orange700`
        },
        pink: {
            pink100: `${base}-secondary-pink-pink100`,
            pink200: `${base}-secondary-pink-pink200`,
            pink300: `${base}-secondary-pink-pink300`,
            pink400: `${base}-secondary-pink-pink400`,
            pink500: `${base}-secondary-pink-pink500`,
            pink600: `${base}-secondary-pink-pink600`,
            pink700: `${base}-secondary-pink-pink700`
        },
        red: {
            red100: `${base}-secondary-red-red100`,
            red200: `${base}-secondary-red-red200`,
            red300: `${base}-secondary-red-red300`,
            red400: `${base}-secondary-red-red400`,
            red500: `${base}-secondary-red-red500`,
            red600: `${base}-secondary-red-red600`,
            red700: `${base}-secondary-red-red700`
        },
        blue: {
            blue100: `${base}-secondary-blue-blue100`,
            blue200: `${base}-secondary-blue-blue200`,
            blue300: `${base}-secondary-blue-blue300`,
            blue400: `${base}-secondary-blue-blue400`,
            blue500: `${base}-secondary-blue-blue500`,
            blue600: `${base}-secondary-blue-blue600`,
            blue700: `${base}-secondary-blue-blue700`
        },
        green: {
            green100: `${base}-secondary-green-green100`,
            green200: `${base}-secondary-green-green200`,
            green300: `${base}-secondary-green-green300`,
            green400: `${base}-secondary-green-green400`,
            green500: `${base}-secondary-green-green500`,
            green600: `${base}-secondary-green-green600`,
            green700: `${base}-secondary-green-green700`
        }
    }
};
