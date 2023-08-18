import e from "react";
import { DatePicker as n } from "antd";
import c from "styled-components";
import r from "../../../theme/index.js";
import "../Select/style.js";
import "react-hot-toast";
import "../../App/style.js";
import "./style.js";
import "../../DataDisplay/Avatar/index.js";
import "../../DataDisplay/Badge/index.js";
import "../../DataDisplay/Card/index.js";
import "../../DataDisplay/Collapse/index.js";
import "../../DataDisplay/Image/index.js";
import "../../DataDisplay/ItemList/index.js";
import "../../DataDisplay/Tooltip/index.js";
import "../../DataDisplay/Tree/index.js";
import "../../DataDisplay/Tabs/index.js";
import "../Checkbox/index.js";
import "../Input/index.js";
import "../InputNumber/index.js";
import "../Radio/index.js";
import "../Rate/index.js";
import "../Select/index.js";
import "../Tag/index.js";
import "../Switch/index.js";
import "./index.js";
import "../AutoComplete/index.js";
import "../../Feedback/Alert/index.js";
import "../../Feedback/Modal/index.js";
import "../../Feedback/Progress/index.js";
import "../../Feedback/SnackBar/index.js";
import "../../General/Button/index.js";
import "../../General/Typography/index.js";
import "../../General/Icon/index.js";
import "../../Layout/Divider/index.js";
import "../../Layout/Grid/index.js";
import "../../Layout/Space/index.js";
import "../../Navigation/Breadcrumb/index.js";
import "../../Navigation/DropDown/index.js";
import "../../Navigation/Header/index.js";
import "../../Navigation/Menu/index.js";
import "../../Navigation/Steps/index.js";
import "../../Navigation/Pagination/index.js";
import { CloseCircleOutlined as p } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import d from "../Input/InputWrapper.js";
const l = c(n.RangePicker)`
    &.ant-picker.ant-picker-range {
        display: grid;
        grid-template-areas: 'icon input1 separator input2 clear';
        grid-template-columns: 28px 1fr 28px 1fr 12px;
        height: 40px;
        min-width: 270px;
        padding: 0px 12px 0px 8px;
        font-weight: ${r.typography.regularFontWeight};

        .ant-picker-range-separator {
            grid-area: separator;

            .ant-picker-separator {
                color: ${r.color.secondary.mediumGrey.mediumGrey500};
            }
        }

        .ant-picker-active-bar {
            display: none;
        }

        .ant-picker-input {
            &:nth-child(1) {
                grid-area: input1;
            }

            &:nth-child(2) {
                grid-area: input2;
            }
        }

        .ant-picker-suffix {
            grid-area: icon;
            color: ${r.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-picker-clear {
            grid-area: clear;
            font-size: 12px;
            position: initial;
            top: initial;
            line-height: 1;
            transform: none;
            transition: none;
            opacity: 1;
            color: ${r.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-picker-input {
            input[disabled] {
                color: ${r.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-picker-disabled {
            border-color: ${r.color.secondary.mediumGrey.mediumGrey200};

            .ant-picker-input {
                input {
                    color: ${r.color.secondary.mediumGrey.mediumGrey400};

                    &::placeholder {
                        color: ${r.color.secondary.mediumGrey.mediumGrey400};
                    }
                }
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: ${r.color.secondary.mediumGrey.mediumGrey400};
            }

            .ant-picker-suffix,
            .ant-picker-clear {
                color: ${r.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-picker-status-warning:not(.ant-picker-disabled) {
            background-color: ${r.color.secondary.orange.orange100};
            border-color: ${r.color.secondary.orange.orange400};
            box-shadow: none;

            &:hover {
                background-color: ${r.color.secondary.orange.orange100};
                border-color: ${r.color.secondary.orange.orange400};
            }

            .ant-picker-input {
                input {
                    color: ${r.color.secondary.orange.orange400};

                    &::placeholder {
                        color: ${r.color.secondary.orange.orange400};
                    }
                }
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: ${r.color.secondary.orange.orange300};
            }

            .ant-picker-suffix {
                color: ${r.color.secondary.orange.orange400};
            }

            .ant-picker-clear {
                color: ${r.color.secondary.orange.orange500};
            }
        }

        &.ant-picker-status-error:not(.ant-picker-disabled) {
            background-color: ${r.color.secondary.red.red100};
            border-color: ${r.color.secondary.red.red400};
            box-shadow: none;

            &:hover {
                background-color: ${r.color.secondary.red.red100};
                border-color: ${r.color.secondary.red.red400};
            }

            .ant-picker-input {
                input {
                    color: ${r.color.secondary.red.red400};

                    &::placeholder {
                        color: ${r.color.secondary.red.red400};
                    }
                }
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: ${r.color.secondary.red.red300};
            }

            .ant-picker-suffix {
                color: ${r.color.secondary.red.red400};
            }

            .ant-picker-clear {
                color: ${r.color.secondary.red.red400};
            }
        }

        &.ant-picker-focused {
            border-style: dashed;
            box-shadow: none;

            &:not(.ant-picker-disabled) .ant-picker-input:focus-within input::placeholder {
                color: transparent;
            }
        }
    }
`, er = ({ label: a, helper: i, allowClear: t = !0, ...o }) => e.createElement(d, { label: a, helper: i, disabled: o.disabled !== void 0 && (typeof o.disabled == "boolean" ? o.disabled : o.disabled[0] && o.disabled[1]), status: o.status }, " ", e.createElement(l, { ...o, allowClear: !!t && { clearIcon: e.createElement(p, null) } }));
export {
  er as default
};
