import React from 'react';
import {Breadcrumb} from 'antd';
import styled from 'styled-components';
import {KitBreadcrumbProps} from './types';
import {useKitTheme} from '@theme/theme-context';
import {IKitBreadcrumbTheme} from '@theme/types/components/Navigation/Breadcrumb';

const StyledBreadcrumb = styled(Breadcrumb)<{$theme: IKitBreadcrumbTheme}>`
    li:not(:last-child) a,
    li:not(:last-child) .ant-breadcrumb-link,
    li:not(:last-child) .ant-breadcrumb-link a {
        font-family: ${({$theme}) => $theme.link.typography.fontFamily};
        font-weight: ${({$theme}) => $theme.link.typography.fontWeight};
        color: ${({$theme}) => $theme.link.colors.typography.default};
    }
`;

export const KitBreadcrumb: React.FunctionComponent<KitBreadcrumbProps> = props => {
    const {theme} = useKitTheme();
    return <StyledBreadcrumb $theme={theme.components.Breadcrumb} {...props} />;
};

KitBreadcrumb.displayName = 'KitBreadcrumb';
