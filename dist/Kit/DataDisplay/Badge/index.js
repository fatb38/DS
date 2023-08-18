import a from "react";
import { Badge as n } from "antd";
import { styled as c, css as e } from "styled-components";
import o from "../../../theme/index.js";
const l = c(n)`
    height: 16px;
    min-width: 16px;
    line-height: 16px;
    font-size: ${o.typography.fontSize7};

    .ant-badge-count {
        ${(r) => {
  switch (r.$countColor) {
    case "default":
      return e`
                        background: ${o.color.secondary.red.red400};
                        color: ${o.color.neutral.typography.white};
                    `;
    case "green":
      return e`
                        background: ${o.color.secondary.green.green400};
                        color: ${o.color.neutral.typography.white};
                    `;
    case "blue":
      return e`
                        background: ${o.color.primary.blue400};
                        color: ${o.color.neutral.typography.white};
                    `;
    case "blueInvert":
      return e`
                        background: ${o.color.primary.blue100};
                        color: ${o.color.secondary.blue.blue400};
                    `;
    case "gray":
      return e`
                        background: ${o.color.neutral.background};
                        color: ${o.color.neutral.typography.black60};
                    `;
  }
}}
    }

    .ant-badge-status-processing {
        &.ant-scroll-number {
            position: absolute;
        }

        &::after {
            animation-name: none;
            content: initial;
        }

        &.ant-badge-status-dot {
            &::after {
                animation-name: none;
                content: initial;
            }
        }
    }
`, i = ({ countColor: r = "default", ...t }) => a.createElement(l, { $countColor: r, ...t });
i.displayName = "KitBadge";
export {
  i as KitBadge
};
