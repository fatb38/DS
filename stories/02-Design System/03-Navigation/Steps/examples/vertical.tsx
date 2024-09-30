import {KitSteps} from '@kit/Navigation';

const App = () => (
    <KitSteps
        current={1}
        direction="vertical"
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
);

export default App;
