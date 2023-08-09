import e from "react";
import { Avatar as l } from "antd";
import { styled as c, css as o } from "styled-components";
import r from "../../../theme/index.js";
const u = c(l)`
    &:not(.ant-avatar-image) {
        ${(t) => {
  switch (t.$color) {
    case "default":
      return o`
                        background: ${r.color.neutral.typography.black60};
                        color: ${r.color.neutral.typography.white};
                    `;
    case "blueInvert":
      return o`
                        background: ${r.color.primary.blue100};
                        color: ${r.color.secondary.blue.blue200};
                    `;
  }
}}
    }
`, m = ({ color: t = "default", ...a }) => e.createElement(u, { $color: t, ...a });
m.displayName = "KitAvatar";
export {
  m as default
};
//# sourceMappingURL=Avatar.js.map
