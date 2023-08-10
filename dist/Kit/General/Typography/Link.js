import o from "react";
import p from "styled-components";
import { Typography as a } from "antd";
import { sizeTofontSize as i, getWeightClassname as y } from "./commons.js";
import t from "../../../theme/index.js";
const g = p(a.Link)`
    &.ant-typography {
        font-family: 'Inter';
        line-height: 1.2;
        font-weight: ${t.typography.defaultFontWeight};
        color: ${t.color.neutral.typography.black};
    }

    &.ant-typography-regular {
        font-weight: ${t.typography.regularFontWeight};
    }
    &.ant-typography-medium {
        font-weight: ${t.typography.mediumfontWeight};
    }
    &.ant-typography-bold {
        font-weight: ${t.typography.boldFontWeight};
    }

    font-size: ${(e) => e.size ? t.typography["fontSize" + i[e.size]] : t.typography.fontSize6}px;
    line-height: ${(e) => e.size ? t.typography["lineHeight" + i[e.size]] : t.typography.lineHeight6};
`, s = o.forwardRef((e, r) => o.createElement(g, { ref: r, ...e, className: y(e) }));
export {
  s as default
};
//# sourceMappingURL=Link.js.map
