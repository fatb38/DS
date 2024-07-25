export interface IKitLoaderTheme {
    linear: {
        border: {
            radius: {
                /**
                 * @minimum 0
                 * @TJS-type number
                 */
                infinite: number;
                /**
                 * @minimum 0
                 * @TJS-type number
                 */
                default: number;
            };
        };
        /**
         * @minimum 0
         * @TJS-type number
         */
        height: number;
    };
}
export interface IKitLoaderCssTokens {
    linear: {
        border: {
            radius: {
                infinite: number;
                default: number;
            };
        };
        height: number;
    };
}
