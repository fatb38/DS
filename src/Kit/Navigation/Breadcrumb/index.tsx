import React from 'react';
import {Breadcrumb} from 'antd';
import styled from 'styled-components';
import theme from './theme';
import {KitBreadcrumbProps} from './types';

const StyledBreadcrumb = styled(Breadcrumb)`
    li:not(:last-child) a,
    li:not(:last-child) .ant-breadcrumb-link,
    li:not(:last-child) .ant-breadcrumb-link a {
        font-family: ${theme.fontFamily};
        font-weight: ${theme.fontWeight};
        color: ${theme.color};
    }
`;

export const KitBreadcrumb: React.FunctionComponent<KitBreadcrumbProps> = props => {
    return <StyledBreadcrumb {...props} />;
};

KitBreadcrumb.displayName = 'KitBreadcrumb';
