import r from "react";
import a from "styled-components";
import { colorbarTheme as o } from "./theme.js";
import { KitTooltip as i } from "../Tooltip/index.js";
const c = a.div`
    width: ${(e) => e.$column ? o.barWidth + "px" : "auto"};
    height: ${(e) => e.$column ? "auto" : o.barWidth + "px"};
    border-radius: ${o.borderRadius}px;
    display: flex;
    flex-direction: ${(e) => e.$column ? "column" : "row"};
    overflow: hidden;

    > div {
        flex: 1 1 auto;
    }
`, m = (e) => ({ background: e.color || "transparent" }), u = (e) => r.createElement(c, { $column: e.vertical ?? !1, className: e.className }, (e.colors || []).map((t, l) => r.createElement(i, { key: t.label + "_" + l, title: t.label, placement: e.vertical ? "right" : "top" }, r.createElement("div", { style: m(t) }))));
export {
  u as default
};
