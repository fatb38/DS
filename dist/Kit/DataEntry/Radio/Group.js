import F from "/builds/dev/design-system/node_modules/classnames/index.js";
import L from "/builds/dev/design-system/node_modules/rc-util/lib/hooks/useMergedState.js";
import * as t from "react";
import { ConfigContext as P } from "/builds/dev/design-system/node_modules/antd/es/config-provider/index.js";
import j from "/builds/dev/design-system/node_modules/antd/es/config-provider/SizeContext.js";
import w from "/builds/dev/design-system/node_modules/rc-util/lib/pickAttrs.js";
import { RadioGroupContextProvider as A } from "/builds/dev/design-system/node_modules/antd/es/radio/context.js";
import d from "./Radio.js";
import K from "/builds/dev/design-system/node_modules/antd/es/radio/style/index.js";
const V = t.forwardRef((o, f) => {
  var { getPrefixCls: a, direction: c } = t.useContext(P), r = t.useContext(j);
  const [l, v] = L(o.defaultValue, { value: o.value }), { prefixCls: C, className: g, rootClassName: x, options: n, buttonStyle: y = "outline", disabled: s, children: b, size: h, style: k, id: E, onMouseEnter: R, onMouseLeave: S, onFocus: M, onBlur: G } = o, i = a("radio", C);
  var a = i + "-group", [N, z] = K(i);
  let u = b;
  return n && 0 < n.length && (u = n.map((e) => typeof e == "string" || typeof e == "number" ? t.createElement(d, { key: e.toString(), prefixCls: i, disabled: s, value: e, checked: l === e }, e) : t.createElement(d, { key: "radio-group-value-options-" + e.value, prefixCls: i, disabled: e.disabled || s, value: e.value, checked: l === e.value, style: e.style }, e.label))), r = h || r, r = F(a, a + "-" + y, { [a + "-" + r]: r, [a + "-rtl"]: c === "rtl" }, g, x, z), N(t.createElement("div", { ...w(o, { aria: !0, data: !0 }), className: r, style: k, onMouseEnter: R, onMouseLeave: S, onFocus: M, onBlur: G, id: E, ref: f }, t.createElement(A, { value: { onChange: (e) => {
    var B = l, m = e.target.value, p = ("value" in o || v(m), o).onChange;
    p && m !== B && p(e);
  }, value: l, disabled: o.disabled, name: o.name } }, u)));
}), U = t.memo(V);
export {
  U as default
};
