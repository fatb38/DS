import e from "react";
import { ConfigProvider as t } from "antd";
import o from "../../theme/index.js";
import { DropDownStyle as m } from "../DataEntry/Select/style.js";
import l from "../Feedback/SnackBar/SnackBarProvider.js";
import n from "./style.js";
import { DatePickerDropDownStyle as i } from "../DataEntry/DatePicker/style.js";
const d = (r) => e.createElement(t, { theme: o }, e.createElement(l, null), e.createElement(n, null), e.createElement(m, null), e.createElement(i, null), r.children);
export {
  d as KitApp
};
