import {KitTag} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';

const _onClose = () => console.log('onClose');
const _onClick = () => console.log('onClick');

const App = () => (
    <KitSpace direction="vertical">
        <KitSpace>
            <KitTag type="primary" idCardProps={{description: 'Primary'}} onClick={_onClick} onClose={_onClose} />
            <KitTag type="secondary" idCardProps={{description: 'Secondary'}} onClick={_onClick} onClose={_onClose} />
            <KitTag type="neutral" idCardProps={{description: 'Neutral'}} onClick={_onClick} onClose={_onClose} />
            <KitTag type="error" idCardProps={{description: 'Error'}} onClick={_onClick} onClose={_onClose} />
            <KitTag type="success" idCardProps={{description: 'Success'}} onClick={_onClick} onClose={_onClose} />
        </KitSpace>
    </KitSpace>
);

export default App;
