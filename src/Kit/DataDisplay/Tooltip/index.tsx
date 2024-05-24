import React, {FunctionComponent} from 'react';
import {Tooltip as AntdTooltip} from 'antd';
import {IKitTooltip} from './types';

//TODO: Add a globalStyle to reduce padding (top and bottom)

export const KitTooltip: FunctionComponent<IKitTooltip> = tooltipProps => <AntdTooltip {...tooltipProps} />;

KitTooltip.displayName = 'KitTooltip';
