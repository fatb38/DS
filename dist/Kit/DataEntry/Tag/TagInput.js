import u from "styled-components";
import o, { useState as c, useEffect as h } from "react";
import { Select as f } from "antd";
import { KitSelectStyle as g, StyledLabel as S } from "../Select/style.js";
import { CloseOutlined as x, CheckOutlined as C } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import "../../General/Button/index.js";
import "../../General/Typography/index.js";
import { KitIcon as w } from "../../General/Icon/index.js";
import E from "./Tag.js";
import { tagTheme as r } from "./theme.js";
import b from "../../../theme/index.js";
const v = (e) => {
  var { label: e, onClose: l } = e;
  return o.createElement(E, { closable: !0, onClose: l }, e);
}, y = { mode: "tags", tagRender: v }, I = (n) => o.createElement("div", { className: "kit-select-dropdown-content" }, n), O = u(f)`
    ${g}
    & .ant-select-selector {
        padding: 8px 25px 8px 10px;
    }

    & .ant-select-clear {
        opacity: 1;
        font-size: 10px;
        top: calc(50% + 3px);
        color: ${b.color.neutral.typography.black};
    }

    & .ant-select-selection-placeholder {
        color: ${r.placeholderColor};
        font-size: ${r.placeholderFontSize};
        font-weight: ${r.placeholderFontWeight};
    }

    & .ant-select-selection-search {
        min-width: 50px;
    }
`, _ = ({ onChange: n, ...e }) => {
  const [l, p] = c(e.value || []), [i, m] = c([]);
  h(() => {
    var t = (e.options || []).filter((d) => l.indexOf(d) === -1);
    m([...t, ...l]);
  }, [e.options, l]);
  var s = o.createElement(w, { icon: o.createElement(C, null), on: !0 });
  let a = { ...e, showArrow: !1, allowClear: !0, clearIcon: o.createElement(x, null), popupMatchSelectWidth: !1, defaultActiveFirstOption: !1, tokenSeparators: e.tokenSeparator || [","], menuItemSelectedIcon: s, onChange: (t) => {
    p(t), n && n(t);
  }, style: { minWidth: "100px" }, dropdownRender: I, popupClassName: "ari-select-dropdown-" + (e.placement && 0 <= e.placement.indexOf("top") ? "top" : "bottom"), className: (e.className || "") + " ant-select-" + (e.placement && 0 <= e.placement.indexOf("top") ? "top" : "bottom") };
  return e.onSearch && (a = { ...a, showSearch: !0, filterOption: !1, notFoundContent: e.notFoundContent || null, onSearch: (t) => {
    e.onSearch && e.onSearch(t, l);
  } }), o.createElement(O, { ...a, ...y, value: l, getInputElement: () => (console.log("tutu"), o.createElement("input", { placeholder: "blahh" })), options: i.map((t) => ({ value: t, label: o.createElement(S, null, t) })) });
};
export {
  _ as default
};
