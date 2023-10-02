export interface IKitSnackBarTheme {
    colors: {
        background: string;
        border: string;
        typography: {
            title: string;
        };
        cta: {
            border: {
                default: string;
                hover: string;
            };
            typography: {
                default: string;
                hover: string;
            };
        };
        closeIcon: {
            default: string;
            hover: string;
        };
    };
    typography: {
        fontFamily: string;
        title: {
            fontSize: number;
            fontWeight: string | number;
        };
        cta: {
            fontWeight: string | number;
        };
    };
}
