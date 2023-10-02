export interface IKitAlertTheme {
    colors: {
        background: {
            success: string;
            info: string;
            warning: string;
            error: string;
        };
        typography: {
            default: string;
        };
        border: {
            success: string;
            info: string;
            warning: string;
            error: string;
        };
        icon: {
            alert: {
                success: string;
                info: string;
                warning: string;
                error: string;
            };
        };
    };
    border: {
        radius: number;
    };
    typography: {
        fontFamily: string;
        fontSize: {
            message: number;
            description: number;
        };
    };
    icon: {
        alert: {
            size: number;
        };
        close: {
            size: number;
        };
    };
}
