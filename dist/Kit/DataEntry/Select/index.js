import o, { useState as h, useEffect as g } from "react";
import { Select as u } from "antd";
import f from "/builds/dev/design-system/node_modules/classnames/index.js";
import b from "styled-components";
import { CheckOutlined as y } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import "../../General/Button/index.js";
import "../../General/Typography/index.js";
import { KitIcon as c } from "../../General/Icon/index.js";
import E, { headerTheme as p } from "./theme.js";
import { KitSelectStyle as S, StyledLabel as d, StyledBadge as O } from "./style.js";
import "../../../icons/KitCalendarOutlined.js";
import "../../../icons/KitDeleteOutlined.js";
import "../../../icons/KitDownloadOutlined.js";
import w from "../../../icons/KitDropdownOutlined.js";
import "../../../icons/KitDropupOutlined.js";
import "../../../icons/KitEditOutlined.js";
import "../../../icons/KitHideOutlined.js";
import "../../../icons/KitInfoOutlined.js";
import "../../../icons/KitLessOutlined.js";
import "../../../icons/KitListOutlined.js";
import "../../../icons/KitLockOutlined.js";
import "../../../icons/KitLogoutOutlined.js";
import "../../../icons/KitPdfOutlined.js";
import "../../../icons/KitPlusOutlined.js";
import "../../../icons/KitRailroadOutlined.js";
import "../../../icons/KitShowOutlined.js";
import "../../../icons/KitWarningOutlined.js";
const C = (e) => o.createElement("div", { className: "kit-select-dropdown-content" }, e), k = b(u)`
    ${S}
`, N = (e, t) => e.highlight ? p.highlightColor : t ? p.itemsColor : void 0, K = (e) => e ? { style: { color: p.highlightColor } } : null, v = (e, t) => o.createElement(o.Fragment, null, e.icon && o.createElement(c, { icon: e.icon, on: !t, color: N(e, t) }), !e.icon && o.createElement(O, null, e.color && o.createElement("div", { style: { backgroundColor: e.color } })), o.createElement(d, { ...K(e.highlight) }, e.label)), s = (e, t, a) => e.map(({ className: m, disabled: l, value: r, options: n, ...i }) => n ? { label: i.label, options: s(n, t, a) } : { label: t ? o.createElement(d, null, i.label) : v(i, a), className: i.highlight ? m + " kit-select-highlight-option" : m, disabled: l, value: r }), x = (e, t) => f({ "kit-select-dropdown-top": e && 0 <= e.indexOf("top"), "kit-select-dropdown-bottom": !e || e.indexOf("top") < 0, "kit-header-select-droppdown": t }), D = ({ options: e, labelOnly: t, mode: a, danger: m, header: l, ...r }) => {
  let [n, i] = h([]);
  return g(() => {
    i(e ? s(e, t, l) : []);
  }, [e, t, l]), m = { ...r, $labelOnly: t, status: m ? "error" : null, dropdownRender: C, suffixIcon: o.createElement(w, null), popupClassName: x(r.placement, l), className: (r.className || "") + " ant-select-" + (r.placement && 0 <= r.placement.indexOf("top") ? "top" : "bottom"), menuItemSelectedIcon: o.createElement(c, { icon: o.createElement(y, null), on: !l }) }, o.createElement(k, { ...m, theme: l ? p : E, options: n });
};
D.displayName = "KitSelect";
export {
  D as KitSelect
};
