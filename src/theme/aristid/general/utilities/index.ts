import {IKitUtilities, IKitUtilitiesCssTokens} from '@theme/types/utilities';

export const utilities: IKitUtilities = {
    border: 'var(--general-colors-neutral-grey-200)',
    disabled: 'var(--general-colors-neutral-grey-400)',
    focus: 'var(--general-colors-primary-200)',
    light: 'var(--general-colors-neutral-white)',
    colorNone: 'rgba(255, 255, 255, 0.00)',
    main: {
        light: 'var(--general-colors-primary-100)',
        medium: 'var(--general-colors-primary-200)',
        default: 'var(--general-colors-primary-400)',
        dark: 'var(--general-colors-primary-500)',
        deepDark: 'var(--general-colors-primary-600)'
    },
    neutral: {
        light: 'var(--general-colors-neutral-grey-100)',
        medium: 'var(--general-colors-neutral-grey-200)',
        dark: 'var(--general-colors-neutral-grey-400)',
        deepDark: 'var(--general-colors-neutral-grey-600)'
    },
    error: {
        light: 'var(--general-colors-secondary-error-100)',
        medium: 'var(--general-colors-secondary-error-200)',
        default: 'var(--general-colors-secondary-error-400)',
        dark: 'var(--general-colors-secondary-error-500)'
    },
    success: {
        light: 'var(--general-colors-secondary-success-100)',
        medium: 'var(--general-colors-secondary-success-200)',
        default: 'var(--general-colors-secondary-success-400)',
        dark: 'var(--general-colors-secondary-success-600)'
    },
    warning: {
        light: 'var(--general-colors-secondary-warning-100)',
        medium: 'var(--general-colors-secondary-warning-200)',
        default: 'var(--general-colors-secondary-warning-400)',
        dark: 'var(--general-colors-secondary-warning-600)'
    },
    text: {
        light: 'var(--general-utilities-light)',
        primary: 'var(--general-utilities-neutral-deepDark)',
        disabled: 'var(--general-utilities-disabled)',
        blue: 'var(--general-utilities-main-default)',
        success: 'var(--general-utilities-success-default)',
        warning: 'var(--general-utilities-warning-default)',
        error: 'var(--general-utilities-error-default)'
    },
    shadow: {
        light: '0px 3px 8px 0px rgba(0, 0, 0, 0.10)',
        medium: '0px 3px 14px 0px rgba(0, 0, 0, 0.30)',
        blue: '0px 3px 8px 0px var(--general-colors-primary-200)'
    }
};

const base = '--general-utilities';

export const utilitiesCssTokens: IKitUtilitiesCssTokens = {
    border: `${base}-border`,
    disabled: `${base}-disabled`,
    focus: `${base}-focus`,
    light: `${base}-light`,
    colorNone: `${base}-colorNone`,
    main: {
        light: `${base}-main-light`,
        medium: `${base}-main-medium`,
        default: `${base}-main-default`,
        dark: `${base}-main-dark`,
        deepDark: `${base}-main-deepDark`
    },
    neutral: {
        light: `${base}-neutral-light`,
        medium: `${base}-neutral-medium`,
        dark: `${base}-neutral-dark`,
        deepDark: `${base}-neutral-deepDark`
    },
    error: {
        light: `${base}-error-light`,
        medium: `${base}-error-medium`,
        default: `${base}-error-default`,
        dark: `${base}-error-dark`
    },
    success: {
        light: `${base}-success-light`,
        medium: `${base}-success-medium`,
        default: `${base}-success-default`,
        dark: `${base}-success-dark`
    },
    warning: {
        light: `${base}-warning-light`,
        medium: `${base}-warning-medium`,
        default: `${base}-warning-default`,
        dark: `${base}-warning-dark`
    },
    text: {
        light: `${base}-text-light`,
        primary: `${base}-text-primary`,
        disabled: `${base}-text-disabled`,
        blue: `${base}-text-blue`,
        success: `${base}-text-success`,
        warning: `${base}-text-warning`,
        error: `${base}-text-error`
    },
    shadow: {
        light: `${base}-shadow-light`,
        medium: `${base}-shadow-medium`,
        blue: `${base}-shadow-blue`
    }
};
