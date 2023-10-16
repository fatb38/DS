export interface IKitImageTheme {
    colors: {
        border: {
            /**
             * check color
             * @TJS-type color
             */
            none: string;
            /**
             * check color
             * @TJS-type color
             */
            default: string;
        };
    };
    border: {
        radius: {
            /**
             * @minimum 0
             * @TJS-type number
             */
            default: number;
            /**
             * @minimum 0
             * @TJS-type number
             */
            rounded: number;
        };
    };
}
