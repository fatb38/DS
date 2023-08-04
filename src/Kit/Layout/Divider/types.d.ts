import { DividerProps } from "antd";
import { HTMLAttributes } from "react";

export type AntdDividerTypesToOmit = "style" | "plain";

export type KitDividerColor = "default" | "lightGrey";

export interface KitDividerProps
    extends Omit<DividerProps, AntdDividerTypesToOmit>,
        HTMLAttributes<HTMLDivElement> {
    noMargin?: boolean;
    color?: KitDividerColor;
}
