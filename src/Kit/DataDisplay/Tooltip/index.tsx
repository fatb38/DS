import React from "react";
import { Tooltip as AntdTooltip } from "antd";
import { KitTooltipProps } from "./types";

export const KitTooltip: React.FunctionComponent<KitTooltipProps> = (
    tooltipProps
) => {
    return <AntdTooltip {...tooltipProps} />;
};

KitTooltip.displayName = "KitTooltip";
