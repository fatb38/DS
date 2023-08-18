import e from "react";
import { Input as a } from "antd";
import { styled as n } from "styled-components";
import r from "../../../theme/index.js";
const t = n(a.TextArea)`
    &.ant-input,
    .ant-input {
        padding: 4px 10px;
        font-weight: ${r.typography.regularFontWeight};

        &:focus {
            border-style: dashed;
        }
    }

    .ant-input-suffix {
        .ant-input-clear-icon {
            color: ${r.color.secondary.mediumGrey.mediumGrey300};
        }
    }

    &.ant-input-affix-wrapper {
        &.ant-input-affix-wrapper-focused {
            border-style: dashed;
        }

        &.ant-input-textarea-allow-clear {
            .ant-input {
                padding-inline-end: 24px;
            }
        }

        &.ant-input-textarea-show-count {
            .ant-input-data-count {
                bottom: -18px;
                color: ${r.color.secondary.mediumGrey.mediumGrey300};
                font-size: ${r.typography.fontSize7};
                font-weight: ${r.typography.regularFontWeight};
                line-height: ${r.typography.lineHeight7};
            }
        }

        &.ant-input-affix-wrapper-disabled {
            .ant-input-data-count {
                color: ${r.color.primary.blue200};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${r.color.primary.blue200};
                }
            }
        }

        &.ant-input-affix-wrapper-status-error {
            .ant-input-data-count {
                color: ${r.color.secondary.red.red300};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${r.color.secondary.red.red300};
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
                    color: ${r.color.secondary.orange.orange300};
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
        border-color: ${r.color.primary.blue100};
        color: ${r.color.primary.blue300};

        &:hover {
            border-color: ${r.color.primary.blue100};
        }

        &::placeholder {
            color: ${r.color.primary.blue200};
        }
    }

    &.ant-input-status-error,
    &.ant-input-affix-wrapper-status-error,
    .ant-input-status-error {
        background-color: ${r.color.secondary.red.red100};
        color: ${r.color.secondary.red.red400};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${r.color.secondary.red.red400};

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.red.red400};
            }
        }

        &::placeholder {
            color: ${r.color.secondary.red.red300};
        }
    }

    &.ant-input-status-warning,
    &.ant-input-affix-wrapper-status-warning,
    .ant-input-status-warning {
        background-color: ${r.color.secondary.orange.orange100};
        color: ${r.color.secondary.orange.orange500};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${r.color.secondary.orange.orange400};

            &:hover,
            &:focus {
                border-color: ${r.color.secondary.orange.orange400};
            }
        }

        &::placeholder {
            color: ${r.color.secondary.orange.orange300};
        }
    }
`, p = (o) => e.createElement(t, { ...o });
export {
  p as default
};
