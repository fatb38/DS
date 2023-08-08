import { css as i } from "styled-components";
import e from "../../../theme/index.js";
import a from "/builds/dev/design-system/node_modules/classnames/index.js";
const n = [1, 2, 3, 4, 5, 6, 7], r = i`
    &.ant-typography {
        font-family: 'Inter';
        line-height: 1.2;
        font-weight: ${e.typography.defaultFontWeight};
        color: ${e.color.neutral.typography.black};
    }
`, o = { large: 5, medium: 6, small: 7 }, y = (t) => a(t.className, { "ant-typography-regular": t.weight === "regular", "ant-typography-medium": t.weight === "medium", "ant-typography-bold": t.weight === "bold" });
i`
    ${r};
    font-size: ${(t) => t.size ? e.typography["fontSize" + o[t.size]] : e.typography.fontSize6}px;
    line-height: ${(t) => t.size ? e.typography["lineHeight" + o[t.size]] : e.typography.lineHeight6};
`;
export {
  n as TITLE_ELE_LIST,
  r as fontBaseCss,
  y as getWeightClassname,
  o as sizeTofontSize
};
//# sourceMappingURL=commons.js.map
