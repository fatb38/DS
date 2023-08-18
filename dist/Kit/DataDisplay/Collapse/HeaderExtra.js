import e from "react";
import c from "styled-components";
import { KitCheckbox as d } from "../../DataEntry/Checkbox/index.js";
import "../../DataEntry/Input/index.js";
import "../../DataEntry/InputNumber/index.js";
import "../../DataEntry/Radio/index.js";
import "../../DataEntry/Rate/index.js";
import "../../DataEntry/Select/index.js";
import "../../DataEntry/Tag/index.js";
import "../../DataEntry/Switch/index.js";
import "../../DataEntry/DatePicker/index.js";
import "../../DataEntry/AutoComplete/index.js";
import "../Avatar/index.js";
import "../Badge/index.js";
import "../Card/index.js";
import "./index.js";
import "../Image/index.js";
import "../ItemList/index.js";
import { KitTooltip as m } from "../Tooltip/index.js";
import "../Tree/index.js";
import "../Tabs/index.js";
import { KitButton as a } from "../../General/Button/index.js";
import "../../General/Typography/index.js";
import "../../General/Icon/index.js";
import "../../Navigation/Breadcrumb/index.js";
import { KitDropDown as s } from "../../Navigation/DropDown/index.js";
import "../../Navigation/Header/index.js";
import "../../Navigation/Menu/index.js";
import "../../Navigation/Steps/index.js";
import "../../Navigation/Pagination/index.js";
import { MoreOutlined as g } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
const k = c.div`
    margin-left: 4px;
    display: grid;
    grid-template: 'checkbox actions';

    .kit-collapse-header-extra-checkbox {
        grid-area: checkbox;
        align-self: center;
    }

    .kit-collapse-header-extra-actions {
        margin-left: 8px;
        grid-area: actions;
        display: grid;
        grid-template-columns: auto auto;

        > div:nth-child(2) {
            margin-left: 8px;
        }
    }
`, h = ({ onSelectChange: l, actions: t }) => e.createElement(k, null, l !== void 0 && e.createElement("div", { className: "kit-collapse-header-extra-checkbox" }, e.createElement(d, { onClick: (i) => i.stopPropagation(), onChange: (i) => {
  l && l(i);
} })), (() => {
  if (t !== void 0) {
    const i = t[0] || null, r = t.length <= 2 && t[1] ? t[1] : null;
    return (t == null ? void 0 : t.length) && e.createElement("div", { className: "kit-collapse-header-extra-actions" }, i && e.createElement(m, { title: i.label }, e.createElement(a, { type: "segmented", icon: i.icon, onClick: (o) => {
      o.stopPropagation(), i.onClick();
    } })), r && e.createElement(m, { title: r.label }, e.createElement(a, { type: "segmented", icon: r.icon, onClick: (o) => {
      o.stopPropagation(), r.onClick();
    } })), 2 < t.length && e.createElement("div", { onClick: (o) => {
      o.stopPropagation();
    } }, e.createElement(s, { menu: { items: (() => {
      var o;
      if (t !== void 0 && t.length !== 0)
        return (o = [...t]).splice(0, 1), o.map((n, p) => ({ key: p, icon: n.icon, label: n.label, onClick: n.onClick }));
    })() } }, e.createElement(m, { title: "More" }, e.createElement(a, { type: "segmented", icon: e.createElement(g, null) })))));
  }
})());
h.displayName = "KitHeaderExtra";
export {
  h as KitHeaderExtra,
  h as default
};
