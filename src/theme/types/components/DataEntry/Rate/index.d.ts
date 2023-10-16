export interface IKitRateTheme {
    colors: {
        star: {
            /**
             * default color
             * @TJS-type color
             */
            default: string;
            /**
             * disabled color
             * @TJS-type color
             */
            disabled: string;
            active: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
                /**
                 * red color
                 * @TJS-type color
                 */
                red: string;
                /**
                 * green color
                 * @TJS-type color
                 */
                green: string;
                /**
                 * blue color
                 * @TJS-type color
                 */
                blue: string;
            };
        };
    };
}
