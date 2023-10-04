import React, {FunctionComponent} from 'react';
import {Tabs as AntTabs} from 'antd';
import styled from 'styled-components';
import {IKitTabs} from './types';
import {useKitTheme} from '@theme/theme-context';
import {IKitTabsTheme} from '@theme/types/components/DataDisplay/Tabs';

const StyledKitTabs = styled(AntTabs)<{$theme: IKitTabsTheme}>`
    .ant-tabs-extra-content {
        .ant-btn {
            border-radius: ${({$theme}) => $theme.extraContent.border.radius}px;
            border: 1px solid ${({$theme}) => $theme.extraContent.colors.border.default};
            padding: ${({$theme}) => $theme.extraContent.border.radius};
            height: 34px;
            color: ${({$theme}) => $theme.extraContent.colors.typography.default};
        }
    }

    &.ant-tabs-top,
    &.ant-tabs-bottom {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-left: 0px;
            padding-right: ${({$theme}) => $theme.extraContent.margin.horizontal}px;
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-left: ${({$theme}) => $theme.extraContent.margin.horizontal}px;
            padding-right: 0px;
        }
    }

    &.ant-tabs-left,
    &.ant-tabs-right {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-top: 0px;
            padding-bottom: ${({$theme}) => $theme.extraContent.margin.horizontal}px;
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-top: ${({$theme}) => $theme.extraContent.margin.horizontal}px;
            padding-bottom: 0px;
        }
    }

    &.ant-tabs-left .ant-tabs-nav .ant-tabs-extra-content {
        padding-right: ${({$theme}) => $theme.extraContent.margin.vertical}px;
    }

    &.ant-tabs-right .ant-tabs-nav .ant-tabs-extra-content {
        padding-left: ${({$theme}) => $theme.extraContent.margin.vertical}px;
    }
`;

const KitTabs: FunctionComponent<IKitTabs> = props => {
    const {theme} = useKitTheme();

    return <StyledKitTabs $theme={theme.components.Tabs} {...props} />;
};

export {KitTabs};

KitTabs.displayName = 'KitTabs';
