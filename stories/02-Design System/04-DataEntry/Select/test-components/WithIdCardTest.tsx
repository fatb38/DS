import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitSelect} from '@kit/DataEntry';
import {idCardOptions} from './commons.tsx';

export const WithIdCard: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">With IDCard and custom dropDownRender</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', marginBottom: '10px', height: '300px'}}>
            <KitSelect
                placeholder="Select an element"
                style={{width: '320px'}}
                options={idCardOptions}
                open
                defaultValue={idCardOptions?.[0].value}
            />
            <KitSelect
                placeholder="Select an element"
                style={{width: '320px'}}
                mode="multiple"
                oneLineTags
                options={idCardOptions}
                open
                defaultValue={[idCardOptions?.[0].value, idCardOptions?.[1].value]}
            />
            <KitSelect
                placeholder="Select an element"
                style={{width: '320px'}}
                mode="multiple"
                options={idCardOptions}
                open
                defaultValue={[idCardOptions?.[0].value, idCardOptions?.[1].value]}
            />
        </div>
    </div>
);
