import t from "react";
import s from "react-modal";
import n from "styled-components";
import { modalTheme as o } from "./theme.js";
import { CloseOutlined as d } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import "../../Layout/Divider/index.js";
import "../../Layout/Grid/index.js";
import { KitSpace as m } from "../../Layout/Space/index.js";
const p = n.div`
    &.kit-modal-overlay {
        background: ${o.overlayColor};
        inset: 0px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
`, f = n(s)`
    font-family: ${o.fontFamily};

    &.kit-modal-wrapper {
        background: ${o.backgroundColor};
        border-radius: ${o.borderRadius}px;
        box-shadow: ${o.boxShadow};
        font-size: ${o.fontSize.content}px;
        font-weight: ${o.fontWeight.content};
        padding: 32px 32px 24px 32px;
        display: flex;
        position: relative;

        .kit-modal-content-wrapper {
            flex: 0 1 100%;
            position: relative;
            display: flex;
            flex-direction: column;

            > .kit-modal-title {
                flex: 0 1 auto;
            }

            .kit-modal-content {
                flex: 1 1 auto;
            }

            .kit-modal-close {
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }

    .kit-modal-title {
        font-size: ${o.fontSize.title}px;
        font-weight: ${o.fontWeight.title};
    }

    .kit-confirm-image-wrapper  {
        width: 350px;
        height: 150px;
        /* border: 1px solid ${o.imageBorderColor}; */
        border-radius: ${o.borderRadius}px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .kit-confirm-icon {
        font-size: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        padding: 12px;

        &.kit-confirm-icon-success {
            color: ${o.icon.successColor};
            background: ${o.icon.successBgColor};
        }

        &.kit-confirm-icon-warning {
            color: ${o.icon.warngingColor};
            background: ${o.icon.warngingBgColor};
        }

        &.kit-confirm-icon-error {
            color: ${o.icon.errorColor};
            background: ${o.icon.errorBgColor};
        }
    }

    .kit-modal-footer {
        margin-top: ${o.itemsVerticalSpacing}px;
    }
`, w = ({ width: i, title: a, ...e }) => {
  i = { content: { width: i || "520px" } };
  const l = () => {
    var r;
    e.showCloseIcon && ((r = e.close) == null || r.call(e, [!0]));
  };
  return i = { ...e, style: i, className: "kit-modal-wrapper " + e.className, overlayElement: (r, c) => t.createElement(p, { ...r, onClick: l }, c), overlayClassName: "kit-modal-overlay " + e.overlayClassName }, t.createElement(f, { ...i, shouldCloseOnOverlayClick: e.showCloseIcon, onRequestClose: l }, t.createElement("div", { className: "kit-modal-content-wrapper" }, e.showCloseIcon && t.createElement(d, { className: "kit-modal-close", onClick: l }), t.createElement("div", { className: "kit-modal-title" }, a), t.createElement("div", { className: "kit-modal-content" }, e.children), e.footer && t.createElement(m, { className: "kit-modal-footer", size: o.itemsVerticalSpacing, align: "end", style: { justifyContent: "end", width: "100%" } }, e.footer)));
};
export {
  w as default
};
//# sourceMappingURL=Modal.js.map
