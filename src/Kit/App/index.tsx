import React from 'react';
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
import {mapKitThemeToAntdTheme} from '@theme/utils/antd-mapper';

export const KitApp: React.FunctionComponent<{customTheme?: IKitCustomTheme; children?: any}> = ({
    children,
    customTheme
}) => {
    return (
        <KitThemeProvider>
            <KitAppConfig customTheme={customTheme}>{children}</KitAppConfig>
        </KitThemeProvider>
    );
};

const KitAppConfig: React.FunctionComponent<{customTheme?: IKitCustomTheme; children?: any}> = ({
    children,
    customTheme
}) => {
    const {theme, overrideTheme} = useKitTheme();

    if (customTheme !== undefined) {
        overrideTheme(customTheme);
    }

    return (
        <ConfigProvider theme={mapKitThemeToAntdTheme(theme)}>
            <KitNotificationProvider>
                <KitSnackBarProvider />
                <GlobalStyles />
                <DropDownStyle $theme={theme.components.DropDown} />
                <SelectDropDownStyle $theme={theme.components.Select.DropDown} />
                <DatePickerDropDownStyle $theme={theme.components.DatePicker.DropDown} />
                <NotificationStyle $theme={theme.components.Notification} />
                <TypographyStyle $theme={theme.components.Typography} />
                {children}
            </KitNotificationProvider>
        </ConfigProvider>
    );
};
