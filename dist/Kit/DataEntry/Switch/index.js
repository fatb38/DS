import t from "react";
import { Switch as d } from "antd";
import n from "styled-components";
import o from "./theme.js";
const a = n(d)`
    & {
        background: ${o.backgroundColor.default.off};
        height: ${o.height}px;
        width: 32px;
        min-width: 32px;
        border-radius: 20px;
    }

    .ant-switch-handle {
        font-size: ${o.iconFontSize}px;
        top: 1px;
        width: 18px;
        height: 18px;
        inset-inline-start: 1px;

        .ant-switch-loading-icon {
            top: ${(o.pinHeight - o.iconFontSize) / 2}px;
        }
    }

    &.ant-switch-checked .ant-switch-handle {
        inset-inline-start: calc(100% - 19px);
    }

    .ant-switch-handle::before {
        border: ${o.handle.borderWidth} solid ${o.handle.borderColor.default.off};
        background-color: ${o.handle.backgroundColor.default};
        box-shadow: none;
        border-radius: 9px;
    }

    &.ant-switch-disabled,
    &.ant-switch-checked.ant-switch-disabled {
        background: ${o.backgroundColor.disabled.on};

        .ant-switch-handle::before {
            border-color: ${o.handle.borderColor.disabled.on};
            background-color: ${o.handle.backgroundColor.disabled};
            box-shadow: none;
        }
    }

    &.ant-switch.ant-switch-checked:not(.ant-switch-disabled) {
        background: ${o.backgroundColor.default.on};

        .ant-switch-handle::before {
            border-color: ${o.handle.borderColor.default.on};
            box-shadow: none;
        }

        &.ant-switch.ant-switch-focus {
            .ant-switch-handle::before {
                box-shadow: none;
            }
        }
    }

    &:focus {
        .ant-switch-handle::before {
            border-style: dashed;
        }
    }
`, r = (e) => t.createElement(a, { ...e, checkedChildren: null, unCheckedChildren: null, size: "default" });
r.displayName = "KitSwitch";
export {
  r as KitSwitch
};
//# sourceMappingURL=index.js.map
