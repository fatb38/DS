export interface IKitProgressTheme {
    colors: {
        background: string;
        progress: {
            info: string;
            success: string;
            error: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
    };
    circle: {
        typography: {
            fontWeight: string | number;
            fontSize: number;
        };
    };
}
