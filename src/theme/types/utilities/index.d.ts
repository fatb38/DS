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
        mainLight: string;
        /**
         * Main medium color
         * @TJS-type color
         */
        mainMedium: string;
        /**
         * Main color color
         * @TJS-type color
         */
        mainColor: string;
        /**
         * Main dark color
         * @TJS-type color
         */
        mainDark: string;
        /**
         * Main deepdark color
         * @TJS-type color
         */
        mainDeepDark: string;
    };
    neutral: {
        /**
         * Neutral light color
         * @TJS-type color
         */
        neutralLight: string;
        /**
         * Neutral medium color
         * @TJS-type color
         */
        neutralMedium: string;
        /**
         * Neutral dark color
         * @TJS-type color
         */
        neutralDark: string;
        /**
         * Neutral deepdark color
         * @TJS-type color
         */
        neutralDeepDark: string;
    };
    error: {
        /**
         * Error light color
         * @TJS-type color
         */
        errorLight: string;
        /**
         * Error medium color
         * @TJS-type color
         */
        errorMedium: string;
        /**
         * Error color color
         * @TJS-type color
         */
        errorColor: string;
        /**
         * Error dark color
         * @TJS-type color
         */
        errorDark: string;
    };
    success: {
        /**
         * Success light color
         * @TJS-type color
         */
        successLight: string;
        /**
         * Success mediul color
         * @TJS-type color
         */
        successMedium: string;
        /**
         * Success color color
         * @TJS-type color
         */
        successColor: string;
        /**
         * Success dark color
         * @TJS-type color
         */
        successDark: string;
    };
    warning: {
        /**
         * Warning light color
         * @TJS-type color
         */
        warningLight: string;
        /**
         * Warning medium color
         * @TJS-type color
         */
        warningMedium: string;
        /**
         * Warning color color
         * @TJS-type color
         */
        warningColor: string;
        /**
         * Warning dark color
         * @TJS-type color
         */
        warningDark: string;
    };
    text: {
        /**
         * Text light color
         * @TJS-type color
         */
        textLight: string;
        /**
         * Text primary color
         * @TJS-type color
         */
        textPrimary: string;
        /**
         * Text disabled color
         * @TJS-type color
         */
        textDisabled: string;
        /**
         * Text blue color
         * @TJS-type color
         */
        textBlue: string;
        /**
         * Text success color
         * @TJS-type color
         */
        textSuccess: string;
        /**
         * Text warning color
         * @TJS-type color
         */
        textWarning: string;
        /**
         * Text error color
         * @TJS-type color
         */
        textError: string;
    };
    shadow: {
        /**
         * Shadow light property
         * @TJS-type shadow
         */
        shadowLight: string;
        /**
         * Shadow medium property
         * @TJS-type shadow
         */
        shadowMedium: string;
        /**
         * Shadow blue property
         * @TJS-type shadow
         */
        shadowBlue: string;
    };
}

export interface IKitUtilitiesCssTokens {
    border: string;
    disabled: string;
    focus: string;
    light: string;
    colorNone: string;
    main: {
        mainLight: string;
        mainMedium: string;
        mainColor: string;
        mainDark: string;
        mainDeepDark: string;
    };
    neutral: {
        neutralLight: string;
        neutralMedium: string;
        neutralDark: string;
        neutralDeepDark: string;
    };
    error: {
        errorLight: string;
        errorMedium: string;
        errorColor: string;
        errorDark: string;
    };
    success: {
        successLight: string;
        successMedium: string;
        successColor: string;
        successDark: string;
    };
    warning: {
        warningLight: string;
        warningMedium: string;
        warningColor: string;
        warningDark: string;
    };
    text: {
        textLight: string;
        textPrimary: string;
        textDisabled: string;
        textBlue: string;
        textSuccess: string;
        textWarning: string;
        textError: string;
    };
    shadow: {
        shadowLight: string;
        shadowMedium: string;
        shadowBlue: string;
    };
}
