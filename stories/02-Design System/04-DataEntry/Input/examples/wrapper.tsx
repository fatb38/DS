import React from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const App = () => (
        <KitSpace>
            <KitSpace direction="vertical" style={{width: '400px', paddingRight: '20px'}}>
                <KitInput placeholder="Prefix & default" helper="Helper" label="Label" allowClear={false} />
                <KitInput
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                />
                <KitInput
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    disabled
                />
                <KitInput
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    status="warning"
                />
                <KitInput
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    status="error"
                />
            </KitSpace>
            <KitSpace direction="vertical" style={{width: '400px', paddingRight: '20px'}}>
                <KitInput.Password placeholder="Prefix & default" helper="Helper" label="Label" allowClear={false} />
                <KitInput.Password
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                />
                <KitInput.Password
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    disabled
                />
                <KitInput.Password
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    status="warning"
                    showCount
                />
                <KitInput.Password
                    placeholder="Prefix & default"
                    prefix={<FontAwesomeIcon icon={faUser} />}
                    helper="Helper"
                    label="Label"
                    status="error"
                    showCount
                />
            </KitSpace>
            <KitSpace direction="vertical" style={{width: '400px', paddingRight: '20px'}}>
                <KitInput.TextArea
                    placeholder="Prefix & default"
                    helper="Helper"
                    label="Label"
                    allowClear={false}
                    showCount
                />
                <KitInput.TextArea placeholder="Prefix & default" helper="Helper" label="Label" showCount />
                <KitInput.TextArea placeholder="Prefix & default" helper="Helper" label="Label" disabled showCount />
                <KitInput.TextArea
                    placeholder="Prefix & default"
                    helper="Helper"
                    label="Label"
                    status="warning"
                    showCount
                />
                <KitInput.TextArea
                    placeholder="Prefix & default"
                    helper="Helper"
                    label="Label"
                    status="error"
                    showCount
                />
            </KitSpace>
        </KitSpace>
    );

export default App;
