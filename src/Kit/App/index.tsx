import React from 'react';
import {ConfigProvider} from 'antd';
import theme from '../../theme/index';
import {DropDownStyle} from '../DataEntry/Select/style';
import KitSnackBarProvider from '../Feedback/SnackBar/SnackBarProvider';
import {KitAppProps} from './types';
import GlobalStyles from './style';
import {DatePickerDropDownStyle} from '@kit/DataEntry/DatePicker/style';
import {NotificationStyle} from '@kit/Feedback/Notification/style';
import {DisplayModeProvider} from '@kit/Feedback/Notification/useKitNotification';

export const KitApp: React.FunctionComponent<KitAppProps> = props => {
    return (
        <ConfigProvider theme={theme}>
            <DisplayModeProvider>
                <KitSnackBarProvider />
                <GlobalStyles />
                <DropDownStyle />
                <DatePickerDropDownStyle />
                <NotificationStyle />
                {props.children}
            </DisplayModeProvider>
        </ConfigProvider>
    );
};
