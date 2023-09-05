import React from 'react';
import {Tooltip as AntdTooltip} from 'antd';
import {KitTooltipProps} from './types';

//TODO: Add a globalStyle to reduce padding (top and bottom)

export const KitTooltip: React.FunctionComponent<KitTooltipProps> = tooltipProps => {
    return <AntdTooltip {...tooltipProps} />;
};

KitTooltip.displayName = 'KitTooltip';
