export interface IKitCheckboxTheme {
    colors: {
        background: {
            check: string;
            hover: string;
            focus: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
            };
        };
        border: {
            default: string;
            check: string;
            hover: string;
            focus: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
                focus: string;
            };
        };
        typography: {
            disabled: string;
            danger: {
                disabled: string;
            };
        };
    };
    typography: {
        fontWeight: string | number;
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
        lineWidth: number;
    };
    border: {
        radius: number;
    };
}
