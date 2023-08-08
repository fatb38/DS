import r from "react";
import { styled as g } from "styled-components";
import l from "react-hot-toast";
import a from "../../../theme/index.js";
import { CloseOutlined as d } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
const k = 4e3, $ = ({ message: t, closable: e, ctaText: o, ctaOnClick: s, duration: n = k }) => (c(), l(r.createElement(p, { message: t, ctaText: o, ctaOnClick: s, closable: e }), { duration: n })), c = () => {
  l.remove();
}, m = g.div`
    display: grid;
    grid-template-columns: auto ${(t) => t.$showCtaContainer ? "min-content" : ""} ${(t) => t.$showCloseContainer ? "12px" : ""};
    column-gap: 8px;
    align-items: center;
    min-height: 24px;
    padding: 8px 16px;
    background-color: ${a.color.neutral.gray.gray700};
    border: 1px solid ${a.color.neutral.gray.gray700};
    border-radius: 7px;
    box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.3);
    font-family: ${a.typography.fontFamily};

    .kit-snackbar-grid-one {
        min-width: 150px;
        grid-column: 1;
    }

    .kit-snackbar-grid-two {
        grid-column: 2;
    }

    .kit-snackbar-grid-three {
        grid-column: ${(t) => t.$showCtaContainer ? "3" : "2"};
    }

    .kit-snackbar-grid {
        .kit-snackbar-title {
            color: ${a.color.neutral.gray.gray400};
            font-size: ${a.typography.fontSize5};
            font-weight: ${a.typography.regularFontWeight};
        }

        .kit-snackbar-cta-container {
            height: 23px;
            line-height: 23px;
            width: fit-content;
            padding: 0px 12px;
            border: 0.499px solid ${a.color.neutral.gray.gray200};
            border-radius: 14px;
            cursor: pointer;

            .kit-snackbar-cta {
                color: ${a.color.neutral.gray.gray200};
                font-size: 10px;
                font-weight: ${a.typography.mediumfontWeight};
                text-transform: uppercase;
            }

            &:hover {
                border-color: ${a.color.neutral.gray.gray400};

                .kit-snackbar-cta {
                    color: ${a.color.neutral.gray.gray400};
                }
            }
        }

        .kit-snackbar-close-container {
            color: ${a.color.neutral.gray.gray400};
            font-size: 12px;
            cursor: pointer;

            &:hover {
                color: ${a.color.neutral.gray.gray500};
            }
        }
    }
`, p = ({ message: t, ctaText: e, ctaOnClick: o, closable: i }) => {
  var n = e !== void 0 && o !== void 0, i = i !== void 0;
  return r.createElement(m, { $showCtaContainer: n, $showCloseContainer: i }, r.createElement("div", { className: "kit-snackbar-grid kit-snackbar-grid-one" }, r.createElement("div", { className: "kit-snackbar-title" }, t)), n && r.createElement("div", { className: "kit-snackbar-grid kit-snackbar-grid-two" }, r.createElement("div", { className: "kit-snackbar-cta-container", onClick: () => {
    o(), c();
  } }, r.createElement("div", { className: "kit-snackbar-cta" }, e))), i && r.createElement("div", { className: "kit-snackbar-grid kit-snackbar-grid-three" }, r.createElement("div", { className: "kit-snackbar-close-container", onClick: () => c() }, r.createElement(d, null))));
};
export {
  c as closeSnackBar,
  p as default,
  $ as openSnackBar
};
//# sourceMappingURL=SnackBar.js.map
