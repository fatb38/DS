import e, { useState as v } from "react";
import { styled as L, css as r } from "styled-components";
import i from "../../../theme/index.js";
import { KitCheckbox as P } from "../../DataEntry/Checkbox/index.js";
import "../../DataEntry/Input/index.js";
import "../../DataEntry/InputNumber/index.js";
import "../../DataEntry/Radio/index.js";
import "../../DataEntry/Rate/index.js";
import "../../DataEntry/Select/index.js";
import { KitTag as I } from "../../DataEntry/Tag/index.js";
import "../../DataEntry/Switch/index.js";
import "../../General/Button/index.js";
import { KitTypography as l } from "../../General/Typography/index.js";
import "../../General/Icon/index.js";
import { EyeOutlined as B, RightOutlined as D } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
const S = L.div`
    display: grid;
    grid-template-columns: ${(o) => o.$gridTemplateColumns};
    align-items: center;
    min-height: 75px;
    padding: 0px 8px;
    background-color: ${i.color.neutral.typography.white};
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid ${i.color.neutral.typography.white};
    border-radius: 7px;

    &:hover {
        border: 1px solid ${i.color.primary.blue400};
    }

    &:focus {
        border-style: dashed;
    }

    ${(o) => o.$isDisabled && r`
            background-color: ${i.color.primary.blue100};
            border: 1px solid ${i.color.primary.blue100};
            pointer-events: none;

            .kit-item-list-text-container .kit-item-list-text {
                color: ${i.color.primary.blue200};
            }
        `}

    ${(o) => o.$isClickable && r`
            cursor: pointer;
        `}

    .kit-item-list-picture-container {
        width: 48px;
        height: 48px;
        border: 1px solid ${i.color.neutral.typography.black60};
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        &:not(:first-child) {
            margin: 0px 0px 0px 10px;
        }

        &.noBorder {
            border-color: transparent;
        }

        &.kit-item-list-icon {
            .anticon {
                font-size: 2rem;
                text-align: center;
                width: 100%;
                height: 100%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
        }

        .kit-item-list-image-container {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: auto;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .kit-item-list-text-container {
        display: flex;
        padding: 10px 20px;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;

        ${(o) => o.$shouldHaveGapBetweenText && r`
                gap: 5px;
            `}

        .kit-item-list-text {
            color: ${i.color.primary.blue600};
            font-size: ${i.typography.fontSize5};
            margin-bottom: 0px;

            &.kit-item-list-title {
                font-weight: ${i.typography.boldFontWeight};
            }

            &.kit-item-list-description {
                font-weight: ${i.typography.regularFontWeight};

                .ant-typography-expand {
                    visibility: hidden;
                }
            }
        }

        .kit-item-list-description-container {
            position: relative;
        }

        .kit-item-list-description-collexp {
            color: ${i.color.primary.blue600};

            &:hover {
                color: ${i.color.primary.blue400};
            }

            &.kit-item-list-description-collapse {
                float: right;
            }

            &.kit-item-list-description-expand {
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }

    .kit-item-list-tag {
        ${(o) => o.$isDisabled && r`
                opacity: 0.35;
            `}

        &:last-child .ant-tag {
            margin-inline-end: 0px;
        }

        &:not(:last-child) .ant-tag {
            margin-inline-end: 10px;
        }
    }

    .kit-item-list-rafter {
        color: ${i.color.neutral.gray.gray400};
        font-size: 14px;

        &:hover {
            color: ${i.color.primary.blue400};
            cursor: pointer;
        }
    }
`, j = ({ title: o, description: g, picture: x, onSelectChange: a, tagNumber: h, onRafterClick: n, isDisabled: u = !1, onClick: s, ...w }) => {
  const [p, k] = v(!1), [E, C] = v(!1);
  var N = o !== void 0, K = g !== void 0;
  const T = x !== void 0, y = h !== void 0;
  var m = s !== void 0;
  const b = a !== void 0, f = n !== void 0;
  return e.createElement(S, { $isDisabled: u, $isClickable: m, $shouldHaveGapBetweenText: N && K, onClick: (t) => {
    t.stopPropagation(), s && s();
  }, $gridTemplateColumns: (m = "", (m += b ? " min-content" : "") + (T ? " min-content" : "") + " minmax(0px, auto)" + (y ? " min-content" : "") + (f ? " min-content" : "")), ...w }, b && e.createElement("div", null, e.createElement(P, { disabled: u, onClick: (t) => t.stopPropagation(), onChange: (t) => {
    a && a(t);
  } })), (() => {
    var t = x;
    if (!t || !t.type)
      return null;
    let $ = !1, c = {}, d = "kit-item-list-picture-container";
    switch (t.type.displayName) {
      case "KitImage":
        c = { preview: { mask: e.createElement(B, null) }, width: "100%", height: "100%", rootClassName: (t.props.rootClassName || "") + " kit-item-list-image-container" }, d += " kit-item-list-image";
        break;
      case "KitIcon":
        $ = !0, c = { on: !0 }, d += " kit-item-list-icon";
    }
    var z = e.cloneElement(t, c);
    return e.createElement("div", { className: d + " " + ($ ? "noBorder" : "") }, z);
  })(), e.createElement("div", { className: "kit-item-list-text-container" }, e.createElement(l.Text, { className: "kit-item-list-text kit-item-list-title", size: "large", weight: "bold", ellipsis: { rows: 1, tooltip: !0 } }, o), e.createElement("div", { className: "kit-item-list-description-container" }, e.createElement(l.Paragraph, { className: "kit-item-list-text kit-item-list-description", size: "large", weight: "regular", ellipsis: !p && { rows: 2, expandable: !0, onEllipsis: () => C(!0) } }, g, p && e.createElement(l.Link, { className: "kit-item-list-description-collexp kit-item-list-description-collapse", onClick: (t) => {
    t.stopPropagation(), k(!1);
  } }, "Less")), E && !p && e.createElement(l.Link, { className: "kit-item-list-description-collexp kit-item-list-description-expand", onClick: (t) => {
    t.stopPropagation(), k(!0);
  } }, "More"))), y && e.createElement("div", { className: "kit-item-list-tag" }, e.createElement(I, { color: "blue" }, h)), f && e.createElement("div", { className: "kit-item-list-rafter", onClick: (t) => {
    t.stopPropagation(), n && n();
  } }, e.createElement(D, null)));
};
j.displayName = "KitItemList";
export {
  j as KitItemList
};
//# sourceMappingURL=index.js.map
