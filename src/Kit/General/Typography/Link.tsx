import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {Typography} from 'antd';
import {IKitLink, IStyledKitLink} from './types';
import {sizeTofontSize, getWeightClassname} from './commons';
import {useKitTheme} from '@theme/useKitTheme';
import {kitTypographyCssTokens} from '@theme/aristid/components/General/Typography';
import {typographyCssTokens} from '@theme/aristid/general/typography';

const StyledKitLink = styled(Typography.Link)<IStyledKitLink>`
    font-size: ${({size}) => {
        if (size === undefined) {
            return `calc(var(${typographyCssTokens.fontSize6}) * 1px)`;
        }
        return `calc(var(${typographyCssTokens['fontSize' + sizeTofontSize[size]]}) * 1px)`;
    }};
    line-height: ${({size}) => {
        if (size === undefined) {
            return `var(${typographyCssTokens.lineHeight6})`;
        }
        return `var(${typographyCssTokens['lineHeight' + sizeTofontSize[size]]})`;
    }};

    &.ant-typography-regular {
        font-weight: var(
            ${kitTypographyCssTokens.Link.fontWeight.regular},
            var(${typographyCssTokens.regularFontWeight})
        );
    }

    &.ant-typography-medium {
        font-weight: var(
            ${kitTypographyCssTokens.Link.fontWeight.medium},
            var(${typographyCssTokens.mediumfontWeight})
        );
    }

    &.ant-typography-bold {
        font-weight: var(${kitTypographyCssTokens.Link.fontWeight.bold}, var(${typographyCssTokens.boldFontWeight}));
    }
`;

const KitLink = forwardRef<HTMLElement, IKitLink>(({size = 'medium', ...props}, ref) => {
    const {appId} = useKitTheme();

    return <StyledKitLink {...props} ref={ref} size={size} className={`${appId} ${getWeightClassname(props)}`} />;
});
KitLink.displayName = 'KitLink';

export default KitLink;
