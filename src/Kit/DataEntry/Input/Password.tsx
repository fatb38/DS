import React, {forwardRef} from 'react';
import {Input as AntdInput, InputRef} from 'antd';
import {IKitPassword} from './types';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitPassword = forwardRef<InputRef, IKitPassword>(
    ({label, className, helper, iconRender, wrapperClassName, allowClear = true, ...passwordProps}, ref) => {
        const {appId} = useKitTheme();
        const clx = cn(appId, styles['kit-password'], className);

        const _getIconRender = (passwordVisible: boolean) => {
            if (passwordVisible) {
                return <FontAwesomeIcon icon={faEye} />;
            }
            return <FontAwesomeIcon icon={faEyeSlash} />;
        };

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={passwordProps.disabled}
                status={passwordProps.status}
                className={wrapperClassName}
            >
                <AntdInput.Password
                    {...passwordProps}
                    className={clx}
                    ref={ref}
                    allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : undefined}
                    iconRender={iconRender ?? _getIconRender}
                />
            </KitInputWrapper>
        );
    }
);

export default KitPassword;
