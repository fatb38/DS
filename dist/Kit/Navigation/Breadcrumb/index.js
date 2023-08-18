import a from "react";
import { Breadcrumb as e } from "antd";
import o from "styled-components";
import t from "./theme.js";
const l = o(e)`
    li:not(:last-child) a,
    li:not(:last-child) .ant-breadcrumb-link,
    li:not(:last-child) .ant-breadcrumb-link a {
        font-family: ${t.fontFamily};
        font-weight: ${t.fontWeight};
        color: ${t.color};
    }
`, m = (r) => a.createElement(l, { ...r });
m.displayName = "KitBreadcrumb";
export {
  m as KitBreadcrumb
};
