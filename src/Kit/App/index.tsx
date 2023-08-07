import React from "react";
import { ConfigProvider } from "antd";
import theme from "../../theme/index";
import { DropDownStyle } from "../DataEntry/Select/style";
import KitSnackBarProvider from "../Feedback/SnackBar/SnackBarProvider";
import { KitAppProps } from "./types";
import GlobalStyles from "./style";

export const KitApp: React.FunctionComponent<KitAppProps> = (props) => {
  return (
    <ConfigProvider theme={theme}>
      <KitSnackBarProvider />
      <GlobalStyles />
      <DropDownStyle />
      {props.children}
    </ConfigProvider>
  );
};
