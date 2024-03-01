import React, {FunctionComponent} from 'react';
import {KitAutoComplete} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

export const LabelAndHelperAutocompleteTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Label and Helper autocomplete</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <KitAutoComplete
                label="Label"
                helper="Helper"
                allowClear={false}
                style={{
                    width: 200
                }}
            />
            <KitAutoComplete
                label="Label"
                helper="Helper"
                style={{
                    width: 200
                }}
            />
            <KitAutoComplete
                label="Label"
                helper="Helper"
                disabled={true}
                style={{
                    width: 200
                }}
            />
            <KitAutoComplete
                label="Label"
                helper="Helper"
                status="error"
                style={{
                    width: 200
                }}
            />
            <KitAutoComplete
                label="Label"
                helper="Helper"
                status="warning"
                style={{
                    width: 200
                }}
            />
        </div>
    </div>
);
