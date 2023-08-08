import e from "react";
import { InputNumber as o } from "antd";
import { styled as t } from "styled-components";
import r from "../../../theme/index.js";
const a = t(o)`
    font-weight: ${r.typography.regularFontWeight};
    height: 40px;
    line-height: 40px;

    &.ant-input-number-focused,
    &.ant-input-number-affix-wrapper-focused {
        border-style: dashed;
    }

    &.ant-input-number-disabled,
    &.ant-input-number-affix-wrapper-disabled {
        border-color: ${r.color.primary.blue100};

        .ant-input-number-input {
            color: ${r.color.primary.blue300};

            &::placeholder {
                color: ${r.color.primary.blue200};
            }
        }
    }

    &.ant-input-number-affix-wrapper {
        .ant-input-number-input-wrap {
            .ant-input-number-input {
                padding: 0px 10px 0px 0px;
            }
        }

        .ant-input-number-prefix {
            margin-inline-end: 10px;
            color: ${r.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-input-number {
            height: 38px;
        }
    }

    .ant-input-number-input-wrap {
        .ant-input-number-input {
            padding: 0px 10px;
        }
    }

    &.ant-input-number-status-warning,
    &.ant-input-number-affix-wrapper-status-warning {
        background-color: ${r.color.secondary.orange.orange100};

        .ant-input-number-input {
            color: ${r.color.secondary.orange.orange500};

            &::placeholder {
                color: ${r.color.secondary.orange.orange300};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${r.color.secondary.orange.orange400};

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.orange.orange400};
            }
        }
    }

    &.ant-input-number-status-error,
    &.ant-input-number-out-of-range,
    &.ant-input-number-affix-wrapper-status-error {
        background-color: ${r.color.secondary.red.red100};

        .ant-input-number-input {
            color: ${r.color.secondary.red.red400};

            &::placeholder {
                color: ${r.color.secondary.red.red300};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${r.color.secondary.red.red400};

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.red.red400};
            }
        }
    }
`, u = (n) => e.createElement(a, { ...n });
u.displayName = "KitInputNumber";
export {
  u as KitInputNumber
};
//# sourceMappingURL=index.js.map
