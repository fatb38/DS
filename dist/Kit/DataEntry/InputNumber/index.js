import n from "react";
import { InputNumber as t } from "antd";
import { styled as u } from "styled-components";
import r from "../../../theme/index.js";
import p from "../Input/InputWrapper.js";
const i = u(t)`
    font-weight: ${r.typography.regularFontWeight};
    height: 40px;
    line-height: 40px;

    &:not(.ant-input-number-affix-wrapper) {
        line-height: 38px;

        .ant-input-number-input-wrap {
            border-radius: 7px;
        }
    }

    // Use :focus-within because antd doesn't add a "ant-input-number-affix-wrapper-focused" class
    &.ant-input-number-focused,
    &.ant-input-number-affix-wrapper:focus-within {
        border-style: dashed;
        border-color: ${r.color.primary.blue400};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            box-shadow: none;
        }
    }

    &.ant-input-number-focused,
    &.ant-input-number-affix-wrapper .ant-input-number-focused {
        .ant-input-number-input::placeholder {
            color: transparent;
        }
    }

    &.ant-input-number-disabled,
    &.ant-input-number-affix-wrapper-disabled {
        border-color: ${r.color.secondary.mediumGrey.mediumGrey200};

        .ant-input-number-input {
            color: ${r.color.secondary.mediumGrey.mediumGrey400};

            &::placeholder {
                color: ${r.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-input-number-affix-wrapper .ant-input-number-prefix {
            color: ${r.color.secondary.mediumGrey.mediumGrey400};
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
            line-height: 38px;
        }
    }

    .ant-input-number-input-wrap {
        border-radius: 0 7px 7px 0;

        .ant-input-number-input {
            padding: 0px 10px;
            border-radius: 0;
        }
    }

    &.ant-input-number-status-warning,
    &.ant-input-number-affix-wrapper-status-warning {
        background-color: ${r.color.secondary.orange.orange100};
        box-shadow: none;

        .ant-input-number-input-wrap {
            background-color: ${r.color.secondary.orange.orange100};
        }

        .ant-input-number-input {
            color: ${r.color.secondary.orange.orange400};

            &::placeholder {
                color: ${r.color.secondary.orange.orange400};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${r.color.secondary.orange.orange400};

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.orange.orange400};
            }

            &.ant-input-number-affix-wrapper .ant-input-number-prefix {
                color: ${r.color.secondary.orange.orange400};
            }
        }
    }

    &.ant-input-number-status-error,
    &.ant-input-number-out-of-range,
    &.ant-input-number-affix-wrapper-status-error {
        background-color: ${r.color.secondary.red.red100};
        box-shadow: none;

        .ant-input-number-input-wrap {
            background-color: ${r.color.secondary.red.red100};
        }

        .ant-input-number-input {
            color: ${r.color.secondary.red.red400};

            &::placeholder {
                color: ${r.color.secondary.red.red400};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${r.color.secondary.red.red400};

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.red.red400};
            }

            &.ant-input-number-affix-wrapper .ant-input-number-prefix {
                color: ${r.color.secondary.red.red400};
            }
        }
    }
`, d = ({ label: o, helper: a, ...e }) => n.createElement(p, { label: o, helper: a, disabled: e.disabled, status: e.status }, n.createElement(i, { ...e }));
d.displayName = "KitInputNumber";
export {
  d as KitInputNumber
};
