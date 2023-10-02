import React from 'react';
import styled from 'styled-components';
import {Typography} from 'antd';
import {KitLinkProps, kitTextSize} from './types';
import {sizeTofontSize, getWeightClassname} from './commons';
import {IKitTypographyTheme} from '@theme/types/components/General/Typography';
import {useKitTheme} from '@theme/theme-context';
import {KitTypography} from '@theme/types/general/typography';

const StyledKitLink = styled(Typography.Link)<{
    $theme: IKitTypographyTheme;
    $typographyTheme: KitTypography;
    size: kitTextSize;
}>`
    font-size: ${({$typographyTheme, size}) => $typographyTheme['fontSize' + sizeTofontSize[size] ?? 6]}px;
    line-height: ${({$typographyTheme, size}) => $typographyTheme['lineHeight' + sizeTofontSize[size] ?? 6]};

    &.ant-typography-regular {
        font-weight: ${({$theme}) => $theme.Link.fontWeight.regular};
    }

    &.ant-typography-medium {
        font-weight: ${({$theme}) => $theme.Link.fontWeight.medium};
    }

    &.ant-typography-bold {
        font-weight: ${({$theme}) => $theme.Link.fontWeight.bold};
    }
`;

const KitLink = React.forwardRef<HTMLElement, KitLinkProps>(({size = 'medium', ...props}, ref) => {
    const {theme} = useKitTheme();

    return (
        <StyledKitLink
            ref={ref}
            $theme={theme.components.Typography}
            $typographyTheme={theme.general.typography}
            size={size}
            {...props}
            className={getWeightClassname(props)}
        />
    );
});

export default KitLink;
