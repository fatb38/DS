import n from "react";
import { Input as t } from "antd";
import { styled as a } from "styled-components";
import r from "../../../theme/index.js";
const e = a(t)`
    &.ant-input,
    .ant-input {
        height: 40px;
        padding: 0px 10px;
        font-weight: ${r.typography.regularFontWeight};
    }

    &:focus,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-focused {
        border-style: dashed;
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
                color: ${r.color.secondary.mediumGrey.mediumGrey300};
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

        &:focus {
            border-style: dashed;
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: ${r.color.primary.blue100};

            .ant-input-prefix,
            .ant-input-suffix,
            .ant-input-suffix .ant-input-show-count-suffix,
            .ant-input-suffix .ant-input-clear-icon {
                color: ${r.color.primary.blue200};
            }
        }

        &.ant-input-affix-wrapper-status-error:not(.ant-input-disabled) {
            .ant-input-prefix,
            .ant-input-suffix {
                color: ${r.color.secondary.red.red400};
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix,
                .ant-input-clear-icon {
                    color: ${r.color.secondary.red.red300};
                }
            }
        }

        &.ant-input-affix-wrapper-status-warning:not(.ant-input-disabled) {
            .ant-input-prefix,
            .ant-input-suffix {
                color: ${r.color.secondary.orange.orange400};
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix,
                .ant-input-clear-icon {
                    color: ${r.color.secondary.orange.orange300};
                }
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
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error .ant-input {
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
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning .ant-input {
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
`, d = (o) => n.createElement(e, { ...o });
export {
  d as default
};
