export interface IKitCardThemeStyled {
    colors: {
        background: {
            default: string;
            disabled: string;
        };
        typography: {
            headerTitle: {
                default: string;
                disabled: string;
            };
            contentTitle: {
                default: string;
                disabled: string;
            };
            description: {
                default: string;
                disabled: string;
            };
            extra: {
                default: string;
                hover: string;
                disabled: string;
            };
        };
        border: {
            default: string;
            focus: string;
            hover: string;
            disabled: string;
        };
        separator: {
            default: string;
        };
        actions: {
            default: string;
            disabled: string;
            hover: string;
        };
        shadow: {
            default: string;
            disabled: string;
            hover: string;
            focus: string;
        };
    };
    typography: {
        fontFamily: string;
        headerTitle: {
            fontSize: number;
            fontWeight: string | number;
        };
        contentTitle: {
            fontSize: number;
            fontWeight: string | number;
        };
        desciption: {
            fontSize: number;
            fontWeight: string | number;
        };
    };
}

export type IKitCardTheme = IKitCardThemeStyled;
