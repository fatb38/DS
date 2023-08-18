import e from "react";
import { Input as i } from "antd";
import { styled as p } from "styled-components";
import r from "../../../theme/index.js";
import { CloseCircleOutlined as u } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import d from "./InputWrapper.js";
const c = p(i)`
    &.ant-input,
    .ant-input {
        height: 40px;
        padding: 0px 10px;
        font-weight: ${r.typography.regularFontWeight};
    }

    &.ant-input-affix-wrapper {
        padding: 0px 12px;

        .ant-input-prefix {
            margin-inline-end: 10px;
            color: ${r.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-input-suffix {
            margin-inline-start: 10px;
            color: ${r.color.secondary.mediumGrey.mediumGrey500};

            .ant-input-clear-icon {
                color: ${r.color.secondary.mediumGrey.mediumGrey500};
            }
        }

        .ant-input-suffix .ant-input-show-count-suffix {
            color: ${r.color.secondary.mediumGrey.mediumGrey300};
            font-size: ${r.typography.fontSize7};
            font-weight: ${r.typography.regularFontWeight};
        }

        .ant-input {
            font-weight: ${r.typography.regularFontWeight};
            height: 38px;
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: ${r.color.secondary.mediumGrey.mediumGrey200};

            .ant-input-prefix,
            .ant-input-suffix,
            .ant-input-suffix .ant-input-show-count-suffix,
            .ant-input-suffix .ant-input-clear-icon {
                color: ${r.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-input-affix-wrapper-status-error:not(.ant-input-disabled) {
            .ant-input-prefix,
            .ant-input-suffix {
                color: ${r.color.secondary.red.red400};
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix {
                    color: ${r.color.secondary.red.red300};
                }

                .ant-input-clear-icon {
                    color: ${r.color.secondary.red.red400};
                }
            }
        }

        &.ant-input-affix-wrapper-status-warning:not(.ant-input-disabled) {
            .ant-input-prefix,
            .ant-input-suffix {
                color: ${r.color.secondary.orange.orange400};
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix {
                    color: ${r.color.secondary.orange.orange300};
                }

                .ant-input-clear-icon {
                    color: ${r.color.secondary.orange.orange500};
                }
            }
        }
    }

    &.ant-input-disabled,
    .ant-input-disabled {
        border-color: ${r.color.secondary.mediumGrey.mediumGrey200};
        color: ${r.color.secondary.mediumGrey.mediumGrey400};

        &:hover {
            border-color: ${r.color.secondary.mediumGrey.mediumGrey200};
        }

        &::placeholder {
            color: ${r.color.secondary.mediumGrey.mediumGrey400};
        }
    }

    &.ant-input-status-error,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error .ant-input {
        background-color: ${r.color.secondary.red.red100};
        color: ${r.color.secondary.red.red400};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${r.color.secondary.red.red400};
            box-shadow: none;

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.red.red400};
            }
        }

        &::placeholder {
            color: ${r.color.secondary.red.red400};
        }
    }

    &.ant-input-status-warning,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning .ant-input {
        background-color: ${r.color.secondary.orange.orange100};
        color: ${r.color.secondary.orange.orange500};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${r.color.secondary.orange.orange400};
            box-shadow: none;

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.orange.orange400};
            }
        }

        &::placeholder {
            color: ${r.color.secondary.orange.orange400};
        }
    }

    &:focus-within,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-focused {
        border-style: dashed;
        box-shadow: none;

        &.ant-input::placeholder,
        .ant-input::placeholder {
            color: transparent;
        }
    }
`, g = ({ label: n, helper: a, allowClear: t = !0, ...o }) => e.createElement(d, { label: n, helper: a, disabled: o.disabled, status: o.status }, e.createElement(c, { ...o, allowClear: t ? { clearIcon: e.createElement(u, null) } : void 0 }));
export {
  g as default
};
