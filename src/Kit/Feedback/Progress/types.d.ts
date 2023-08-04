import type { ProgressProps } from "antd";
import { HTMLAttributes } from "react";

export interface ProgressThemeProps {
    circleFontSize: number;
    circleFontWeight: string | number;
}

export interface KitProgressProps
    extends ProgressProps,
        HTMLAttributes<HTMLDivElement> {}
