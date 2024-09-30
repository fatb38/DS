import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace>
        <KitInputNumber formatter={value => `￥ ${value}`} />
        <KitInputNumber formatter={value => `￥ ${value}`} disabled={true} />
    </KitSpace>
);

export default App;
