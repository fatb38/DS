import {KitInput} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => (
    <KitSpace direction="vertical">
        <KitInput placeholder="Default" />
        <KitInput placeholder="Disabled" disabled={true} />
    </KitSpace>
);

export default App;
