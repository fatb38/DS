import n, { createGlobalStyle as r, css as i } from "styled-components";
import e, { headerTheme as o } from "./theme.js";
const a = n.div`
    box-sizing: border-box;
    min-width: ${e.optionHeight}px;
    width: ${e.optionHeight}px;
    height: ${e.optionHeight}px;
    padding: ${e.optionHeight / 4}px;

    div {
        width: ${e.optionHeight / 2}px;
        height: ${e.optionHeight / 2}px;
        border-radius: 2px;
    }
`, c = n.div`
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
`, s = r`
    &.kit-header-select-droppdown {
        .ant-select-dropdown {
            font-family: ${o.fontFamily};
            font-weight: ${o.fontWeight};
            color: ${o.itemsColor};

            .ant-select-item, .ant-select-item-option, .ant-select-item-option-selected {
                border-radius: ${o.borderRadius} 0 0 ${o.borderRadius};
                min-height: ${o.optionHeight}px;
                font-weight: ${o.fontWeight};
                color: ${o.itemsColor};
            }

            .ant-select-item-group {
                color: ${o.groupsColor};
                font-weight: ${o.groupsFontWeight};
            }
        }
        .kit-select-dropdown-content, .rc-virtual-list-holder {
            background-color: ${o.dropdownBgColor};
            background: red !important;
            padding-left: 0;
            padding-bottom: 0;

            .ant-select-item.ant-select-item-option-selected, .ant-select-item.ant-select-item-option-active {
                background: ${o.selectedOptionBg};
                font-weight: ${o.fontWeight};
                color: ${o.itemsColor};
            }
            .ant-select-item.ant-select-item-option-active {
                color: ${o.selectedItemColor};
            }
        }

        .kit-select-dropdown-bottom {
            .kit-select-dropdown-content, .rc-virtual-list-holder {
                border-radius: 0 0 ${o.borderRadius} ${e.borderRadius} ;
            }

            &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder,
            &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder {
                border-radius: ${o.borderRadius} ${o.borderRadius} 0 0 ;
            }
        }

        .kit-select-dropdown-top {
            .kit-select-dropdown-content, .rc-virtual-list-holder {
                border-radius: ${o.borderRadius} ${o.borderRadius} 0 0 ;
            }

            &.ant-select-dropdown-placement-bottomLeft .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-bottomRight .kit-select-dropdown-content,
            &.ant-select-dropdown-placement-bottomLeft .rc-virtual-list-holder,
            &.ant-select-dropdown-placement-bottomRight .rc-virtual-list-holder {
                border-radius: 0 0 ${o.borderRadius} ${o.borderRadius} ;
            }
        }
    }


    .ant-select-dropdown {
        background: transparent;
        overflow: visible;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-family: ${e.fontFamily};
        font-weight: ${e.fontWeight};
        color: ${e.itemsColor};
        ;
        .ant-select-item, .ant-select-item-option, .ant-select-item-option-selected {
            border-radius: ${e.borderRadius};
            border: none;
            min-height: ${e.optionHeight}px;
            font-weight: ${e.fontWeight};
            color: ${e.itemsColor};

            .ant-select-item-option-content {
                display: flex;
                align-items: center;
            }
        }


        .ant-select-item-group {
            color: ${e.groupsColor};
            font-weight: ${e.groupsFontWeight};
        }
    }

    .rc-virtual-list-holder {
        background-color: ${e.dropdownBgColor};
        padding-left: 0px;
        overflow: hidden;
        border-radius: ${e.borderRadius} ;

        .ant-select-item.ant-select-item-option {
            padding-left: 10px;
        }
    }

    .kit-select-dropdown-content {
        background-color: ${e.dropdownBgColor};
        padding-left: 10px;
        padding-bottom: 10px;
        overflow: hidden;


        .ant-select-item.ant-select-item-option {
            padding: 0;
            margin: 0;
            border: none;
            background: transparent;

            &:not(:last-child) {
                margin-bottom: 5px;
            }

            .kit-icon {
                box-sizing: border-box;
                height: ${e.optionHeight}px;
                width: ${e.optionHeight}px;
                text-align: center;
            }
        }
        .ant-select-item.ant-select-item-option-selected, .ant-select-item.ant-select-item-option-active {
            background: ${e.selectedOptionBg};
            font-weight: ${e.fontWeight};
            color: ${e.itemsColor};
        }

        .ant-select-item.ant-select-item-option-disabled {
            opacity: .5;
        }

        .ant-select-item.ant-select-item-option-active {
            color: ${e.selectedItemColor};
        }
    }

    .kit-select-dropdown-bottom {
        .kit-select-dropdown-content {
            border-radius: 0 0 ${e.borderRadius} ${e.borderRadius} ;
            transform: translateY(-5px);
        }

        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder,
        &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder {
            border-radius: ${e.borderRadius} ${e.borderRadius} 0 0 ;
        }
    }

    .kit-select-dropdown-top {
        .kit-select-dropdown-content {
            border-radius: ${e.borderRadius} ${e.borderRadius} 0 0 ;
            transform: translateY(5px);
        }

        &.ant-select-dropdown-placement-bottomLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-bottomRight .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-bottomLeft .rc-virtual-list-holder,
        &.ant-select-dropdown-placement-bottomRight .rc-virtual-list-holder {
            border-radius: 0 0 ${e.borderRadius} ${e.borderRadius} ;
        }
    }
`, p = i`
    &.ant-select.ant-select-compact-item:not(.ant-select-compact-last-item) {
        margin-inline-end: 0px;
    }

    &.ant-select-focused.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) {
        .ant-select-selector {
            box-shadow: none;
        }
    }

    &.ant-select-open {
        &:not(.ant-select-compact-item) {
            &.ant-select-bottom .ant-select-selector {
                border-radius: ${(t) => t.theme.borderRadius} ${(t) => t.theme.borderRadius} 0 0;
            }

            &.ant-select-top .ant-select-selector {
                border-radius: 0 0 ${(t) => t.theme.borderRadius} ${(t) => t.theme.borderRadius};
            }
        }

        &.ant-select-compact-item {
            &.ant-select-bottom .ant-select-selector {
                border-radius: ${(t) => t.theme.borderRadius} 0 0 0;
            }

            &.ant-select-top .ant-select-selector {
                border-radius: 0 0 0 ${(t) => t.theme.borderRadius};
            }
        }
    }

    &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
        padding: 8px 10px;

        .ant-select-selection-item,
        .ant-select-selection-placeholder {
            display: flex;
            align-items: center;
            font-weight: ${(t) => t.theme.selectionFontWeight};
            color: ${(t) => t.theme.selectionColor};

            & .anticon,
            & .kit-icon {
                background-color: transparent;
                height: ${e.optionHeight};
            }
        }

        .ant-select-arrow {
            color: ${(t) => t.theme.selectionColor};
        }

        &.ant-select:not(.ant-select-customize-input).ant-select-disabled {
            .ant-select-selector {
                background-color: ${(t) => t.theme.disabledBgColor};
                color: ${(t) => t.theme.disabledColor};

                .ant-select-selection-item {
                    color: ${(t) => t.theme.disabledColor};
                }
            }
            .ant-select-arrow {
                color: ${(t) => t.theme.disabledColor};
            }

            .anticon {
                color: ${(t) => t.theme.disabledColor};
            }
        }

        &.ant-header-action-select {
            font-weight: ${(t) => t.theme.headerSelectionFontWeight};
            color: ${(t) => t.theme.selectionColor};
        }

        .ant-select-selection-item {
            color: ${(t) => t.theme.selectionColor};
        }
    }
`;
export {
  s as DropDownStyle,
  p as KitSelectStyle,
  a as StyledBadge,
  c as StyledLabel
};
