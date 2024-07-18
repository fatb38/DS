import {KitTag} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';

const App = () => (
    <KitSpace direction="vertical">
        <KitSpace>
            <KitTag type="primary" idCardProps={{description: 'Primary'}} />
            <KitTag type="secondary" idCardProps={{description: 'Secondary'}} />
            <KitTag type="neutral" idCardProps={{description: 'Neutral'}} />
            <KitTag type="error" idCardProps={{description: 'Error'}} />
            <KitTag type="success" idCardProps={{description: 'Success'}} />
        </KitSpace>
    </KitSpace>
);

export default App;
