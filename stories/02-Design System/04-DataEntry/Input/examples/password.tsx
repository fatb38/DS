import React, {useState} from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash, faUser} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <KitSpace direction="vertical">
            <KitSpace direction="vertical">
                <KitSpace>
                    <KitInput.Password />
                    <KitInput.Password prefix={<FontAwesomeIcon icon={faUser} />} />
                </KitSpace>
                <KitSpace>
                    <KitInput.Password disabled={true} />
                    <KitInput.Password prefix={<FontAwesomeIcon icon={faUser} />} disabled={true} />
                </KitSpace>
            </KitSpace>
            <KitSpace>
                <KitInput.Password
                    iconRender={visible =>
                        visible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />
                    }
                    visibilityToggle={{visible: passwordVisible, onVisibleChange: setPasswordVisible}}
                />
                <KitButton type="primary" onClick={() => setPasswordVisible(prevState => !prevState)}>
                    {passwordVisible ? 'Hide' : 'Show'}
                </KitButton>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
