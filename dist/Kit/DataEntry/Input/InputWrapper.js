import e from "react";
import r from "../../../theme/index.js";
import "../../General/Button/index.js";
import { KitTypography as l } from "../../General/Typography/index.js";
import "../../General/Icon/index.js";
const y = ({ label: t, helper: a, disabled: o, status: m, children: n }) => {
  var i = (() => {
    if (o)
      return r.color.secondary.mediumGrey.mediumGrey400;
    switch (m) {
      case "warning":
        return r.color.secondary.orange.orange400;
      case "error":
        return r.color.secondary.red.red400;
      default:
        return r.color.secondary.mediumGrey.mediumGrey500;
    }
  })();
  return e.createElement("div", { className: "kit-input-wrapper" }, t && e.createElement("div", { className: "kit-input-label", style: { paddingBottom: "4px" } }, e.createElement(l.Text, { size: "large", weight: "medium", style: { color: i } }, t)), n, a && e.createElement("div", { className: "kit-input-helper", style: { paddingTop: "4px" } }, e.createElement(l.Text, { size: "small", weight: "regular", style: { color: i } }, "* ", a)));
};
export {
  y as default
};
