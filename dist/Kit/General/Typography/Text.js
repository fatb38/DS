import o from "react";
import { styled as p } from "styled-components";
import { Typography as a } from "antd";
import { sizeTofontSize as r, getWeightClassname as y } from "./commons.js";
import t from "../../../theme/index.js";
const g = p(a.Text)`
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

    font-size: ${(e) => e.size ? t.typography["fontSize" + r[e.size]] : t.typography.fontSize6}px;
    line-height: ${(e) => e.size ? t.typography["lineHeight" + r[e.size]] : t.typography.lineHeight6};
`, s = o.forwardRef((e, i) => o.createElement(g, { ref: i, ...e, className: y(e) }));
export {
  s as default
};
//# sourceMappingURL=Text.js.map
