import React, {FunctionComponent} from 'react';
import {Progress} from 'antd';
import styled from 'styled-components';
import {IKitProgress} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import {kitProgressCssTokens} from '@theme/aristid/components/Feedback/Progress';
import {typographyCssTokens} from '@theme/aristid/general/typography';

const StyledProgress = styled(Progress)`
    font-size: calc(var(${kitProgressCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize7})) * 1px);
    &.ant-progress-circle .ant-progress-text {
        font-size: calc(
            var(${kitProgressCssTokens.circle.typography.fontSize}, var(${typographyCssTokens.fontSize2})) * 1px
        );
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
