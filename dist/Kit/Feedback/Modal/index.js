import t from "./Modal.js";
import o, { withInfo as i, withSuccess as c, withError as f, withWarn as u, withConfirm as e } from "./confirm.js";
const n = t;
n.displayName = "KitModal", n.info = function(r) {
  return o(i(r));
}, n.success = function(r) {
  return o(c(r));
}, n.error = function(r) {
  return o(f(r));
}, n.warning = function(r) {
  return o(u(r));
}, n.confirm = function(r) {
  return o(e(r));
};
export {
  n as KitModal
};
