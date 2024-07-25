import {KitTag} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';

const App = () => (
    <KitSpace direction="vertical">
        <KitSpace>
            <KitTag type="primary" idCardProps={{description: 'Primary'}} disabled />
            <KitTag type="secondary" idCardProps={{description: 'Secondary'}} disabled />
            <KitTag type="neutral" idCardProps={{description: 'Neutral'}} disabled />
            <KitTag type="error" idCardProps={{description: 'Error'}} disabled />
            <KitTag type="success" idCardProps={{description: 'Success'}} disabled />
        </KitSpace>
    </KitSpace>
);

export default App;
