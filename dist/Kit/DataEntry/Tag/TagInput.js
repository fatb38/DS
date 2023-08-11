import u from "styled-components";
import o, { useState as p, useEffect as f } from "react";
import { Select as h } from "antd";
import { KitSelectStyle as g, StyledLabel as x } from "../Select/style.js";
import { CloseOutlined as S, CheckOutlined as C } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import "../../General/Button/index.js";
import "../../General/Typography/index.js";
import { KitIcon as w } from "../../General/Icon/index.js";
import v from "./Tag.js";
import { tagTheme as r } from "./theme.js";
import E from "../../../theme/index.js";
const b = (e) => {
  var { label: e, onClose: l } = e;
  return o.createElement(v, { closable: !0, onClose: l }, e);
}, y = { mode: "tags", tagRender: b }, O = (n) => o.createElement("div", { className: "ari-select-dropdown-content" }, n), I = u(h)`
    ${g}
    & .ant-select-selector {
        padding: 8px 25px 8px 10px;
    }

    & .ant-select-clear {
        opacity: 1;
        font-size: 10px;
        top: calc(50% + 3px);
        color: ${E.color.neutral.typography.black};
    }

    & .ant-select-selection-placeholder {
        color: ${r.placeholderColor};
        font-size: ${r.placeholderFontSize};
        font-weight: ${r.placeholderFontWeight};
    }
`, _ = ({ onChange: n, ...e }) => {
  const [l, c] = p(e.value || []), [i, m] = p([]);
  f(() => {
    var t = (e.options || []).filter((d) => !l.indexOf(d));
    m([...t, ...l]);
  }, [e.options, l]);
  var s = o.createElement(w, { icon: o.createElement(C, null), on: !0 });
  let a = { ...e, showArrow: !1, allowClear: !0, clearIcon: o.createElement(S, null), popupMatchSelectWidth: !1, defaultActiveFirstOption: !1, tokenSeparators: e.tokenSeparator || [","], menuItemSelectedIcon: s, onChange: (t) => {
    c(t), n && n(t);
  }, style: { minWidth: "100px" }, dropdownRender: O, popupClassName: "ari-select-dropdown-" + (e.placement && 0 <= e.placement.indexOf("top") ? "top" : "bottom"), className: (e.className || "") + " ant-select-" + (e.placement && 0 <= e.placement.indexOf("top") ? "top" : "bottom") };
  return e.onSearch && (a = { ...a, showSearch: !0, filterOption: !1, notFoundContent: e.notFoundContent || null }), o.createElement(I, { ...a, ...y, value: l, options: i.map((t) => ({ value: t, label: o.createElement(x, null, t) })) });
};
export {
  _ as default
};
