import m from "react";
import { Divider as d } from "antd";
import { styled as n, css as e } from "styled-components";
import o from "../../../theme/index.js";
const a = n(d)`
    &.ant-divider {
        font-weight: ${o.typography.mediumfontWeight};

        ${(r) => r.$noMargin && e`
                margin: 0px;
            `}

        ${(r) => r.$color === "lightGrey" && e`
                border-color: ${o.color.secondary.mediumGrey.mediumGrey100};
            `}
    }
`, l = ({ noMargin: r = !1, color: i = "default", ...t }) => m.createElement(a, { ...t, $noMargin: r, $color: i });
l.displayName = "KitDivider";
export {
  l as KitDivider
};
//# sourceMappingURL=index.js.map
