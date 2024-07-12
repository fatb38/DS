export interface IKitColorsPalette {
    primary: {
        /**
         * Primary 50 color
         * @TJS-type color
         */
        blue50: string;
        /**
         * Primary 100 color
         * @TJS-type color
         */
        blue100: string;
        /**
         * Primary 200 color
         * @TJS-type color
         */
        blue200: string;
        /**
         * Primary 300 color
         * @TJS-type color
         */
        blue300: string;
        /**
         * Primary 400 color
         * @TJS-type color
         */
        blue400: string;
        /**
         * Primary 500 color
         * @TJS-type color
         */
        blue500: string;
        /**
         * Primary 600 color
         * @TJS-type color
         */
        blue600: string;
        /**
         * Primary 700 color
         * @TJS-type color
         */
        blue700: string;
    };
    neutral: {
        /**
         * default black color
         * @TJS-type color
         */
        black: string;
        /**
         * default white color
         * @TJS-type color
         */
        white: string;
        grey: {
            /**
             * secondary grey 100 color
             * @TJS-type color
             */
            grey100: string;
            /**
             * secondary grey 200 color
             * @TJS-type color
             */
            grey200: string;
            /**
             * secondary grey 300 color
             * @TJS-type color
             */
            grey300: string;
            /**
             * secondary grey 400 color
             * @TJS-type color
             */
            grey400: string;
            /**
             * secondary grey 500 color
             * @TJS-type color
             */
            grey500: string;
            /**
             * secondary grey 600 color
             * @TJS-type color
             */
            grey600: string;
            /**
             * secondary grey 700 color
             * @TJS-type color
             */
            grey700: string;
        };
    };
    secondary: {
        warning: {
            /**
             * secondary warning 100 color
             * @TJS-type color
             */
            orange100: string;
            /**
             * secondary warning 200 color
             * @TJS-type color
             */
            orange200: string;
            /**
             * secondary warning 300 color
             * @TJS-type color
             */
            orange300: string;
            /**
             * secondary warning 400 color
             * @TJS-type color
             */
            orange400: string;
            /**
             * secondary warning 500 color
             * @TJS-type color
             */
            orange500: string;
            /**
             * secondary warning 600 color
             * @TJS-type color
             */
            orange600: string;
            /**
             * secondary warning 700 color
             * @TJS-type color
             */
            orange700: string;
        };
        error: {
            /**
             * secondary error 100 color
             * @TJS-type color
             */
            red100: string;
            /**
             * secondary error 200 color
             * @TJS-type color
             */
            red200: string;
            /**
             * secondary error 300 color
             * @TJS-type color
             */
            red300: string;
            /**
             * secondary error 400 color
             * @TJS-type color
             */
            red400: string;
            /**
             * secondary error 500 color
             * @TJS-type color
             */
            red500: string;
            /**
             * secondary error 600 color
             * @TJS-type color
             */
            red600: string;
            /**
             * secondary error 700 color
             * @TJS-type color
             */
            red700: string;
        };
        success: {
            /**
             * secondary success 100 color
             * @TJS-type color
             */
            green100: string;
            /**
             * secondary success 200 color
             * @TJS-type color
             */
            green200: string;
            /**
             * secondary success 300 color
             * @TJS-type color
             */
            green300: string;
            /**
             * secondary success 400 color
             * @TJS-type color
             */
            green400: string;
            /**
             * secondary success 500 color
             * @TJS-type color
             */
            green500: string;
            /**
             * secondary success 600 color
             * @TJS-type color
             */
            green600: string;
            /**
             * secondary success 700 color
             * @TJS-type color
             */
            green700: string;
        };
    };
    tertiary: {
        yellow: {
            /**
             * tertiary yellow 100 color
             * @TJS-type color
             */
            yellow100: string;
            /**
             * tertiary yellow 200 color
             * @TJS-type color
             */
            yellow200: string;
            /**
             * tertiary yellow 300 color
             * @TJS-type color
             */
            yellow300: string;
            /**
             * tertiary yellow 400 color
             * @TJS-type color
             */
            yellow400: string;
            /**
             * tertiary yellow 500 color
             * @TJS-type color
             */
            yellow500: string;
            /**
             * tertiary yellow 600 color
             * @TJS-type color
             */
            yellow600: string;
            /**
             * tertiary yellow 700 color
             * @TJS-type color
             */
            yellow700: string;
        };
        pink: {
            /**
             * tertiary pink 100 color
             * @TJS-type color
             */
            pink100: string;
            /**
             * tertiary pink 200 color
             * @TJS-type color
             */
            pink200: string;
            /**
             * tertiary pink 300 color
             * @TJS-type color
             */
            pink300: string;
            /**
             * tertiary pink 400 color
             * @TJS-type color
             */
            pink400: string;
            /**
             * tertiary pink 500 color
             * @TJS-type color
             */
            pink500: string;
            /**
             * tertiary pink 600 color
             * @TJS-type color
             */
            pink600: string;
            /**
             * tertiary pink 700 color
             * @TJS-type color
             */
            pink700: string;
        };
    };
}

export interface IKitColorsPaletteCssTokens extends IKitColorsPalette {}

export type KitColorKeys = keyof IKitColorsPalette['secondary'];
