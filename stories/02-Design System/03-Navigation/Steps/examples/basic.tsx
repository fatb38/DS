import React from 'react';
import {KitSteps} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace direction="vertical">
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
            current={3}
            items={[
                {
                    title: 'Finished',
                    description: 'This is a description'
                },
                {
                    title: 'Finished',
                    description: 'This is a description'
                },
                {
                    title: 'Finished',
                    description: 'This is a description'
                },
                {
                    title: 'In Progress',
                    description: 'This is a description'
                }
            ]}
        />
        <KitSteps
            items={[
                {
                    title: 'Finished',
                    description: 'This is a description',
                    status: 'finish'
                },
                {
                    title: 'Finished',
                    description: 'This is a description',
                    status: 'finish'
                },
                {
                    title: 'Finished',
                    description: 'This is a description',
                    status: 'finish'
                },
                {
                    title: 'Finished',
                    description: 'This is a description',
                    status: 'finish'
                },
                {
                    title: 'Finished',
                    description: 'This is a description',
                    status: 'finish'
                }
            ]}
        />
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
                },
                {
                    title: 'Waiting',
                    description: 'This is a description'
                },
                {
                    title: 'Waiting',
                    description: 'This is a description'
                },
                {
                    title: 'Waiting',
                    description: 'This is a description'
                }
            ]}
        />
    </KitSpace>
);

export default App;
