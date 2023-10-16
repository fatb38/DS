import { FunctionComponent } from 'react';
import { IKitOpenSnackBar, IKitSnackBar } from './types';
export declare const openSnackBar: ({ message, closable, ctaText, ctaOnClick, duration }: IKitOpenSnackBar) => string;
export declare const closeSnackBar: () => void;
declare const KitSnackBar: FunctionComponent<IKitSnackBar>;
export default KitSnackBar;
