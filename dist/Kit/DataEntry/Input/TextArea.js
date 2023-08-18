import e from "react";
import { Input as d } from "antd";
import { styled as c } from "styled-components";
import r from "../../../theme/index.js";
import { CloseCircleOutlined as l } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import i from "./InputWrapper.js";
const u = c(d.TextArea)`
    &.ant-input,
    .ant-input {
        padding: 4px 10px;
        font-weight: ${r.typography.regularFontWeight};
    }

    .ant-input-suffix {
        .ant-input-clear-icon {
            color: ${r.color.secondary.mediumGrey.mediumGrey500};
        }
    }

    &.ant-input-affix-wrapper {
        &.ant-input-textarea-allow-clear {
            .ant-input {
                padding-inline-end: 24px;
            }
        }

        &.ant-input-textarea-show-count {
            .ant-input-data-count {
                bottom: -23px;
                color: ${r.color.secondary.mediumGrey.mediumGrey300};
                font-size: ${r.typography.fontSize7}px;
                font-weight: ${r.typography.regularFontWeight};
                line-height: ${r.typography.lineHeight7};
            }
        }

        &.ant-input-affix-wrapper-disabled {
            .ant-input-data-count {
                color: ${r.color.secondary.mediumGrey.mediumGrey300};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${r.color.secondary.mediumGrey.mediumGrey300};
                }
            }
        }

        &.ant-input-affix-wrapper-status-error {
            .ant-input-data-count {
                color: ${r.color.secondary.red.red300};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${r.color.secondary.red.red400};
                }
            }

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.red.red400};
            }
        }

        &.ant-input-affix-wrapper-status-warning {
            .ant-input-data-count {
                color: ${r.color.secondary.orange.orange300};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${r.color.secondary.orange.orange500};
                }
            }

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.orange.orange400};
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
    &.ant-input-affix-wrapper-status-error,
    .ant-input-status-error {
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
    &.ant-input-affix-wrapper-status-warning,
    .ant-input-status-warning {
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

    &:focus,
    &.ant-input-affix-wrapper-focused {
        border-style: dashed;
        box-shadow: none;

        .ant-input::placeholder {
            color: transparent;
        }
    }
`, h = ({ label: a, helper: n, allowClear: t = !0, ...o }) => e.createElement(i, { label: a, helper: n, disabled: o.disabled, status: o.status }, e.createElement(u, { ...o, allowClear: t ? { clearIcon: e.createElement(l, null) } : void 0 }));
export {
  h as default
};
