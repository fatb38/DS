import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitSteps} from '@kit/Navigation';

export const ClickableStepsTest: FC = () => (
    <>
        <KitTypography.Title level="h3" style={{ marginBottom: '24px'}}>Clickable steps</KitTypography.Title>
        <KitSteps
            current={0}
            onChange={() => console.log('onChange')}
            items={[
                {
                    title: 'Step 1',
                    description: 'This is a description'
                },
                {
                    title: 'Step 2',
                    description: 'This is a description'
                },
                {
                    title: 'Step 3',
                    description: 'This is a description'
                }
            ]}
        />
    </>
)