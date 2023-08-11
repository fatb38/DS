import o from "react";
import { Steps as s } from "antd";
import { styled as i } from "styled-components";
import t from "../../../theme/index.js";
const r = i(s)`
    .ant-steps-item:not(.ant-steps-item-active) {
        .ant-steps-item-container[role='button']:hover {
            .ant-steps-item-icon {
                .ant-steps-icon {
                    .ant-steps-icon-dot {
                        background: ${t.color.primary.blue300};
                    }
                }
            }

            .ant-steps-item-content {
                .ant-steps-item-title,
                .ant-steps-item-description {
                    color: ${t.color.primary.blue300};
                }
            }
        }
    }
`, n = (e) => o.createElement(r, { progressDot: !0, ...e });
n.displayName = "KitSteps";
export {
  n as KitSteps
};
