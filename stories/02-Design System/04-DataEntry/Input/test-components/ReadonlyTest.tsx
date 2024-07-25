import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitInput} from '@kit/DataEntry';

export const ReadonlyTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Readonly input</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <div style={{display: 'flex', gap: '20px'}}>
                <KitInput
                    value="placeholder with helper"
                    placeholder="Readonly"
                    label="Label"
                    readonly
                    helper="helper"
                />
                <KitInput value="placeholder" placeholder="Readonly" label="Label" readonly />
                <KitInput
                    value="error placeholder with helper"
                    placeholder="Readonly"
                    label="Label"
                    readonly
                    status="error"
                    helper="error"
                />
                <KitInput value="error placeholder" placeholder="Readonly" label="Label" readonly status="error" />
            </div>
            <div style={{display: 'flex', gap: '20px'}}>
                <KitInput.TextArea
                    label="Text area"
                    value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eius eos in laborum non perferendis quasi totam voluptatem! Aperiam atque doloremque dolores expedita in iusto nemo quisquam recusandae tempore voluptate."
                    readonly
                />
                <KitInput.TextArea
                    label="Error text area"
                    value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eius eos in laborum non perferendis quasi totam voluptatem! Aperiam atque doloremque dolores expedita in iusto nemo quisquam recusandae tempore voluptate."
                    status="error"
                    readonly
                />
            </div>
        </div>
    </div>
);
