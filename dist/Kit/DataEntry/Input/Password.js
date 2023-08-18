import e from "react";
import { Input as i } from "antd";
import { styled as c } from "styled-components";
import o from "../../../theme/index.js";
import { CloseCircleOutlined as d } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import l from "./InputWrapper.js";
const p = c(i.Password)`
    &.ant-input-affix-wrapper {
        padding: 0px 12px;

        .ant-input {
            height: 38px;
            padding: 0px 10px 0px 0px;
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
                margin-top: 2px;
                color: ${o.color.secondary.mediumGrey.mediumGrey500};
            }
        }

        .ant-input-prefix {
            margin-inline-end: 10px;
            color: ${o.color.secondary.mediumGrey.mediumGrey500};
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: ${o.color.secondary.mediumGrey.mediumGrey200};

            .ant-input {
                color: ${o.color.secondary.mediumGrey.mediumGrey400};

                &::placeholder {
                    color: ${o.color.secondary.mediumGrey.mediumGrey400};
                }
            }

            .ant-input-prefix,
            .ant-input-suffix,
            .ant-input-suffix .anticon {
                color: ${o.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-input-affix-wrapper-status-error,
        &.ant-input-affix-wrapper-status-error .ant-input {
            background-color: ${o.color.secondary.red.red100};
            color: ${o.color.secondary.red.red400};

            &:not(.ant-input-borderless):not(.ant-input-disabled) {
                border-color: ${o.color.secondary.red.red400};
                box-shadow: none;

                &:hover,
                &:focus {
                    border-color: ${o.color.secondary.red.red400};
                }
            }

            &::placeholder {
                color: ${o.color.secondary.red.red400};
            }

            .ant-input-prefix,
            .ant-input-suffix {
                .anticon {
                    color: ${o.color.secondary.red.red400};
                }
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix {
                    color: ${o.color.secondary.red.red300};
                }

                .ant-input-clear-icon {
                    .anticon {
                        color: ${o.color.secondary.red.red400};
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
                box-shadow: none;

                &:hover,
                &:focus {
                    border-color: ${o.color.secondary.orange.orange400};
                }
            }

            &::placeholder {
                color: ${o.color.secondary.orange.orange400};
            }

            .ant-input-prefix,
            .ant-input-suffix {
                .anticon {
                    color: ${o.color.secondary.orange.orange400};
                }
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix {
                    color: ${o.color.secondary.orange.orange300};
                }

                .ant-input-clear-icon {
                    .anticon {
                        color: ${o.color.secondary.orange.orange500};
                    }
                }
            }
        }

        &.ant-input-affix-wrapper-focused {
            border-style: dashed;
            box-shadow: none;

            .ant-input::placeholder {
                color: transparent;
            }
        }
    }
`, g = ({ label: n, helper: a, allowClear: t = !0, ...r }) => e.createElement(l, { label: n, helper: a, disabled: r.disabled, status: r.status }, e.createElement(p, { ...r, allowClear: t ? { clearIcon: e.createElement(d, null) } : void 0 }));
export {
  g as default
};
