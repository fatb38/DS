import React, {FunctionComponent} from 'react';
import {Breadcrumb} from 'antd';
import styled from 'styled-components';
import {IKitBreadcrumb, IStyledBreadcrumb} from './types';
import {useKitTheme} from '@theme/theme-context';

const StyledBreadcrumb = styled(Breadcrumb)<IStyledBreadcrumb>`
    li:not(:last-child) a,
    li:not(:last-child) .ant-breadcrumb-link,
    li:not(:last-child) .ant-breadcrumb-link a {
        font-family: ${({$theme}) => $theme.link.typography.fontFamily};
        font-weight: ${({$theme}) => $theme.link.typography.fontWeight};
        color: ${({$theme}) => $theme.link.colors.typography.default};
    }
`;

export const KitBreadcrumb: FunctionComponent<IKitBreadcrumb> = props => {
    const {theme} = useKitTheme();

    return <StyledBreadcrumb $theme={theme.components.Breadcrumb} {...props} />;
};

KitBreadcrumb.displayName = 'KitBreadcrumb';
