import r from "react";
import { Collapse as p } from "antd";
import e from "styled-components";
import t from "../../../theme/index.js";
import "../../DataEntry/Select/style.js";
import "react-hot-toast";
import "../../App/style.js";
import "../../DataEntry/DatePicker/style.js";
import "../Avatar/index.js";
import "../Badge/index.js";
import "../Card/index.js";
import "./index.js";
import "../Image/index.js";
import "../ItemList/index.js";
import "../Tooltip/index.js";
import "../Tree/index.js";
import "../Tabs/index.js";
import "../../DataEntry/Checkbox/index.js";
import "../../DataEntry/Input/index.js";
import "../../DataEntry/InputNumber/index.js";
import "../../DataEntry/Radio/index.js";
import "../../DataEntry/Rate/index.js";
import "../../DataEntry/Select/index.js";
import "../../DataEntry/Tag/index.js";
import "../../DataEntry/Switch/index.js";
import "../../DataEntry/DatePicker/index.js";
import "../../DataEntry/AutoComplete/index.js";
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
const i = e(p)`
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);

    .ant-collapse-item .ant-collapse-header {
        align-items: center;
    }

    .ant-collapse-item:first-of-type,
    .ant-collapse-item:first-of-type .ant-collapse-header {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .ant-collapse-item:last-of-type {
        &:not(.ant-collapse-item-active),
        &:not(.ant-collapse-item-active) .ant-collapse-header {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        &.ant-collapse-item-active .ant-collapse-header {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }

    .ant-collapse-item-active {
        outline: solid 1px ${t.color.primary.blue400};
        border-bottom: none;

        > .ant-collapse-header {
            background-color: ${t.color.primary.blue100};
        }

        > .ant-collapse-content {
            border-color: ${t.color.primary.blue400};
        }
    }
`, m = (o) => r.createElement(i, { ...o });
m.displayName = "KitCollapse";
export {
  m as KitCollapse,
  m as default
};
