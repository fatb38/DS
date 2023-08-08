import o from "react";
import { Alert as e } from "antd";
import { styled as a } from "styled-components";
import t from "../../../theme/index.js";
const r = a(e)`
    &.ant-alert-with-description {
        padding-inline: 0px;
        padding-block: 0px;
        padding: 8px 16px;

        .ant-alert-message {
            margin-bottom: 6px;
        }

        .anticon.ant-alert-icon {
            margin-top: 3px;
        }
    }

    &:not(.ant-alert-banner) {
        border-radius: 7px;
    }

    padding: 8px 16px;

    .ant-alert-message {
        font-size: ${t.typography.fontSize5};
    }

    .ant-alert-description {
        font-size: ${t.typography.fontSize7};
    }

    .anticon.ant-alert-icon {
        font-size: 16px;
        margin-inline-end: 8px;
    }

    .anticon.anticon-close {
        font-size: 10px;
    }

    &.ant-alert-success {
        .anticon.ant-alert-icon {
            color: ${t.color.secondary.green.green400};
        }
    }

    &.ant-alert-info {
        .anticon.ant-alert-icon {
            color: ${t.color.primary.blue400};
        }
    }

    &.ant-alert-warning {
        .anticon.ant-alert-icon {
            color: ${t.color.secondary.yellow.yellow400};
        }
    }

    &.ant-alert-error {
        .anticon.ant-alert-icon {
            color: ${t.color.secondary.red.red400};
        }
    }
`, i = (n) => o.createElement(r, { ...n });
i.displayName = "KitAlert";
export {
  i as KitAlert
};
//# sourceMappingURL=index.js.map
