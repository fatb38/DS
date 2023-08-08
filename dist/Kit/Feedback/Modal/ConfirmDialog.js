import e from "react";
import h from "./Modal.js";
import "../../../icons/KitCalendarOutlined.js";
import "../../../icons/KitDeleteOutlined.js";
import "../../../icons/KitDownloadOutlined.js";
import "../../../icons/KitDropdownOutlined.js";
import "../../../icons/KitDropupOutlined.js";
import "../../../icons/KitEditOutlined.js";
import "../../../icons/KitHideOutlined.js";
import w from "../../../icons/KitInfoOutlined.js";
import "../../../icons/KitLessOutlined.js";
import "../../../icons/KitListOutlined.js";
import "../../../icons/KitLockOutlined.js";
import "../../../icons/KitLogoutOutlined.js";
import "../../../icons/KitPdfOutlined.js";
import "../../../icons/KitPlusOutlined.js";
import "../../../icons/KitRailroadOutlined.js";
import "../../../icons/KitShowOutlined.js";
import T from "../../../icons/KitWarningOutlined.js";
import { ExclamationOutlined as y, CheckOutlined as I } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import { KitButton as k } from "../../General/Button/index.js";
import "../../General/Typography/index.js";
import { KitIcon as m } from "../../General/Icon/index.js";
import "../../Layout/Divider/index.js";
import "../../Layout/Grid/index.js";
import { KitSpace as l } from "../../Layout/Space/index.js";
import { modalTheme as s } from "./theme.js";
import { useLocale as S } from "/builds/dev/design-system/node_modules/antd/lib/locale/index.js";
const re = ({ icon: i, title: u, firstLine: E, secondLine: p, image: f, type: r, isOpen: g, width: N, portalClassName: x, okCancel: a, onCancel: n, cancelText: C, onOk: O, okText: v, close: c, ...b }) => {
  var [t] = S("Modal");
  let o = i;
  if (i === !0 || i === void 0)
    switch (r) {
      case "info":
        o = e.createElement(m, { icon: e.createElement(w, null), on: !0, className: "kit-confirm-icon" });
        break;
      case "success":
        o = e.createElement(m, { icon: e.createElement(I, null), on: !0, className: "kit-confirm-icon kit-confirm-icon-success" });
        break;
      case "error":
        o = e.createElement(m, { icon: e.createElement(y, null), on: !0, className: "kit-confirm-icon kit-confirm-icon-error" });
        break;
      default:
        o = e.createElement(m, { icon: e.createElement(T, null), on: !0, className: "kit-confirm-icon kit-confirm-icon-warning" });
    }
  return i = a ?? r === "confirm", a = (d) => () => {
    d && d(), c == null || c();
  }, r = i && e.createElement(k, { onClick: a(n) }, C || (t == null ? void 0 : t.cancelText)), n = e.createElement(k, { primaryModal: !0, onClick: a(O) }, v || (i ? t == null ? void 0 : t.okText : t == null ? void 0 : t.justOkText)), e.createElement(h, { isOpen: g, showCloseIcon: !1, width: N || "350px", portalClassName: x, footer: e.createElement(e.Fragment, null, r, n), ...b }, e.createElement(l, { direction: "vertical", size: s.itemsVerticalSpacing }, f && e.createElement("div", { className: "kit-confirm-image-wrapper", style: { backgroundImage: "url(" + f + ")" } }), e.createElement(l, { size: s.itemsVerticalSpacing }, o, e.createElement(l, { direction: "vertical", size: s.textVerticalSpacing }, e.createElement("div", { className: "ant-modal-title" }, u), e.createElement("div", { className: "ant-modal-body" }, E), p && e.createElement("div", { className: "ant-modal-body" }, p)))));
};
export {
  re as default
};
//# sourceMappingURL=ConfirmDialog.js.map
