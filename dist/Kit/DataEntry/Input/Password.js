import n from "react";
import { Input as e } from "antd";
import { styled as a } from "styled-components";
import o from "../../../theme/index.js";
const t = a(e.Password)`
    &.ant-input-affix-wrapper {
        padding: 0px 10px;

        .ant-input {
            height: 38px;
            padding: 0px 10px;
            border-radius: 7px;
            font-weight: ${o.typography.regularFontWeight};
        }

        .ant-input-suffix {
            .ant-input-password-icon {
                color: ${o.color.secondary.mediumGrey.mediumGrey500};
            }

            .ant-input-show-count-suffix {
                color: ${o.color.secondary.mediumGrey.mediumGrey300};
                font-size: ${o.typography.fontSize7};
                font-weight: ${o.typography.regularFontWeight};
            }

            .ant-input-clear-icon {
                color: ${o.color.secondary.mediumGrey.mediumGrey300};
                margin-top: 2px;
            }
        }

        .ant-input-prefix {
            margin-inline-start: 10px;
            margin-inline-end: 0px;
        }

        &.ant-input-affix-wrapper-focused {
            border-style: dashed;
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: ${o.color.primary.blue100};

            .ant-input {
                color: ${o.color.primary.blue300};
            }

            .ant-input-prefix,
            .ant-input-suffix,
            .ant-input-suffix .anticon {
                color: ${o.color.primary.blue200};
            }
        }

        &.ant-input-affix-wrapper-status-error,
        &.ant-input-affix-wrapper-status-error .ant-input {
            background-color: ${o.color.secondary.red.red100};
            color: ${o.color.secondary.red.red400};

            &:not(.ant-input-borderless):not(.ant-input-disabled) {
                border-color: ${o.color.secondary.red.red400};

                &:hover,
                &:focus {
                    border-color: ${o.color.secondary.red.red400};
                }
            }

            &::placeholder {
                color: ${o.color.secondary.red.red300};
            }

            .ant-input-prefix,
            .ant-input-suffix {
                .anticon {
                    color: ${o.color.secondary.red.red400};
                }
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix,
                .ant-input-clear-icon {
                    color: ${o.color.secondary.red.red300};

                    .anticon {
                        color: ${o.color.secondary.red.red300};
                    }
                }
            }
        }

        &.ant-input-affix-wrapper-status-warning,
        &.ant-input-affix-wrapper-status-warning .ant-input {
            background-color: ${o.color.secondary.orange.orange100};
            color: ${o.color.secondary.orange.orange500};

            &:not(.ant-input-borderless):not(.ant-input-disabled) {
                border-color: ${o.color.secondary.orange.orange400};

                &:hover,
                &:focus {
                    border-color: ${o.color.secondary.orange.orange400};
                }
            }

            &::placeholder {
                color: ${o.color.secondary.orange.orange300};
            }

            .ant-input-prefix,
            .ant-input-suffix {
                .anticon {
                    color: ${o.color.secondary.orange.orange400};
                }
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix,
                .ant-input-clear-icon {
                    color: ${o.color.secondary.orange.orange300};

                    .anticon {
                        color: ${o.color.secondary.orange.orange300};
                    }
                }
            }
        }
    }
`, u = (r) => n.createElement(t, { ...r });
export {
  u as default
};
//# sourceMappingURL=Password.js.map
