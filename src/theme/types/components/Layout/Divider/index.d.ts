export interface IKitDividerTheme {
    colors: {
        typography: {
            default: string;
        };
        split: {
            default: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: string | number;
        fontSize: number;
        lineHeight: number;
    };
}
export interface IKitDividerCssTokens {
    colors: {
        typography: {
            default: string;
        };
        split: {
            default: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
    };
}
