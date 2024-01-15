import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitSteps} from '@kit/Navigation';

export const BasicStepsTest: FC = () => (
    <>
        <KitTypography.Title level="h3">Basic steps</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '24px'}}>
            <KitSteps
                current={1}
                items={[
                    {
                        title: 'Finished',
                        description: 'This is a description'
                    },
                    {
                        title: 'In Progress',
                        description: 'This is a description'
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description'
                    }
                ]}
            />
            <KitSteps
                current={1}
                status="error"
                items={[
                    {
                        title: 'Finished',
                        description: 'This is a description'
                    },
                    {
                        title: 'In Progress',
                        description: 'This is a description'
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description'
                    }
                ]}
            />
            <KitSteps
                direction="vertical"
                current={1}
                items={[
                    {
                        title: 'Finished',
                        description: 'This is a description'
                    },
                    {
                        title: 'In Progress',
                        description: 'This is a description'
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description'
                    }
                ]}
            />
        </div>
    </>
)