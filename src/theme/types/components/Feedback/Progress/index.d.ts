export interface IKitProgressTheme {
    colors: {
        background: string;
        progress: {
            /**
             * info color
             * @TJS-type color
             */
            info: string;
            /**
             * success color
             * @TJS-type color
             */
            success: string;
            /**
             * error color
             * @TJS-type color
             */
            error: string;
        };
    };
    typography: {
        fontFamily: string;
        /**
         * @minimum 0
         * @TJS-type number
         */
        fontSize: number;
    };
    circle: {
        typography: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontWeight: string | number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontSize: number;
        };
    };
}
