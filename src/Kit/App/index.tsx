import React, {FunctionComponent, ReactNode, useEffect, PropsWithChildren} from 'react';
import {ConfigProvider} from 'antd';
import KitSnackBarProvider from '@kit/Feedback/SnackBar/SnackBarProvider';
import {DropDownStyle} from '@kit/Navigation/DropDown/style';
import {SelectDropDownStyle} from '@kit/DataEntry/Select/style';
import {DatePickerDropDownStyle} from '@kit/DataEntry/DatePicker/style';
import {NotificationStyle} from '@kit/Feedback/Notification/style';
import {KitThemeProvider} from '@theme/theme-context';
import {IKitCustomTheme} from '@theme/types';
import {TypographyStyle} from '@kit/General/Typography/style';
import {TabsDropDownStyle} from '@kit/DataDisplay/Tabs/style';
import {antdThemeConfig} from '@theme/utils/tokens-mapper';
import {IKitLocale} from '@translation/types';
import {KitLocaleProvider} from '@translation/locale-context';
import {mapKitLocaleToAntdLocale} from '@translation/utils';
import {ColorPickerPanelStyle} from '@kit/DataEntry/ColorPicker/style';
import {TourStyle} from '@kit/DataDisplay/Tour/style';
import {useKitLocale} from '@translation/useKitLocale';
import {KitNotificationProvider} from '@kit/Feedback/Notification/notification-provider';
import { KitFontStyle } from '@kit/Font';

export const KitApp: FunctionComponent<{
    customTheme?: IKitCustomTheme;
    locale?: IKitLocale;
    children?: ReactNode;
    id?: string;
}> = ({children, locale, customTheme, id}) => {
    return (
        <KitThemeProvider customTheme={customTheme} id={id}>
            <KitLocaleProvider>
                <KitAppConfig locale={locale}>{children}</KitAppConfig>
            </KitLocaleProvider>
        </KitThemeProvider>
    );
};

const KitAppConfig: FunctionComponent<PropsWithChildren<{locale?: IKitLocale, includeFont?: boolean}>> = ({children, locale, includeFont = true}) => {
    const {setKitLocale} = useKitLocale();

    useEffect(() => {
        if (locale !== undefined) {
            setKitLocale(locale);
        }
    }, [locale, setKitLocale]);

    return (
        <ConfigProvider theme={antdThemeConfig} locale={mapKitLocaleToAntdLocale(locale)}>
            <KitNotificationProvider>
                {includeFont && <KitFontStyle/>}
                <KitSnackBarProvider />
                <ColorPickerPanelStyle />
                <DropDownStyle />
                <SelectDropDownStyle />
                <TabsDropDownStyle />
                <DatePickerDropDownStyle />
                <NotificationStyle />
                <TypographyStyle />
                <TourStyle />
                {children}
            </KitNotificationProvider>
        </ConfigProvider>
    );
};
