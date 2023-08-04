import { closeSnackBar, openSnackBar } from "./SnackBar";
import InternalSnackBarProvider from "./SnackBarProvider";

export const openKitSnackBar = openSnackBar;
export const closeKitSnackBar = closeSnackBar;

export const KitSnackBarProvider = InternalSnackBarProvider;
KitSnackBarProvider.displayName = "KitSnackBarProvider";
