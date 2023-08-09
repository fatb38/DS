import * as r from "react";
import { styled as o } from "styled-components";
import l from "/builds/dev/design-system/node_modules/antd/lib/typography/Base/index.js";
import { fontBaseCss as h, TITLE_ELE_LIST as f } from "./commons.js";
import t from "../../../theme/index.js";
import { typographyHeaders as e } from "../../../theme/typography.js";
const $ = o.h1`
    ${h};
    &.ant-typography {
        font-size: ${e.fontSize1}px;
        line-height: ${e.lineHeight1};
    }
`, m = o.h1`
    ${h};
    &.ant-typography {
        font-size: ${e.fontSize2}px;
        line-height: ${e.lineHeight2};
    }
`, s = o.h3`
    ${h};
    &.ant-typography {
        font-size: ${e.fontSize3}px;
        line-height: ${e.lineHeight3};
    }
`, d = o.h4`
    ${h};
    &.ant-typography {
        font-size: ${e.fontSize4}px;
        line-height: ${e.lineHeight4};
    }
`, H = o.h5`
    ${h};
    &.ant-typography {
        font-size: ${t.typography.fontSize5}px;
        line-height: ${t.typography.lineHeight5};
        font-weight: ${(i) => i.regular ? t.typography.regularFontWeight : t.typography.mediumfontWeight};
    }
`, S = o.h6`
    ${h};
    &.ant-typography {
        font-size: ${t.typography.fontSize6}px;
        line-height: ${t.typography.lineHeight6};
        font-weight: ${(i) => i.regular ? t.typography.regularFontWeight : t.typography.mediumfontWeight};
    }
`, z = o.p`
    ${h};
    &.ant-typography {
        font-size: ${t.typography.fontSize7}px;
        line-height: ${t.typography.lineHeight7};
        font-weight: ${(i) => i.regular ? t.typography.regularFontWeight : t.typography.mediumfontWeight};
    }
`, g = [$, m, s, d, H, S, z], E = r.forwardRef((i, y) => {
  const { level: p = 1, ...a } = i;
  let n = g[0];
  return f.includes(p) && (n = g[p - 1]), r.createElement(l, { ref: y, ...a, component: n });
});
export {
  E as default
};
//# sourceMappingURL=Title.js.map
