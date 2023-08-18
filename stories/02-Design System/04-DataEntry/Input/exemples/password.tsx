import React, {useState} from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General';
import {UserOutlined, EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';

const App = ({}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <KitSpace direction="vertical">
            <KitSpace direction="vertical">
                <KitSpace>
                    <KitInput.Password />
                    <KitInput.Password prefix={<UserOutlined />} />
                </KitSpace>
                <KitSpace>
                    <KitInput.Password disabled={true} />
                    <KitInput.Password prefix={<UserOutlined />} disabled={true} />
                </KitSpace>
            </KitSpace>
            <KitSpace>
                <KitInput.Password
                    iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
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
