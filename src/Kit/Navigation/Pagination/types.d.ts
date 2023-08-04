import type { PaginationProps } from "antd";

export interface KitPaginationProps
    extends PaginationProps,
        HTMLAttributes<HTMLDivElement> {
    bordered?: boolean;
};

export interface PaginationthemeProps {
    bordered: {
        borderColor: string;
        hoverBorderColor: string;
        backgroundColor: string;
    },
    fontSize: number;
    miniActiveBackground: string;
    disabledActiveTextColor: string;
    hoverColor: string;
};