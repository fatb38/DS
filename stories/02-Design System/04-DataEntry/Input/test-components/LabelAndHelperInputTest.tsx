import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitInput} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

export const LabelAndHelperInputTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Label and helper input</KitTypography.Title>
        <div style={{display: 'flex', gap: '30px'}}>
            <div style={{width: '200px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitInput placeholder="Prefix & default" helper="Helper" label="Label" allowClear={false} id="focus" />
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
            </div>
            <div style={{width: '200px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
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
            </div>
            <div style={{width: '200px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
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
            </div>
        </div>
    </div>
);
