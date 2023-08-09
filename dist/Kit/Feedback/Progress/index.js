import t from "react";
import { Progress as o } from "antd";
import s from "styled-components";
import { progressTheme as e } from "./theme.js";
const i = s(o)`
    &.ant-progress-circle .ant-progress-text {
        font-size: ${e.circleFontSize}px;
        font-weight: ${e.circleFontWeight};
    }
`, m = (r) => t.createElement(i, { ...r });
m.displayName = "KitProgress";
export {
  m as KitProgress
};
//# sourceMappingURL=index.js.map
