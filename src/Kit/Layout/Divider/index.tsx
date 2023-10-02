import React from 'react';
import {Divider as AntdDivider} from 'antd';
import {css, styled} from 'styled-components';
import {KitDividerColor, KitDividerProps} from './types';
import {useKitTheme} from '@theme/theme-context';
import {IKitDividerTheme} from '@theme/types/components/Layout/Divider';

const StyledAntdDivider = styled(AntdDivider)<{
    $theme: IKitDividerTheme;
    $noMargin: boolean;
    $color: KitDividerColor;
}>`
    &.ant-divider {
        font-weight: ${({$theme}) => $theme.typography.fontWeight};

        ${({$noMargin}) =>
            $noMargin &&
            css`
                margin: 0px;
            `}

        ${({$color, $theme}) =>
            $color === 'lightGrey' &&
            css`
                border-color: ${$theme.colors.split.lightGrey};
            `}
    }
`;

export const KitDivider: React.FunctionComponent<KitDividerProps> = ({
    noMargin = false,
    color = 'default',
    ...dividerProps
}) => {
    const {theme} = useKitTheme();

    return (
        <StyledAntdDivider
            $theme={theme.components.Divider}
            {...dividerProps}
            $noMargin={noMargin}
            $color={color}
        ></StyledAntdDivider>
    );
};

KitDivider.displayName = 'KitDivider';
