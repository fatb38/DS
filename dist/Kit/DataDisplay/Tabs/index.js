import n from "react";
import { Tabs as r } from "antd";
import e from "styled-components";
import { KitTabsTheme as t } from "./theme.js";
const i = e(r)`
    .ant-tabs-extra-content {
        .ant-btn {
            border-radius: ${t.extra.borderRadius}px;
            border: 1px solid ${t.extra.borderColor};
            padding: ${t.extra.padding};
            height: ${t.extra.height}px;
            color: ${t.extra.color};
        }
    }

    &.ant-tabs-top,
    &.ant-tabs-bottom {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-left: 0px;
            padding-right: ${t.extra.horizontalMargin}px;
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-left: ${t.extra.horizontalMargin}px;
            padding-right: 0px;
        }
    }

    &.ant-tabs-left,
    &.ant-tabs-right {
        .ant-tabs-nav .ant-tabs-extra-content:first-child {
            padding-top: 0px;
            padding-bottom: ${t.extra.horizontalMargin}px;
        }

        .ant-tabs-nav .ant-tabs-extra-content:last-child {
            padding-top: ${t.extra.horizontalMargin}px;
            padding-bottom: 0px;
        }
    }

    &.ant-tabs-left .ant-tabs-nav .ant-tabs-extra-content {
        padding-right: ${t.extra.verticalMargin}px;
    }

    &.ant-tabs-right .ant-tabs-nav .ant-tabs-extra-content {
        padding-left: ${t.extra.verticalMargin}px;
    }
`, o = (a) => n.createElement(i, { ...a });
o.displayName = "KitTabs";
export {
  o as KitTabs
};
