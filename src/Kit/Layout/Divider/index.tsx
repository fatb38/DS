import React, {FunctionComponent} from 'react';
import {Divider as AntdDivider} from 'antd';
import {css, styled} from 'styled-components';
import {IStyledAntdDivider, IKitDivider} from './types';
import {kitDividerCssTokens} from '@theme/aristid/components/Layout/Divider';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {useKitTheme} from '@theme/useKitTheme';

const StyledAntdDivider = styled(AntdDivider)<IStyledAntdDivider>`
    &.ant-divider {
        font-weight: var(${kitDividerCssTokens.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));

        ${({$noMargin}) =>
            $noMargin &&
            css`
                margin: 0px;
            `}

        ${({$color}) =>
            $color === 'lightGrey' &&
            css`
                border-color: var(
                    ${kitDividerCssTokens.colors.split.lightGrey},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
                );
            `}
    }
`;

export const KitDivider: FunctionComponent<IKitDivider> = ({
    noMargin = false,
    color = 'default',
    className,
    ...props
}) => {
    const {appId} = useKitTheme();

    return (
        <StyledAntdDivider {...props} className={`${appId} ${className ?? ''}`} $noMargin={noMargin} $color={color} />
    );
};

KitDivider.displayName = 'KitDivider';
