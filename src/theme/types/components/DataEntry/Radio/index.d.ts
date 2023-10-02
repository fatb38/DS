export interface IKitRadioTheme {
    colors: {
        border: {
            default: string;
            checked: string;
            hover: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
            };
        };
        background: {
            default: string;
            checked: string;
            hover: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
            };
        };
        bullet: {
            default: string;
            hover: string;
            disabled: string;
            danger: {
                default: string;
                hover: string;
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
    };
}
