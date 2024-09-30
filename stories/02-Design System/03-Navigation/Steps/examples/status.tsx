import {KitSteps} from '@kit/Navigation';
import {KitDivider, KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace direction="vertical" size={32}>
        <KitSpace direction="vertical">
            <KitDivider orientation="left">Status on 'Steps'</KitDivider>
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
        </KitSpace>

        <KitSpace direction="vertical">
            <KitDivider orientation="left">Status on 'Steps.Items'</KitDivider>
            <KitSteps
                current={1}
                items={[
                    {
                        title: 'Finished',
                        description: 'This is a description'
                    },
                    {
                        title: 'In Progress',
                        description: 'This is a description',
                        status: 'error'
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description'
                    }
                ]}
            />
        </KitSpace>
    </KitSpace>
);

export default App;
