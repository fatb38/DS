import o from "react";
import p from "styled-components";
import { Typography as i } from "antd";
import { sizeTofontSize as a, getWeightClassname as g } from "./commons.js";
import t from "../../../theme/index.js";
const h = p(i.Paragraph)`
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

    font-size: ${(e) => e.size ? t.typography["fontSize" + a[e.size]] : t.typography.fontSize6}px;
    line-height: ${(e) => e.size ? t.typography["lineHeight" + a[e.size]] : t.typography.lineHeight6};
`, s = o.forwardRef((e, r) => o.createElement(h, { ref: r, ...e, className: g(e) }));
export {
  s as default
};
