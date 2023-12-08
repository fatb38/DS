import React, {FunctionComponent} from 'react';
import {Breadcrumb} from 'antd';
import styled from 'styled-components';
import {IKitBreadcrumb} from './types';
import {useKitTheme} from '@theme/theme-context';
import {kitBreadcrumbCssTokens} from '@theme/aristid/components/Navigation/Breadcrumb';
import {typographyCssTokens} from '@theme/aristid/general/typography';

const StyledBreadcrumb = styled(Breadcrumb)`
    li:not(:last-child) a,
    li:not(:last-child) .ant-breadcrumb-link,
    li:not(:last-child) .ant-breadcrumb-link a {
        font-family: var(${kitBreadcrumbCssTokens.link.typography.fontFamily}, var(${typographyCssTokens.fontFamily}));
        font-weight: var(
            ${kitBreadcrumbCssTokens.link.typography.fontWeight},
            var(${typographyCssTokens.regularFontWeight})
        );
        color: inherit;
    }
`;

export const KitBreadcrumb: FunctionComponent<IKitBreadcrumb> = ({className, ...props}) => {
    const {appId} = useKitTheme();

    return <StyledBreadcrumb {...props} className={`${appId} ${className ?? ''}`} />;
};

KitBreadcrumb.displayName = 'KitBreadcrumb';
