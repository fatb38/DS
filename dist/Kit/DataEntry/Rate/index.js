import c from "react";
import { Rate as l } from "antd";
import a, { css as r } from "styled-components";
import o from "../../../theme/index.js";
const s = a(l)`
    ${(e) => {
  switch (e.$color) {
    case "default":
      return;
    case "red":
      return r`
                    color: ${o.color.secondary.red.red300};
                `;
    case "green":
      return r`
                    color: ${o.color.secondary.green.green300};
                `;
    case "blue":
      return r`
                    color: ${o.color.secondary.blue.blue300};
                `;
  }
}}
`, d = ({ color: e = "default", ...t }) => c.createElement(s, { $color: e, ...t });
d.displayName = "KitRate";
export {
  d as KitRate
};
//# sourceMappingURL=index.js.map
