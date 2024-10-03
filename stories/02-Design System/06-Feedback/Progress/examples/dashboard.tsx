import {KitProgress, KitSpace} from '@kit/index';

const App = () => (
    <KitSpace wrap>
        <KitProgress type="dashboard" percent={75} />
        <KitProgress type="dashboard" percent={75} gapDegree={30} />
    </KitSpace>
);

export default App;
