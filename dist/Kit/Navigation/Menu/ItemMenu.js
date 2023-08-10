import e from "react";
import { styled as w, css as a } from "styled-components";
import r from "../../../theme/index.js";
import { KitCheckbox as N } from "../../DataEntry/Checkbox/index.js";
import "../../DataEntry/Input/index.js";
import "../../DataEntry/InputNumber/index.js";
import "../../DataEntry/Radio/index.js";
import "../../DataEntry/Rate/index.js";
import "../../DataEntry/Select/index.js";
import "../../DataEntry/Tag/index.js";
import "../../DataEntry/Switch/index.js";
import "../../General/Button/index.js";
import { KitTypography as f } from "../../General/Typography/index.js";
import { KitIcon as m } from "../../General/Icon/index.js";
import { MoreOutlined as G, RightOutlined as K } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import "../../DataDisplay/Avatar/index.js";
import "../../DataDisplay/Badge/index.js";
import "../../DataDisplay/Card/index.js";
import "../../DataDisplay/Collapse/index.js";
import "../../DataDisplay/Image/index.js";
import "../../DataDisplay/ItemList/index.js";
import { KitTooltip as d } from "../../DataDisplay/Tooltip/index.js";
import "../../DataDisplay/Tree/index.js";
import { KitDropDown as P } from "../DropDown/index.js";
const S = w.div`
    height: 32px;
    display: grid;
    grid-template: 'select icon title actions value rafter';
    grid-template-columns: min-content min-content minmax(0px, auto) min-content min-content min-content;
    padding: 4px 8px 4px 0px;
    background-color: ${r.color.neutral.typography.white};
    align-items: center;

    ${(n) => n.$isClickable && a`
            cursor: pointer;
        `}

    ${(n) => n.$isSelected && a`
            background-color: ${r.color.primary.blue100};
            border-right: 3px solid ${r.color.primary.blue400};
            padding-inline-end: 5px;

            .kit-item-menu-title span,
            .kit-item-menu-icon span {
                color: ${r.color.primary.blue400};
            }
        `}

    &:hover {
        background-color: ${r.color.primary.blue100};
    }

    .kit-item-menu-checkbox {
        grid-area: select;
        margin-left: 8px;
        margin-right: 8px;
    }

    .kit-item-menu-icon {
        grid-area: icon;

        span {
            color: ${r.color.secondary.mediumGrey.mediumGrey300};
        }
    }

    .kit-item-menu-title {
        grid-area: title;
        margin-left: 8px;
    }

    .kit-item-menu-actions {
        grid-area: actions;
        display: grid;
        grid-template-columns: inherit;
        margin-left: 8px;
        align-items: center;

        .kit-action-more {
            cursor: pointer;
            transform: rotate(90deg);
        }
    }

    ${(n) => {
  switch (n.$type) {
    case "cta":
      return a`
                    .kit-item-menu-title span,
                    .kit-item-menu-icon span {
                        color: ${r.color.primary.blue400};
                    }
                `;
    case "ctaDanger":
      return a`
                    .kit-item-menu-title span,
                    .kit-item-menu-icon span {
                        color: ${r.color.secondary.red.red400};
                    }

                    &:hover {
                        background-color: ${r.color.secondary.red.red100};
                    }
                `;
    case "default":
      return;
  }
}}

    .kit-item-menu-value {
        grid-area: value;
        margin-left: 8px;

        span {
            color: ${r.color.secondary.mediumGrey.mediumGrey300};
        }
    }

    .kit-item-menu-rafter {
        grid-area: rafter;
        color: ${r.color.secondary.mediumGrey.mediumGrey300};
        font-size: 12px;
        margin-left: 8px;

        &:hover {
            color: ${r.color.primary.blue400};
            cursor: pointer;
        }
    }
`, te = ({ type: n = "default", title: g, icon: k, value: y, actions: t, onSelectChange: c, onRafterClick: p, isSelected: h = !1, onClick: s, ...v }) => {
  var b = s !== void 0;
  const x = c !== void 0, E = p !== void 0;
  return e.createElement(S, { $isClickable: b, $isSelected: h, $type: n, onClick: (i) => {
    i.stopPropagation(), s && s();
  }, ...v }, x && e.createElement("div", { className: "kit-item-menu-checkbox" }, e.createElement(N, { onClick: (i) => i.stopPropagation(), onChange: (i) => {
    c && c(i);
  } })), k && e.createElement("div", { className: "kit-item-menu-icon" }, e.createElement(m, { icon: k, on: h })), g && e.createElement("div", { className: "kit-item-menu-title" }, e.createElement(f.Text, { size: "large", weight: "medium", ellipsis: { rows: 1, tooltip: !0 } }, g)), (() => {
    if (t) {
      const i = t[0] || null, l = t.length <= 2 && t[1] ? t[1] : null;
      return (t == null ? void 0 : t.length) && e.createElement("div", { className: "kit-item-menu-actions" }, i && e.createElement(d, { title: i.label }, e.createElement(m, { icon: i.icon, hoverable: !0, onClick: (o) => {
        o.stopPropagation(), i.onClick();
      } })), l && e.createElement(d, { title: l.label }, e.createElement(m, { icon: l.icon, hoverable: !0, onClick: (o) => {
        o.stopPropagation(), l.onClick();
      } })), 2 < t.length && e.createElement("div", { onClick: (o) => {
        o.stopPropagation();
      } }, e.createElement(P, { menu: { items: (() => {
        var o, $;
        if (t !== void 0 && t.length !== 0)
          return (o = [...t]).splice(0, 1), $ = o.map((u, C) => ({ key: C, icon: u.icon, label: u.label, onClick: u.onClick }));
      })() } }, e.createElement(d, { title: "More" }, e.createElement(m, { className: "kit-action-more", icon: e.createElement(G, null), hoverable: !0 })))));
    }
  })(), y && e.createElement("div", { className: "kit-item-menu-value" }, e.createElement(f.Text, { size: "large", weight: "regular", ellipsis: { rows: 1, tooltip: !0 } }, y)), E && e.createElement("div", { className: "kit-item-menu-rafter", onClick: (i) => {
    i.stopPropagation(), p && p();
  } }, e.createElement(K, { rev: "" })));
};
export {
  te as default
};
//# sourceMappingURL=ItemMenu.js.map
