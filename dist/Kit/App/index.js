import e from "react";
import { ConfigProvider as t } from "antd";
import o from "../../theme/index.js";
import { DropDownStyle as m } from "../DataEntry/Select/style.js";
import l from "../Feedback/SnackBar/SnackBarProvider.js";
import i from "./style.js";
const u = (r) => e.createElement(t, { theme: o }, e.createElement(l, null), e.createElement(i, null), e.createElement(m, null), r.children);
export {
  u as KitApp
};
