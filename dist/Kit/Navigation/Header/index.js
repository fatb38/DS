import e, { useMemo as d } from "react";
import s from "styled-components";
import o from "./theme.js";
import { SearchOutlined as u, PlusOutlined as h } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import { KitButton as m } from "../../General/Button/index.js";
import { KitTypography as g } from "../../General/Typography/index.js";
import "../../General/Icon/index.js";
import "../../Layout/Divider/index.js";
import "../../Layout/Grid/index.js";
import { KitSpace as b } from "../../Layout/Space/index.js";
import "../../DataEntry/Checkbox/index.js";
import { KitInput as x } from "../../DataEntry/Input/index.js";
import "../../DataEntry/InputNumber/index.js";
import "../../DataEntry/Radio/index.js";
import "../../DataEntry/Rate/index.js";
import "../../DataEntry/Select/index.js";
import "../../DataEntry/Tag/index.js";
import "../../DataEntry/Switch/index.js";
const f = s.div`
    padding: 16px 32px;
    background: ${o.backgroundColor};
    display: grid;
    grid-template-areas:
        'title search actions'
        'breadcrumb breadcrumb actions';
    grid-template-columns: min-content 1fr max-content;
    grid-template-rows: 1fr min-content;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    min-height: 40px;

    .kit-header-title {
        grid-area: title;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        align-self: center;
        margin: 0;
        margin-right: 32px;
    }

    .kit-header-search {
        grid-area: search;
        max-width: 422px;

        input::placeholder {
            color: ${o.inputColor};
        }
    }

    .kit-header-breadcrumb {
        grid-area: breadcrumb;
        padding-top: 8px;
    }

    .kit-header-actions {
        grid-area: actions;
        flex: 1 1 auto;
        align-items: center;
        justify-content: end;
        display: flex;
        padding-left: 8px;
    }

    .kit-header-plus-button {
        width: 40px;
    }

    .kit-header-action-select {
        min-width: 75px;
    }
`, k = (t, r) => t || r ? (t = t ? t.map((i, a) => {
  switch (i.type.displayName) {
    case "KitSelect":
      return e.cloneElement(i, { key: a, className: i.props.className + " kit-header-action-select", header: !0, dropdownMatchSelectWidth: !1 });
    case "KitButton":
      return e.createElement(m, { className: "ant-btn-icon-only", type: "segmented", subtypeSegmented: "gray", bigIcon: !0, key: a, ...i.props });
    default:
      return null;
  }
}) : null, e.createElement("div", { className: "kit-header-actions" }, e.createElement(b, null, t, r && e.createElement(m, { type: "primary", className: "kit-header-plus-button", bigIcon: !0, onClick: r, icon: e.createElement(h, null) })))) : null, y = ({ title: t, search: r, breadcrumb: n, actions: a, onPlusClick: l, ...c }) => {
  var n = n ? e.cloneElement(n, { className: "kit-header-breadcrumb" }) : null, p = d(() => k(a, l), [a, l]);
  return e.createElement(f, { ...c }, t && e.createElement(g.Title, { level: 2, className: "kit-header-title" }, t), r && e.createElement("div", { className: "kit-header-search" }, e.createElement(x, { ...r, prefix: e.createElement(u, { rev: "" }) })), n, p);
};
y.displayName = "KitHeader";
export {
  y as KitHeader
};
//# sourceMappingURL=index.js.map
