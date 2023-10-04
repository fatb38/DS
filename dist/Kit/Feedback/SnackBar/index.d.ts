/// <reference types="react" />
export declare const openKitSnackBar: ({ message, closable, ctaText, ctaOnClick, duration }: import("./types").IKitOpenSnackBar) => string;
export declare const closeKitSnackBar: () => void;
export declare const KitSnackBarProvider: import("react").FunctionComponent<{}>;
