import l from "react";
import { Rate as n } from "antd";
import d, { css as o } from "styled-components";
import r from "../../../theme/index.js";
const c = d(n)`
    ${(e) => {
  switch (e.$color) {
    case "default":
      return;
    case "red":
      return o`
                    color: ${r.color.secondary.red.red300};
                `;
    case "green":
      return o`
                    color: ${r.color.secondary.green.green300};
                `;
    case "blue":
      return o`
                    color: ${r.color.secondary.blue.blue300};
                `;
  }
}}

    &.ant-rate .ant-rate-star {
        &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
            .ant-rate-star-first {
                color: ${r.color.secondary.mediumGrey.mediumGrey100};
            }
        }

        &:not(.ant-rate-star-full) {
            .ant-rate-star-second {
                color: ${r.color.secondary.mediumGrey.mediumGrey100};
            }
        }
    }

    &.ant-rate-disabled {
        cursor: not-allowed;

        .ant-rate-star {
            cursor: not-allowed;

            &:not(.ant-rate-star-half):not(.ant-rate-star-full) {
                div[role='radio']::after,
                div[role='radio']::before {
                    content: '';
                    position: absolute;
                    width: 2px;
                    height: 95%;
                    background-color: ${r.color.secondary.mediumGrey.mediumGrey100};
                    transform-origin: 0 0;
                    transform: rotate(320deg);
                    left: 0;
                }

                div[role='radio']::after {
                    top: 2px;
                    padding-bottom: 4px;
                    border-radius: 2px;
                }

                div[role='radio']::before {
                    background-color: ${(e) => e.$disabledStarTransparency};
                    top: 5px;
                }
            }
        }
    }
`, s = ({ color: e = "default", disabledStarTransparency: t = r.color.neutral.typography.white, ...a }) => l.createElement(c, { $color: e, $disabledStarTransparency: t, ...a });
s.displayName = "KitRate";
export {
  s as KitRate
};
