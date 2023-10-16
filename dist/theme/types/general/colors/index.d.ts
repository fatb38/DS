export interface KitColorsPalette {
    primary: {
        blue100: string;
        blue200: string;
        blue300: string;
        blue400: string;
        blue500: string;
        blue600: string;
        blue700: string;
    };
    neutral: {
        typography: {
            black: string;
            black60: string;
            white: string;
        };
        background: string;
        border: string;
        gray: {
            gray100: string;
            gray200: string;
            gray300: string;
            gray400: string;
            gray500: string;
            gray600: string;
            gray700: string;
        };
    };
    secondary: {
        mediumGrey: {
            mediumGrey100: string;
            mediumGrey200: string;
            mediumGrey300: string;
            mediumGrey400: string;
            mediumGrey500: string;
            mediumGrey600: string;
            mediumGrey700: string;
        };
        yellow: {
            yellow100: string;
            yellow200: string;
            yellow300: string;
            yellow400: string;
            yellow500: string;
            yellow600: string;
            yellow700: string;
        };
        orange: {
            orange100: string;
            orange200: string;
            orange300: string;
            orange400: string;
            orange500: string;
            orange600: string;
            orange700: string;
        };
        pink: {
            pink100: string;
            pink200: string;
            pink300: string;
            pink400: string;
            pink500: string;
            pink600: string;
            pink700: string;
        };
        red: {
            red100: string;
            red200: string;
            red300: string;
            red400: string;
            red500: string;
            red600: string;
            red700: string;
        };
        blue: {
            blue100: string;
            blue200: string;
            blue300: string;
            blue400: string;
            blue500: string;
            blue600: string;
            blue700: string;
        };
        green: {
            green100: string;
            green200: string;
            green300: string;
            green400: string;
            green500: string;
            green600: string;
            green700: string;
        };
    };
}

export type KitColorKeys = keyof KitColorsPalette['secondary'];
