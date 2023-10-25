import {KitColorKeys} from '../../../general/colors/index';

interface IKitButtonThemeStateColor {
    /**
     * default color
     * @TJS-type color
     */
    default: string;
    /**
     * hover color
     * @TJS-type color
     */
    hover: string;
    /**
     * active color
     * @TJS-type color
     */
    active: string;
    /**
     * focus color
     * @TJS-type color
     */
    focus: string;
    /**
     * disabled color
     * @TJS-type color
     */
    disabled: string;
    danger: {
        /**
         * default color
         * @TJS-type color
         */
        default: string;
        /**
         * hover color
         * @TJS-type color
         */
        hover: string;
        /**
         * active color
         * @TJS-type color
         */
        active: string;
        /**
         * focus color
         * @TJS-type color
         */
        focus: string;
        /**
         * disabled color
         * @TJS-type color
         */
        disabled: string;
    };
}

export interface IKitButtonThemePropeties {
    colors: {
        typography: Omit<IKitButtonThemeStateColor, 'danger'> & {
            danger: Omit<IKitButtonThemeStateColor['danger'], 'hover' | 'active' | 'focus'>;
        } & {
            /**
             * @TJS-type color
             */
            iconCheck?: string;
            /**
             * @TJS-type color
             */
            ghost?: string;
        };
        background: IKitButtonThemeStateColor & {ghost?: string};
        border: IKitButtonThemeStateColor;
    };
    typography: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontWeight: string | number;
        iconSize: {
            /**
             * @minimum 0
             */
            xs: number;
            /**
             * @minimum 0
             */
            s: number;
            /**
             * @minimum 0
             */
            m: number;
            /**
             * @minimum 0
             */
            l: number;
            /**
             * @minimum 0
             */
            xl: number;
        };
    };
    compact: {
        border: {
            /**
             * @minimum 0
             */
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
    text: {
        default: IKitButtonThemePropeties;
        grey: IKitButtonThemePropeties;
        black: IKitButtonThemePropeties;
    };
    link: IKitButtonThemePropeties;
    segmented: {
        default: IKitButtonThemePropeties;
    } & KitColoredSegmentedButtonThemes;
}
