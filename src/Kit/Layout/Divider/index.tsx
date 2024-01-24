import React, {FunctionComponent} from 'react';
import {Divider as AntdDivider} from 'antd';
import {css, styled} from 'styled-components';
import {IStyledAntdDivider, IKitDivider} from './types';
import {kitDividerCssTokens} from '@theme/aristid/components/Layout/Divider';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {useKitTheme} from '@theme/useKitTheme';
import {convertToPixel} from '@theme/utils/convert';

const StyledAntdDivider = styled(AntdDivider)<IStyledAntdDivider>`
    font-size: ${convertToPixel(kitDividerCssTokens.typography.fontSize, typographyCssTokens.fontSize6)};
    line-height: var(${kitDividerCssTokens.typography.lineHeight}, var(${typographyCssTokens.lineHeight6}));
    font-weight: var(${kitDividerCssTokens.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));
    &.ant-divider {
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
