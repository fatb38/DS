import React, {FunctionComponent, ReactNode, useEffect, PropsWithChildren} from 'react';
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
import {KitLocaleProvider} from '@translation/locale-context';
import {mapKitLocaleToAntdLocale} from '@translation/utils';
import {ColorPickerPanelStyle} from '@kit/DataEntry/ColorPicker/style';
import {TourStyle} from '@kit/DataDisplay/Tour/style';
import {useKitLocale} from '@translation/useKitLocale';

export const KitApp: FunctionComponent<{
    customTheme?: IKitCustomTheme;
    locale?: IKitLocale;
    children?: ReactNode;
    id?: string;
}> = ({children, locale, customTheme, id}) => {
    return (
        <KitThemeProvider customTheme={customTheme} id={id}>
            <KitLocaleProvider>
                <KitAppConfig customTheme={customTheme} locale={locale}>
                    {children}
                </KitAppConfig>
            </KitLocaleProvider>
        </KitThemeProvider>
    );
};

const KitAppConfig: FunctionComponent<
    PropsWithChildren<{
        customTheme?: IKitCustomTheme;
        locale?: IKitLocale;
    }>
> = ({children, locale, customTheme}) => {
    const {theme} = useKitTheme();
    const {setKitLocale} = useKitLocale();

    useEffect(() => {
        if (locale !== undefined) {
            setKitLocale(locale);
        }
    }, [locale, setKitLocale]);

    return (
        <ConfigProvider theme={mapKitThemeToAntdTheme(theme, customTheme)} locale={mapKitLocaleToAntdLocale(locale)}>
            <KitNotificationProvider>
                <KitSnackBarProvider />
                <GlobalStyles />
                <ColorPickerPanelStyle />
                <DropDownStyle />
                <SelectDropDownStyle />
                <TabsDropDownStyle />
                <DatePickerDropDownStyle />
                <NotificationStyle />
                <TypographyStyle $theme={theme.components.Typography} />
                <TourStyle $buttonTheme={theme.components.Button} />
                {children}
            </KitNotificationProvider>
        </ConfigProvider>
    );
};
