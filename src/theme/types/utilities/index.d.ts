export interface IKitUtilities {
    /**
     * Border color
     * @TJS-type color
     */
    border: string;
    /**
     * Disabled color
     * @TJS-type color
     */
    disabled: string;
    /**
     * Focus color
     * @TJS-type color
     */
    focus: string;
    /**
     * Light color
     * @TJS-type color
     */
    light: string;
    /**
     * Color none color
     * @TJS-type color
     */
    colorNone: string;
    main: {
        /**
         * Main light color
         * @TJS-type color
         */
        light: string;
        /**
         * Main medium color
         * @TJS-type color
         */
        medium: string;
        /**
         * Main color color
         * @TJS-type color
         */
        default: string;
        /**
         * Main dark color
         * @TJS-type color
         */
        dark: string;
        /**
         * Main deepdark color
         * @TJS-type color
         */
        deepDark: string;
    };
    neutral: {
        /**
         * Neutral light color
         * @TJS-type color
         */
        light: string;
        /**
         * Neutral medium color
         * @TJS-type color
         */
        medium: string;
        /**
         * Neutral dark color
         * @TJS-type color
         */
        dark: string;
        /**
         * Neutral deepdark color
         * @TJS-type color
         */
        deepDark: string;
    };
    error: {
        /**
         * Error light color
         * @TJS-type color
         */
        light: string;
        /**
         * Error medium color
         * @TJS-type color
         */
        medium: string;
        /**
         * Error color color
         * @TJS-type color
         */
        default: string;
        /**
         * Error dark color
         * @TJS-type color
         */
        dark: string;
    };
    success: {
        /**
         * Success light color
         * @TJS-type color
         */
        light: string;
        /**
         * Success mediul color
         * @TJS-type color
         */
        medium: string;
        /**
         * Success color color
         * @TJS-type color
         */
        default: string;
        /**
         * Success dark color
         * @TJS-type color
         */
        dark: string;
    };
    warning: {
        /**
         * Warning light color
         * @TJS-type color
         */
        light: string;
        /**
         * Warning medium color
         * @TJS-type color
         */
        medium: string;
        /**
         * Warning color color
         * @TJS-type color
         */
        default: string;
        /**
         * Warning dark color
         * @TJS-type color
         */
        dark: string;
    };
    text: {
        /**
         * Text light color
         * @TJS-type color
         */
        light: string;
        /**
         * Text primary color
         * @TJS-type color
         */
        primary: string;
        /**
         * Text disabled color
         * @TJS-type color
         */
        disabled: string;
        /**
         * Text blue color
         * @TJS-type color
         */
        blue: string;
        /**
         * Text success color
         * @TJS-type color
         */
        success: string;
        /**
         * Text warning color
         * @TJS-type color
         */
        warning: string;
        /**
         * Text error color
         * @TJS-type color
         */
        error: string;
    };
    shadow: {
        /**
         * Shadow light property
         * @TJS-type shadow
         */
        light: string;
        /**
         * Shadow medium property
         * @TJS-type shadow
         */
        medium: string;
        /**
         * Shadow blue property
         * @TJS-type shadow
         */
        blue: string;
    };
}

export interface IKitUtilitiesCssTokens {
    border: string;
    disabled: string;
    focus: string;
    light: string;
    colorNone: string;
    main: {
        light: string;
        medium: string;
        default: string;
        dark: string;
        deepDark: string;
    };
    neutral: {
        light: string;
        medium: string;
        dark: string;
        deepDark: string;
    };
    error: {
        light: string;
        medium: string;
        default: string;
        dark: string;
    };
    success: {
        light: string;
        medium: string;
        default: string;
        dark: string;
    };
    warning: {
        light: string;
        medium: string;
        default: string;
        dark: string;
    };
    text: {
        light: string;
        primary: string;
        disabled: string;
        blue: string;
        success: string;
        warning: string;
        error: string;
    };
    shadow: {
        light: string;
        medium: string;
        blue: string;
    };
}
