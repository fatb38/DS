import {KitColorKeys, KitColorsPalette} from '../../../general/colors/index';

export interface KitButtonThemeAntd {
    typography: {
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
    };
    border: {
        radius: number;
    };
}

interface KitButtonThemeStateColor {
    default: string;
    hover: string;
    active: string;
    focus: string;
    disabled: string;
    danger: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
    };
}

export interface KitButtonThemeStyled {
    colors: {
        typography: Omit<KitButtonThemeStateColor, 'danger'> & {
            danger: Omit<KitButtonThemeStateColor['danger'], 'hover' | 'active' | 'focus'>;
        } & {
            iconCheck?: string;
            ghost?: string;
        };
        background: KitButtonThemeStateColor & {ghost?: string};
        border: KitButtonThemeStateColor;
    };
    typography: {
        fontWeight: string | number;
        iconSize: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
        };
    };
    compact: {
        border: {
            radius: number;
        };
    };
}

export type KitColoredSegmentedButtonThemesStyled = {[key in KitColorKeys]: KitButtonThemeStyled};

export type KitButtonTheme = KitButtonThemeAntd & {
    primary: KitButtonThemeStyled;
    default: KitButtonThemeStyled;
    link: KitButtonThemeStyled;
    segmented: {
        default: KitButtonThemeStyled;
    } & KitColoredSegmentedButtonThemesStyled;
};
