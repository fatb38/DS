type ColsDefinition = {
    colGap: number;
    colWidth?: number | 'auto';
    marginRight?: number;
};

export type GridBreakPoint = {
    width: number;
    horizontalPadding?: number;
    columns: number;
    noMenu?: boolean;
    closed: ColsDefinition;
    open: ColsDefinition;
};

export type IKitGridConfig = Record<string, GridBreakPoint>;
