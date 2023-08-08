import V from "/builds/dev/design-system/node_modules/classnames/index.js";
import O from "/builds/dev/design-system/node_modules/rc-util/lib/omit.js";
import * as t from "react";
import { ConfigContext as P } from "/builds/dev/design-system/node_modules/antd/lib/config-provider/index.js";
import R from "./Checkbox.js";
import { GroupContext as w } from "/builds/dev/design-system/node_modules/antd/es/checkbox/Group.js";
import K from "/builds/dev/design-system/node_modules/antd/lib/checkbox/style/index.js";
const j = ({ defaultValue: m, children: g, options: n = [], prefixCls: c, className: y, rootClassName: k, style: E, onChange: s, ...a }, G) => {
  var { getPrefixCls: d, direction: f } = t.useContext(P);
  const [o, x] = t.useState(a.value || m || []), [N, C] = t.useState([]), b = (t.useEffect(() => {
    "value" in a && x(a.value || []);
  }, [a]), () => n.map((e) => typeof e == "string" || typeof e == "number" ? { label: e, value: e } : e)), u = d("checkbox", c), i = u + "-group";
  var [m, d] = K(u), c = O(a, ["value", "disabled"]), S = (n && 0 < n.length && (g = b().map((e) => t.createElement(R, { prefixCls: u, key: e.value.toString(), danger: ("danger" in e ? e : a).danger, disabled: ("disabled" in e ? e : a).disabled, value: e.value, checked: o.includes(e.value), onChange: e.onChange, className: i + "-item", style: e.style }, e.label))), { toggleOption: (e) => {
    var l = o.indexOf(e.value), r = [...o];
    l === -1 ? r.push(e.value) : r.splice(l, 1), "value" in a || x(r);
    const h = b();
    s == null || s(r.filter((p) => N.includes(p)).sort((p, I) => h.findIndex((v) => v.value === p) - h.findIndex((v) => v.value === I)));
  }, value: o, disabled: a.disabled, name: a.name, registerValue: (e) => {
    C((l) => [...l, e]);
  }, cancelValue: (e) => {
    C((l) => l.filter((r) => r !== e));
  } }), f = V(i, { [i + "-rtl"]: f === "rtl" }, y, k, d);
  return m(t.createElement("div", { className: f, style: E, ...c, ref: G }, t.createElement(w.Provider, { value: S }, g)));
}, q = t.forwardRef(j), J = t.memo(q);
export {
  j as InternalCheckboxGroup,
  J as default
};
//# sourceMappingURL=Group.js.map
