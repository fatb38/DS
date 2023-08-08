import { createGlobalStyle as t } from "styled-components";
import o from "../../fonts/Inter-roman.var.woff2.js";
import a from "../../fonts/Inter-italic.var.woff2.js";
const e = t`
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: local('Inter'), url('${o}') format('woff2');
        font-named-instance: 'Regular';
    }

    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 100 900;
        font-display: swap;
        src: local('Inter'), url('${a}') format('woff2');
        font-named-instance: 'Italic';
    }
    body {
        background: purple;
    }
`;
export {
  e as default
};
//# sourceMappingURL=style.js.map
