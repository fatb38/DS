import f from "react";
import { createRoot as p } from "/builds/dev/design-system/node_modules/react-dom/client.js";
import s from "./ConfirmDialog.js";
import d from "react-uuid";
import { ConfigProvider as y } from "antd";
import C from "../../../theme/index.js";
function k(t) {
  var r = document.createDocumentFragment();
  const c = p(r);
  r = "reactPortal-" + d();
  let o = { ...t, close: m, isOpen: !0, portalClassName: r }, i;
  function a({ okText: e, cancelText: n, ...u }) {
    clearTimeout(i), i = setTimeout(() => {
      var l = u.showSecondaryCta;
      c.render(f.createElement(y, { theme: C }, f.createElement(s, { ...u, appElement: document.body, okCancel: l, parentSelector: () => document.body, okText: e, cancelText: n })));
    });
  }
  function m(...e) {
    e = (e = [e]).some((n) => n && n.triggerCancel), t.onCancel && e && t.onCancel(), c.unmount();
  }
  return a(o), { destroy: m, update: function(e) {
    a(o = typeof e == "function" ? e(o) : { ...o, ...e });
  } };
}
function v(t) {
  return { ...t, type: "warning" };
}
function S(t) {
  return { ...t, type: "info" };
}
function b(t) {
  return { ...t, type: "success" };
}
function D(t) {
  return { ...t, type: "error" };
}
function P(t) {
  return { ...t, type: "confirm" };
}
export {
  k as default,
  P as withConfirm,
  D as withError,
  S as withInfo,
  b as withSuccess,
  v as withWarn
};
//# sourceMappingURL=confirm.js.map
