import React, {FunctionComponent} from 'react';
import {Divider as AntdDivider} from 'antd';
import {css, styled} from 'styled-components';
import {IStyledAntdDivider, IKitDivider} from './types';
import {useKitTheme} from '@theme/theme-context';

const StyledAntdDivider = styled(AntdDivider)<IStyledAntdDivider>`
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

export const KitDivider: FunctionComponent<IKitDivider> = ({noMargin = false, color = 'default', ...dividerProps}) => {
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
