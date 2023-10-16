import { FunctionComponent, ReactNode } from 'react';
import { IKitCustomTheme } from '../../theme/types';
import { IKitLocale } from '../../translation/types';
export declare const KitApp: FunctionComponent<{
    customTheme?: IKitCustomTheme;
    locale?: IKitLocale;
    children?: ReactNode;
}>;
