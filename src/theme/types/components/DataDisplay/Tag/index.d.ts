export interface IKitTagTheme {
    colors: {
        default: {
            background: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
            typography: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
        };
    };
    typography: {
        fontFamily: string;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontWeight: number | string;
    };
    border: {
        /**
         * @minimum 0
         * @TJS-type number
         */
        radius: number;
    };
}
