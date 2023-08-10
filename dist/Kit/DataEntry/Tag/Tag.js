import c from "react";
import { Tag as n } from "antd";
import a, { css as r } from "styled-components";
import { tagTheme as e } from "./theme.js";
import o from "../../../theme/index.js";
const i = a(n)`
    padding: 4px 8px;
    border: none;
    height: ${e.height};

    > div {
        padding-left: 0;
    }

    &,
    a {
        font-size: ${e.fontSize}px;
        font-family: ${e.fontFamily};
        font-weight: ${e.fontWeight};
        line-height: 18px;
        box-sizing: border-box;
    }

    .ant-tag-close-icon {
        margin-left: 8px;
    }

    > .anticon + span {
        margin-left: 8px;
    }

    ${(l) => {
  switch (l.$color) {
    case "default":
      return;
    case "red":
      return r`
                    background: ${o.color.secondary.red.red400};
                    color: ${o.color.neutral.typography.white};

                    .anticon-close {
                        color: ${o.color.neutral.typography.white};

                        &:hover {
                            color: ${o.color.secondary.red.red200};
                        }
                    }
                `;
    case "green":
      return r`
                    background: ${o.color.secondary.green.green400};
                    color: ${o.color.neutral.typography.white};

                    .anticon-close {
                        color: ${o.color.neutral.typography.white};

                        &:hover {
                            color: ${o.color.secondary.green.green200};
                        }
                    }
                `;
    case "blue":
      return r`
                    background: ${o.color.primary.blue400};
                    color: ${o.color.neutral.typography.white};

                    .anticon-close {
                        color: ${o.color.neutral.typography.white};

                        &:hover {
                            color: ${o.color.primary.blue200};
                        }
                    }
                `;
    case "blueInvert":
      return r`
                    background: ${o.color.primary.blue100};
                    color: ${o.color.secondary.blue.blue400};

                    .anticon-close {
                        color: ${o.color.secondary.blue.blue400};

                        &:hover {
                            color: ${o.color.secondary.blue.blue300};
                        }
                    }
                `;
  }
}}
`, s = ({ color: l = "default", ...t }) => c.createElement(i, { $color: l, ...t });
export {
  s as default
};
//# sourceMappingURL=Tag.js.map
