export interface IKitBreadcrumbTheme {
    link: {
        colors: {
            typography: {
                /**
                 * default color
                 * @TJS-type color
                 */
                default: string;
            };
        };
        typography: {
            fontFamily: string;
            /**
             * @minimum 0
             * @TJS-type number
             */
            fontWeight: number | string;
        };
    };
}
