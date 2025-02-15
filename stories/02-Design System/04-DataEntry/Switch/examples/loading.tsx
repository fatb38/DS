import {KitSwitch} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace direction="vertical">
        <KitSwitch loading defaultChecked />
        <br />
        <KitSwitch loading />
    </KitSpace>
);

export default App;
