export interface IKitNotificationTheme {
    colors: {
        typography: {
            message: {
                info: string;
                success: string;
                warning: string;
                error: string;
            };
        };
        icon: {
            info: string;
            success: string;
            warning: string;
            error: string;
            background: {
                info: string;
                success: string;
                warning: string;
                error: string;
            };
        };
    };
    typography: {
        fontFamily: string;
        fontSize: {
            message: number;
            content: number;
        };
        fontWeight: {
            message: string | number;
        };
    };
}
