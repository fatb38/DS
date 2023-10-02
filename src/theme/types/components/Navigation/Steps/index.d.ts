export interface IKitStepsTheme {
    colors: {
        dot: {
            default: string;
        };
        split: {
            default: string;
        };
        typography: {
            description: {
                default: string;
                active: string;
            };
            text: {
                default: string;
                active: string;
            };
        };
    };
    typography: {
        fontfamily: string;
        fontSize: number;
    };
}
