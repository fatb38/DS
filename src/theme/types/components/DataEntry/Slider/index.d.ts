export interface IKitSliderTheme {
    handle: {
        colors: {
            background: {
                hover: string;
                focus: string;
            };
            border: {
                default: string;
                disabled: string;
            };
        };
        size: number;
        border: number;
    };
    rail: {
        colors: {
            background: {
                default: string;
                hover: string;
            };
        };
        size: number;
    };
    dot: {
        colors: {
            border: {
                default: string;
                active: string;
            };
        };
        size: number;
    };
    track: {
        colors: {
            background: {
                default: string;
                hover: string;
            };
        };
    };
    startIcon: {
        colors: {
            default: string;
        };
    };
    endIcon: {
        colors: {
            default: string;
        };
    };
}
