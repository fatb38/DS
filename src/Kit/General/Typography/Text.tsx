import React, {forwardRef} from 'react';
import {styled} from 'styled-components';
import {Typography} from 'antd';
import {IKitText, IStyledKitText} from './types';
import {sizeTofontSize, getWeightClassname} from './commons';
import {useKitTheme} from '@theme/useKitTheme';
import {kitTypographyCssTokens} from '@theme/aristid/components/General/Typography';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {convertToPixel} from '@theme/utils/convert';

const StyledKitText = styled(Typography.Text)<IStyledKitText>`
    font-size: ${({size}) => {
        if (size === undefined) {
            return convertToPixel(typographyCssTokens.fontSize6);
        }
        return convertToPixel(typographyCssTokens['fontSize' + sizeTofontSize[size]] as string);
    }};
    line-height: ${({size}) => {
        if (size === undefined) {
            return `var(${typographyCssTokens.lineHeight6})`;
        }
        return `var(${typographyCssTokens['lineHeight' + sizeTofontSize[size]]})`;
    }};
    &.ant-typography-regular {
        font-weight: var(
            ${kitTypographyCssTokens.Text.fontWeight.regular},
            var(${typographyCssTokens.regularFontWeight})
        );
    }

    &.ant-typography-medium {
        font-weight: var(
            ${kitTypographyCssTokens.Text.fontWeight.medium},
            var(${typographyCssTokens.mediumfontWeight})
        );
    }

    &.ant-typography-bold {
        font-weight: var(${kitTypographyCssTokens.Text.fontWeight.bold}, var(${typographyCssTokens.boldFontWeight}));
    }
`;

const KitText = forwardRef<HTMLElement, IKitText>(({size = 'medium', ...props}, ref) => {
    const {appId} = useKitTheme();

    return <StyledKitText {...props} ref={ref} size={size} className={`${appId} ${getWeightClassname(props)}`} />;
});

KitText.displayName = 'KitText';

export default KitText;
