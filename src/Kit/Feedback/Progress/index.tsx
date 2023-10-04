import React, {FunctionComponent} from 'react';
import {Progress} from 'antd';
import styled from 'styled-components';
import {IKitProgress, IStyledKitProgress} from './types';
import {useKitTheme} from '@theme/theme-context';

const StyledProgress = styled(Progress)<IStyledKitProgress>`
    &.ant-progress-circle .ant-progress-text {
        font-size: ${({$theme}) => $theme.circle.typography.fontSize}px;
        font-weight: ${({$theme}) => $theme.circle.typography.fontWeight};
    }
`;

export const KitProgress: FunctionComponent<IKitProgress> = props => {
    const {theme} = useKitTheme();

    return <StyledProgress $theme={theme.components.Progress} {...props} />;
};
KitProgress.displayName = 'KitProgress';
