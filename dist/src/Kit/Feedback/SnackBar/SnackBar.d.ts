import React from 'react';
import { KitOpenSnackBarProps, KitSnackBarProps } from './types';
export declare const openSnackBar: ({ message, closable, ctaText, ctaOnClick, duration }: KitOpenSnackBarProps) => string;
export declare const closeSnackBar: () => void;
declare const KitSnackBar: React.FunctionComponent<KitSnackBarProps>;
export default KitSnackBar;
