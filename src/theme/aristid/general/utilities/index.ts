import {IKitUtilities, IKitUtilitiesCssTokens} from '@theme/types/utilities';

export const utilities: IKitUtilities = {
    border: 'var(--general-colors-neutral-grey-grey200)',
    disabled: 'var(--general-colors-neutral-grey-grey400)',
    focus: 'var(--general-colors-primary-blue200)',
    light: 'var(--general-colors-neutral-white)',
    colorNone: 'rgba(255, 255, 255, 0.00)',
    main: {
        mainLight: 'var(--general-colors-primary-blue100)',
        mainMedium: 'var(--general-colors-primary-blue200)',
        mainColor: 'var(--general-colors-primary-blue400)',
        mainDark: 'var(--general-colors-primary-blue500)',
        mainDeepDark: 'var(--general-colors-primary-blue600)'
    },
    neutral: {
        neutralLight: 'var(--general-colors-neutral-grey-grey100)',
        neutralMedium: 'var(--general-colors-neutral-grey-grey200)',
        neutralDark: 'var(--general-colors-neutral-grey-grey400)',
        neutralDeepDark: 'var(--general-colors-neutral-grey-grey600)'
    },
    error: {
        errorLight: 'var(--general-colors-secondary-error-red100)',
        errorMedium: 'var(--general-colors-secondary-error-red200)',
        errorColor: 'var(--general-colors-secondary-error-red400)',
        errorDark: 'var(--general-colors-secondary-error-red500)'
    },
    success: {
        successLight: 'var(--general-colors-secondary-success-green100)',
        successMedium: 'var(--general-colors-secondary-success-green200)',
        successColor: 'var(--general-colors-secondary-success-green400)',
        successDark: 'var(--general-colors-secondary-success-green600)'
    },
    warning: {
        warningLight: 'var(--general-colors-secondary-warning-orange100)',
        warningMedium: 'var(--general-colors-secondary-warning-orange200)',
        warningColor: 'var(--general-colors-secondary-warning-orange400)',
        warningDark: 'var(--general-colors-secondary-warning-orange600)'
    },
    text: {
        textLight: 'var(--general-utilities-light)',
        textPrimary: 'var(--general-utilities-neutral-neutralDeepDark)',
        textDisabled: 'var(--general-utilities-disabled)',
        textBlue: 'var(--general-utilities-main-mainColor)',
        textSuccess: 'var(--general-utilities-success-successColor)',
        textWarning: 'var(--general-utilities-warning-warningColor)',
        textError: 'var(--general-utilities-error-errorColor)'
    },
    shadow: {
        shadowLight: '0px 3px 8px 0px rgba(0, 0, 0, 0.10)',
        shadowMedium: '0px 3px 14px 0px rgba(0, 0, 0, 0.30)',
        shadowBlue: '0px 3px 8px 0px var(--general-colors-primary-blue200)'
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
        mainLight: `${base}-main-mainLight`,
        mainMedium: `${base}-main-mainMedium`,
        mainColor: `${base}-main-mainColor`,
        mainDark: `${base}-main-mainDark`,
        mainDeepDark: `${base}-main-mainDeepDark`
    },
    neutral: {
        neutralLight: `${base}-neutral-neutralLight`,
        neutralMedium: `${base}-neutral-neutralMedium`,
        neutralDark: `${base}-neutral-neutralDark`,
        neutralDeepDark: `${base}-neutral-neutralDeepDark`
    },
    error: {
        errorLight: `${base}-error-errorLight`,
        errorMedium: `${base}-error-errorMedium`,
        errorColor: `${base}-error-errorColor`,
        errorDark: `${base}-error-errorDark`
    },
    success: {
        successLight: `${base}-success-successLight`,
        successMedium: `${base}-success-successMedium`,
        successColor: `${base}-success-successColor`,
        successDark: `${base}-success-successDark`
    },
    warning: {
        warningLight: `${base}-warning-warningLight`,
        warningMedium: `${base}-warning-warningMedium`,
        warningColor: `${base}-warning-warningColor`,
        warningDark: `${base}-warning-warningDark`
    },
    text: {
        textLight: `${base}-text-textLight`,
        textPrimary: `${base}-text-textPrimary`,
        textDisabled: `${base}-text-textDisabled`,
        textBlue: `${base}-text-textBlue`,
        textSuccess: `${base}-text-textSuccess`,
        textWarning: `${base}-text-textWarning`,
        textError: `${base}-text-textError`
    },
    shadow: {
        shadowLight: `${base}-shadow-shadowLight`,
        shadowMedium: `${base}-shadow-shadowMedium`,
        shadowBlue: `${base}-shadow-shadowBlue`
    }
};
