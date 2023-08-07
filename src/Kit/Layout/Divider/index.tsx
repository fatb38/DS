import React from 'react';
import {Divider as AntdDivider} from 'antd';
import {css, styled} from 'styled-components';
import {KitDividerColor, KitDividerProps} from './types';
import theme from '@theme/index';

const StyledAntdDivider = styled(AntdDivider)<{
    $noMargin: boolean;
    $color: KitDividerColor;
}>`
    &.ant-divider {
        font-weight: ${theme.typography.mediumfontWeight};

        ${props =>
            props.$noMargin &&
            css`
                margin: 0px;
            `}

        ${props =>
            props.$color === 'lightGrey' &&
            css`
                border-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
            `}
    }
`;

export const KitDivider: React.FunctionComponent<KitDividerProps> = ({
    noMargin = false,
    color = 'default',
    ...dividerProps
}) => {
    return <StyledAntdDivider {...dividerProps} $noMargin={noMargin} $color={color}></StyledAntdDivider>;
};

KitDivider.displayName = 'KitDivider';
