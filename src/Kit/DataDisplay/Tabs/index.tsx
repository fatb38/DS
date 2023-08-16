import React from 'react';
import {Tabs as AntTabs} from 'antd';
import styled from 'styled-components';
import {KitTabsProps} from './types';
import {KitTabsTheme} from './theme';

const StyledKitTabs = styled(AntTabs)`
    .ant-tabs-extra-content {
        .ant-btn {
            border-radius: ${KitTabsTheme.extra.borderRadius}px;
            border: 1px solid ${KitTabsTheme.extra.borderColor};
            padding: ${KitTabsTheme.extra.padding};
            height: ${KitTabsTheme.extra.height}px;
            color: ${KitTabsTheme.extra.color};
        }
    }

    &.ant-tabs-top,
    &.ant-tabs-bottom {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-left: 0px;
            padding-right: ${KitTabsTheme.extra.horizontalMargin}px;
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-left: ${KitTabsTheme.extra.horizontalMargin}px;
            padding-right: 0px;
        }
    }

    &.ant-tabs-left,
    &.ant-tabs-right {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-top: 0px;
            padding-bottom: ${KitTabsTheme.extra.horizontalMargin}px;
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-top: ${KitTabsTheme.extra.horizontalMargin}px;
            padding-bottom: 0px;
        }
    }

    &.ant-tabs-left .ant-tabs-nav .ant-tabs-extra-content {
        padding-right: ${KitTabsTheme.extra.verticalMargin}px;
    }

    &.ant-tabs-right .ant-tabs-nav .ant-tabs-extra-content {
        padding-left: ${KitTabsTheme.extra.verticalMargin}px;
    }
`;

const KitTabs: React.FunctionComponent<KitTabsProps> = props => {
    return <StyledKitTabs {...props} />;
};

export {KitTabs};

KitTabs.displayName = 'KitTabs';
