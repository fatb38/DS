import React, {FunctionComponent} from 'react';
import {Progress} from 'antd';
import styled from 'styled-components';
import {IKitProgress} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {kitProgressCssTokens} from '@theme/aristid/components/Feedback/Progress';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {convertToPixel} from '@theme/utils/convert';

const StyledProgress = styled(Progress)`
    font-size: ${convertToPixel(kitProgressCssTokens.typography.fontSize, typographyCssTokens.fontSize7)};
    &.ant-progress-circle .ant-progress-text {
        font-size: ${convertToPixel(kitProgressCssTokens.circle.typography.fontSize, typographyCssTokens.fontSize2)};
        font-weight: var(
            ${kitProgressCssTokens.circle.typography.fontWeight},
            var(${typographyCssTokens.regularFontWeight})
        );
    }
`;

export const KitProgress: FunctionComponent<IKitProgress> = ({className, ...progressProps}) => {
    const {appId} = useKitTheme();

    return <StyledProgress {...progressProps} className={`${appId} ${className ?? ''}`} />;
};
KitProgress.displayName = 'KitProgress';
