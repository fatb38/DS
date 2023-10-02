import {KitColorKeys} from '../../../general/colors/index';

interface IKitButtonThemeStateColor {
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

export interface IKitButtonThemePropeties {
    colors: {
        typography: Omit<IKitButtonThemeStateColor, 'danger'> & {
            danger: Omit<IKitButtonThemeStateColor['danger'], 'hover' | 'active' | 'focus'>;
        } & {
            iconCheck?: string;
            ghost?: string;
        };
        background: IKitButtonThemeStateColor & {ghost?: string};
        border: IKitButtonThemeStateColor;
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

export type KitColoredSegmentedButtonThemes = {[key in KitColorKeys]: IKitButtonThemePropeties};

export interface IKitButtonTheme {
    typography: {
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
    };
    border: {
        radius: number;
    };
    primary: IKitButtonThemePropeties;
    default: IKitButtonThemePropeties;
    text: IKitButtonThemePropeties;
    link: IKitButtonThemePropeties;
    segmented: {
        default: IKitButtonThemePropeties;
    } & KitColoredSegmentedButtonThemes;
}
