import React, {FunctionComponent, ReactNode, useEffect} from 'react';
import {ConfigProvider} from 'antd';
import GlobalStyles from './style';
import KitSnackBarProvider from '@kit/Feedback/SnackBar/SnackBarProvider';
import {KitNotificationProvider} from '@kit/Feedback/Notification/useKitNotification';
import {DropDownStyle} from '@kit/Navigation/DropDown/style';
import {SelectDropDownStyle} from '@kit/DataEntry/Select/style';
import {DatePickerDropDownStyle} from '@kit/DataEntry/DatePicker/style';
import {NotificationStyle} from '@kit/Feedback/Notification/style';
import {KitThemeProvider, useKitTheme} from '@theme/theme-context';
import {IKitCustomTheme} from '@theme/types';
import {TypographyStyle} from '@kit/General/Typography/style';
import {TabsDropDownStyle} from '@kit/DataDisplay/Tabs/style';
import {mapKitThemeToAntdTheme} from '@theme/utils/tokens-mapper';
import {IKitLocale} from '@translation/types';
import {KitLocaleProvider, useKitLocale} from '@translation/locale-context';
import {mapKitLocaleToAntdLocale} from '@translation/utils';
import {ColorPickerPanelStyle} from '@kit/DataEntry/ColorPicker/style';

export const KitApp: FunctionComponent<{
    customTheme?: IKitCustomTheme;
    locale?: IKitLocale;
    children?: ReactNode;
}> = ({children, locale, customTheme}) => {
    return (
        <KitThemeProvider>
            <KitLocaleProvider>
                <KitAppConfig customTheme={customTheme} locale={locale}>
                    {children}
                </KitAppConfig>
            </KitLocaleProvider>
        </KitThemeProvider>
    );
};

const KitAppConfig: FunctionComponent<{customTheme?: IKitCustomTheme; locale?: IKitLocale; children?: ReactNode}> = ({
    children,
    locale,
    customTheme
}) => {
    const {theme, setCustomTheme} = useKitTheme();
    const {setKitLocale} = useKitLocale();

    useEffect(() => {
        if (customTheme !== undefined) {
            setCustomTheme(customTheme);
        }
    }, [customTheme]);

    useEffect(() => {
        if (locale !== undefined) {
            setKitLocale(locale);
        }
    }, [locale]);

    return (
        <ConfigProvider theme={mapKitThemeToAntdTheme(theme)} locale={mapKitLocaleToAntdLocale(locale)}>
            <KitNotificationProvider>
                <KitSnackBarProvider />
                <GlobalStyles />
                <ColorPickerPanelStyle $theme={theme.components.ColorPicker} />
                <DropDownStyle $theme={theme.components.DropDown} />
                <SelectDropDownStyle $theme={theme.components.Select.DropDown} />
                <TabsDropDownStyle $theme={theme.components.Tabs.DropDown} />
                <DatePickerDropDownStyle $theme={theme.components.DatePicker.DropDown} />
                <NotificationStyle $theme={theme.components.Notification} />
                <TypographyStyle $theme={theme.components.Typography} />
                {children}
            </KitNotificationProvider>
        </ConfigProvider>
    );
};
