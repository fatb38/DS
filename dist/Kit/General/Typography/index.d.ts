/// <reference types="react" />
import { KitLinkProps, KitTextProps, KitTitleProps } from './types';
type CompoundedComponent = {
    Title: React.FunctionComponent<KitTitleProps>;
    Text: React.FunctionComponent<KitTextProps>;
    Link: React.FunctionComponent<KitLinkProps>;
    Paragraph: React.FunctionComponent<KitTextProps>;
    displayName?: string;
};
export declare const KitTypography: CompoundedComponent;
export {};
