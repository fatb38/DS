import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {Typography} from 'antd';
import {IKitText, IStyledKitParagraph} from './types';
import {sizeTofontSize, getWeightClassname} from './commons';
import {useKitTheme} from '@theme/theme-context';

const StyledKitParagraph = styled(Typography.Paragraph)<IStyledKitParagraph>`
    font-size: ${({$typographyTheme, size}) => $typographyTheme['fontSize' + sizeTofontSize[size] ?? 6] as number}px;
    line-height: ${({$typographyTheme, size}) => $typographyTheme['lineHeight' + sizeTofontSize[size] ?? 6] as number};

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

const KitParagraph = forwardRef<HTMLElement, IKitText>(({size = 'medium', ...props}, ref) => {
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
KitParagraph.displayName = 'KitParagraph';

export default KitParagraph;
