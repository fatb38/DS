export interface IKitDividerTheme {
    colors: {
        typography: {
            default: string;
        };
        split: {
            default: string;
            lightGrey: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeight: string | number;
        fontSize: number;
        lineHeight: number;
    };
}
