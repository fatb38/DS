export interface IKitInputNumberTheme {
    colors: {
        background: {
            default: string;
            disabled: string;
            error: string;
            warning: string;
        };
        border: {
            default: string;
            hover: string;
            focused: string;
            disabled: string;
            error: string;
            warning: string;
        };
        prefix: {
            default: string;
            disabled: string;
            error: string;
            warning: string;
        };
        typography: {
            content: {
                default: string;
                disabled: string;
                error: string;
                warning: string;
            };
            placeholder: {
                default: string;
                disabled: string;
                error: string;
                warning: string;
            };
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
        content: {
            fontWeight: string | number;
        };
        placeholder: {
            fontWeight: string | number;
        };
    };
    border: {
        radius: number;
    };
}
