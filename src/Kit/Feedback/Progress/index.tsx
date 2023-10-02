import React from 'react';
import {Progress} from 'antd';
import styled from 'styled-components';
import {KitProgressProps} from './types';
import {IKitProgressTheme} from '@theme/types/components/Feedback/Progress';
import {useKitTheme} from '@theme/theme-context';

const StyledProgress = styled(Progress)<{
    $theme: IKitProgressTheme;
}>`
    &.ant-progress-circle .ant-progress-text {
        font-size: ${({$theme}) => $theme.circle.typography.fontSize}px;
        font-weight: ${({$theme}) => $theme.circle.typography.fontWeight};
    }
`;

export const KitProgress: React.FunctionComponent<KitProgressProps> = props => {
    const {theme} = useKitTheme();

    return <StyledProgress $theme={theme.components.Progress} {...props} />;
};
KitProgress.displayName = 'KitProgress';
