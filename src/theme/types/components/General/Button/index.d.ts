export interface IKitButtonThemePropeties {
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

export interface IKitButtonTheme {
    typography: {
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
        iconSize: {
            xs: string;
            s: string;
            m: string;
            l: string;
            xl: string;
        };
    };
    border: {
        radius: {
            default: number;
            compact: number;
        };
    };
}

export interface IKitButtonCssTokens {
    typography: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        iconSize: {
            xs: string;
            s: string;
            m: string;
            l: string;
            xl: string;
        };
    };
    border: {
        radius: {
            default: string;
            compact: string;
        };
    };
}
