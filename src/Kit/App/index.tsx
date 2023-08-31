import React from 'react';
import {ConfigProvider} from 'antd';
import {KitAppProps} from './types';
import GlobalStyles from './style';
import theme from '@theme/index';
import KitSnackBarProvider from '@kit/Feedback/SnackBar/SnackBarProvider';
import {KitNotificationProvider} from '@kit/Feedback/Notification/useKitNotification';
import {DropDownStyle} from '@kit/Navigation/DropDown/style';
import {SelectDropDownStyle} from '@kit/DataEntry/Select/style';
import {DatePickerDropDownStyle} from '@kit/DataEntry/DatePicker/style';
import {NotificationStyle} from '@kit/Feedback/Notification/style';

export const KitApp: React.FunctionComponent<KitAppProps> = props => {
    return (
        <ConfigProvider theme={theme}>
            <KitNotificationProvider>
                <KitSnackBarProvider />
                <GlobalStyles />
                <DropDownStyle />
                <SelectDropDownStyle />
                <DatePickerDropDownStyle />
                <NotificationStyle />
                {props.children}
            </KitNotificationProvider>
        </ConfigProvider>
    );
};
