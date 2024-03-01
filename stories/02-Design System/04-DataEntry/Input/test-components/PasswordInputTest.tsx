import React, {FunctionComponent, useState} from 'react';
import {KitTypography} from '@kit/General';
import {KitInput} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

export const PasswordInputTest: FunctionComponent = () => {
    const [passwordVisible, setPasswordVisible] = useState(true);

    return (
        <div>
            <KitTypography.Title level="h3">Password input</KitTypography.Title>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitInput.Password value="coucou" />
                    <KitInput.Password
                        prefix={<FontAwesomeIcon icon={faUser} />}
                        value="coucou"
                        visibilityToggle={{
                            visible: passwordVisible,
                            onVisibleChange: setPasswordVisible
                        }}
                    />
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitInput.Password disabled />
                    <KitInput.Password prefix={<FontAwesomeIcon icon={faUser} />} disabled />
                </div>
            </div>
        </div>
    );
};
