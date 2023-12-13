import React, {forwardRef} from 'react';
import {styled} from 'styled-components';
import {Typography} from 'antd';
import {IKitText, IStyledKitText} from './types';
import {sizeTofontSize, getWeightClassname} from './commons';
import {useKitTheme} from '@theme/theme-context';

const StyledKitText = styled(Typography.Text)<IStyledKitText>`
    font-size: ${({$typographyTheme, size}) => $typographyTheme['fontSize' + sizeTofontSize[size] ?? 6] as number}px;
    line-height: ${({$typographyTheme, size}) => $typographyTheme['lineHeight' + sizeTofontSize[size] ?? 6] as number};

    &.ant-typography-regular {
        font-weight: ${({$theme}) => $theme.Text.fontWeight.regular};
    }

    &.ant-typography-medium {
        font-weight: ${({$theme}) => $theme.Text.fontWeight.medium};
    }

    &.ant-typography-bold {
        font-weight: ${({$theme}) => $theme.Text.fontWeight.bold};
    }
`;

const KitText = forwardRef<HTMLElement, IKitText>(({size = 'medium', ...props}, ref) => {
    const {theme} = useKitTheme();

    return (
        <StyledKitText
            ref={ref}
            $theme={theme.components.Typography}
            $typographyTheme={theme.general.typography}
            size={size}
            {...props}
            className={getWeightClassname(props)}
        />
    );
});

KitText.displayName = 'KitText';

export default KitText;
