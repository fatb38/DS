export interface KitButtonTheme {
    font: {
        weight: string | number;
        bigIconSize: number;
    };
    color: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
        danger: {
            default: string;
            disabled: string;
        };
        iconCheck?: string;
    };
    compactBorderRadius: number;
    backgroundColor: {
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
    };
    borderColor: {
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
    };
}
export declare const primaryTheme: KitButtonTheme;
export declare const defaultTheme: KitButtonTheme;
export declare const linkTheme: KitButtonTheme;
export declare const segmentedTheme: KitButtonTheme;
export declare const segmentedGreenTheme: KitButtonTheme;
export declare const segmentedGrayTheme: KitButtonTheme;
