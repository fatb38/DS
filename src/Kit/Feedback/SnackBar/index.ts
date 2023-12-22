import InternalSnackBarProvider from './SnackBarProvider';
import {closeSnackBar, openSnackBar} from './snack-bar-function';

export const openKitSnackBar = openSnackBar;
export const closeKitSnackBar = closeSnackBar;

export const KitSnackBarProvider = InternalSnackBarProvider;
