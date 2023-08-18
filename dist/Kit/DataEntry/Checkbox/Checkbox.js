import o from "react";
import { Checkbox as d } from "antd";
import n from "styled-components";
import e from "./theme.js";
const t = n(d)`
    font-weight: ${e.fontWeight.default};

    &:not(.ant-checkbox-wrapper-danger) {
        .ant-checkbox-disabled + span {
            color: ${e.color.disabled};
        }
    }

    .ant-checkbox-disabled {
        color: ${e.color.disabled};

        .ant-checkbox-inner {
            background-color: ${e.backgroundColor.disabled};
            border: ${e.borderWidth} solid ${e.borderColor.disabled};
        }

        .ant-checkbox-inner:after {
            border-color: ${e.borderColor.disabled};
        }
    }

    &.ant-checkbox-wrapper-danger .ant-checkbox-disabled .ant-checkbox-inner:after {
        border-color: ${e.borderColor.danger.default};
    }

    .ant-checkbox-indeterminate {
        &:not(.ant-checkbox-disabled) .ant-checkbox-inner {
            background-color: ${e.backgroundColor.default};
            border-color: ${e.backgroundColor.default};
        }

        .ant-checkbox-inner:after {
            width: 8px;
            height: 0px;
            border: ${e.borderWidth} solid white;
            transform: translate('-4px', '-1px');
        }
        &.ant-checkbox-disabled .ant-checkbox-inner:after {
            border-color: ${e.borderColor.disabled};
        }
    }

    &.ant-checkbox-wrapper-danger {
        .ant-checkbox {
            &.ant-checkbox-disabled + span {
                color: ${e.color.danger.disabled};
            }

            .ant-checkbox-inner {
                background-color: ${e.backgroundColor.danger.default};
                border: ${e.borderWidth} solid ${e.borderColor.danger.default};
            }
        }
    }

    .ant-checkbox-checked + span {
        font-weight: ${e.fontWeight.checked};
    }

    .ant-checkbox-checked:after {
        border: none;
    }

    &.ant-checkbox-wrapper-danger .ant-checkbox-checked:after {
        border: none;
    }

    // Hover
    &:not(.ant-checkbox-wrapper-disabled):hover,
    &:not(.ant-checkbox-wrapper-disabled) .ant-checkbox:hover {
        .ant-checkbox-inner {
            border-color: ${e.borderColor.hover};
        }
    }

    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled):hover,
    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-checked,
    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled) .ant-checkbox:hover {
        .ant-checkbox-inner {
            border-color: ${e.borderColor.danger.hover};
            background-color: ${e.backgroundColor.danger.hover};
        }
    }

    &.ant-checkbox-wrapper .ant-checkbox-input:focus + .ant-checkbox-inner {
        border: ${e.borderWidth} dashed ${e.borderColor.focus};
    }
    &.ant-checkbox-wrapper-danger .ant-checkbox-input:focus + .ant-checkbox-inner {
        border: ${e.borderWidth} dashed ${e.borderColor.danger.focus};
    }
`, i = o.forwardRef((r, a) => {
  var c = r.danger ? (r.className || "") + " ant-checkbox-wrapper-danger" : r.className;
  return o.createElement(t, { ...r, ref: a, className: c });
});
export {
  i as default
};
