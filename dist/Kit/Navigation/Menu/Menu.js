import e from "react";
import { styled as p } from "styled-components";
import u from "../../../theme/index.js";
import "../../General/Button/index.js";
import { KitTypography as g } from "../../General/Typography/index.js";
import { KitIcon as h } from "../../General/Icon/index.js";
import { CloseOutlined as y } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
const k = p.div`
    padding: 16px 19px;
    background-color: ${u.color.neutral.typography.white};

    display: grid;
    grid-template-areas: 'header' 'content';

    .kit-menu-header {
        grid-area: header;
        display: grid;

        .kit-menu-header-topbar {
            display: grid;
            grid-template-areas: 'title close';
            grid-template-columns: 1fr min-content;
            align-items: center;
            margin-bottom: 16px;

            .kit-menu-header-title {
                grid-area: title;
            }

            .kit-menu-header-close {
                grid-area: close;
            }
        }

        .kit-menu-header-primary {
            display: grid;
            grid-template-areas: 'button primary-input';
            grid-template-columns: min-content 1fr;
            margin-bottom: 16px;

            .kit-menu-header-button {
                grid-area: button;
                margin-right: 16px;
            }

            .kit-menu-header-primary-input {
                grid-area: primary-input;
            }
        }

        .kit-menu-header-secondary {
            display: grid;
            grid-template-areas: 'secondary-input';
            grid-template-columns: 1fr;
            margin-bottom: 16px;

            .kit-menu-header-primary-input {
                grid-area: secondary-input;
            }
        }
    }

    .menu-content {
        grid-area: content;
    }
`, w = ({ title: t, onCloseClick: n, segmentedButton: r, primaryInput: a, secondaryInput: i, children: d, ...o }) => {
  const m = n !== void 0;
  var l = t !== void 0 || m, c = r !== void 0 || a !== void 0, s = i !== void 0;
  return e.createElement(k, { ...o }, e.createElement("div", { className: "kit-menu-header" }, l && e.createElement("div", { className: "kit-menu-header-topbar" }, t && e.createElement("div", { className: "kit-menu-header-title" }, e.createElement(g.Text, { size: "large", weight: "medium", ellipsis: { rows: 1, tooltip: !0 } }, t)), m && e.createElement(h, { className: "kit-menu-header-close", icon: e.createElement(y, null), hoverable: !0, onClick: () => n() })), c && e.createElement("div", { className: "kit-menu-header-primary" }, (() => {
    if (r !== void 0)
      return e.createElement("div", { className: "kit-menu-header-button" }, e.cloneElement(r, { type: "segmented", subtypeSegmented: "green" }));
  })(), (() => {
    if (a !== void 0)
      return e.createElement("div", { className: "kit-menu-header-primary-input" }, a);
  })()), s && e.createElement("div", { className: "kit-menu-header-secondary" }, (() => {
    if (i !== void 0)
      return e.createElement("div", { className: "kit-menu-header-secondary-input" }, i);
  })())), e.createElement("div", { className: "menu-content" }, d));
};
export {
  w as default
};
//# sourceMappingURL=Menu.js.map
