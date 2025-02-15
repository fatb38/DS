export interface IKitBreadcrumbTheme {
    link: {
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

export interface IKitBreadcrumbCssTokens {
    link: {
        typography: {
            fontFamily: string;
            fontWeight: string;
        };
    };
}
