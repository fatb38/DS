import e from "react";
import f from "styled-components";
import { AutoComplete as C } from "antd";
import { SearchOutlined as b } from "/builds/dev/design-system/node_modules/@ant-design/icons/es/index.js";
import "../Checkbox/index.js";
import { KitInput as h } from "../Input/index.js";
import "../InputNumber/index.js";
import "../Radio/index.js";
import "../Rate/index.js";
import "../Select/index.js";
import "../Tag/index.js";
import "../Switch/index.js";
import "../DatePicker/index.js";
import w from "../Input/InputWrapper.js";
const A = f(C)``, E = e.forwardRef(({ allowClear: l, label: r, helper: a, autoFocus: p, defaultValue: m, disabled: t, placeholder: u, status: o, value: i, onBlur: s, onChange: K, popupClassName: d, ...n }, c) => e.createElement(w, { label: r, helper: a, disabled: t, status: o }, e.createElement(A, { ...n, ref: c, disabled: t, popupClassName: "ant-select-dropdown kit-select-dropdown-bottom " + (d || "") }, e.createElement(h, { prefix: e.createElement(b, null), allowClear: l, autoFocus: p, defaultValue: m, placeholder: u, status: o, value: i, onBlur: s }))));
E.displayName = "KitAutoComplete";
export {
  E as KitAutoComplete
};
