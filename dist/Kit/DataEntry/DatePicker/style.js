import { createGlobalStyle as o } from "styled-components";
import "react";
import "antd";
import r from "../../../theme/index.js";
import "../Select/style.js";
import "react-hot-toast";
import "../../App/style.js";
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
const Q = o`
    .ant-picker-dropdown {
        ul.ant-picker-ranges {
            margin-block-start: 0px;
        }

        .ant-picker-now .ant-picker-now-btn {
            color: ${r.color.primary.blue400};

            &:hover {
                color: ${r.color.primary.blue500};
            }
        }

        .ant-picker-ok button {
            border-radius: 20px;
            padding: 0px 8px;
            box-shadow: none;

            background-color: ${r.color.primary.blue400};
            border-color: ${r.color.primary.blue400};
            color: ${r.color.neutral.typography.white};

            &:hover:not(.ant-btn-disabled) {
                background-color: ${r.color.primary.blue500};
                border-color: ${r.color.primary.blue500};
            }

            &:active:not(.ant-btn-disabled) {
                background-color: ${r.color.primary.blue600};
                border-color: ${r.color.primary.blue600};
            }

            &[disabled] {
                background-color: ${r.color.primary.blue100};
                border-color: ${r.color.primary.blue100};
                color: ${r.color.primary.blue200};
            }
        }
    }
`;
export {
  Q as DatePickerDropDownStyle
};
