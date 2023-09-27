export interface KitUploadThemeStyled {
    colors: {
        card: {
            border: {
                default: string;
            };
            background: {
                default: string;
            };
        };
        list: {
            preview: {
                hover: string;
            };
            border: {
                default: string;
                uploading: string;
                error: string;
            };
            typography: {
                done: string;
                error: string;
            };
        };
    };
}

export interface KitDraggerThemeStyled {
    colors: {
        background: {
            default: string;
        };
        border: {
            default: string;
            hover: string;
        };
        dragIcon: {
            default: string;
        };
        typography: {
            text: string;
            hint: string;
            item: string;
        };
    };
    typography: {
        fontSize: number;
        fontWeight: string | number;
        lineHeight: number;
    };
}

export type KitUploadTheme = KitUploadThemeStyled & {
    Dragger: KitDraggerThemeStyled;
};
