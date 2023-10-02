import React from 'react';
import styled from 'styled-components';
import {Typography} from 'antd';
import {KitTextProps, kitTextSize} from './types';
import {sizeTofontSize, getWeightClassname} from './commons';
import {KitTypographyTheme} from '@theme/types/components/General/Typography';
import {KitTypography} from '@theme/typography';
import {useKitTheme} from '@theme/theme-context';

const StyledKitParagraph = styled(Typography.Paragraph)<{
    $theme: KitTypographyTheme;
    $typographyTheme: KitTypography;
    size: kitTextSize;
}>`
    font-size: ${({$typographyTheme, size}) => $typographyTheme['fontSize' + sizeTofontSize[size] ?? 6]}px;
    line-height: ${({$typographyTheme, size}) => $typographyTheme['lineHeight' + sizeTofontSize[size] ?? 6]};

    &.ant-typography-regular {
        font-weight: ${({$theme}) => $theme.Paragraph.fontWeight.regular};
    }

    &.ant-typography-medium {
        font-weight: ${({$theme}) => $theme.Paragraph.fontWeight.medium};
    }

    &.ant-typography-bold {
        font-weight: ${({$theme}) => $theme.Paragraph.fontWeight.bold};
    }
`;

const KitParagraph = React.forwardRef<HTMLElement, KitTextProps>(({size = 'medium', ...props}, ref) => {
    const {theme} = useKitTheme();
    return (
        <StyledKitParagraph
            ref={ref}
            $theme={theme.components.Typography}
            $typographyTheme={theme.general.typography}
            size={size}
            {...props}
            className={getWeightClassname(props)}
        />
    );
});

export default KitParagraph;
