import {KitProgress} from '@kit/index';

const App = () => (
    <div style={{width: 170}}>
        <KitProgress percent={30} size="small" />
        <KitProgress percent={50} size="small" status="active" />
        <KitProgress percent={70} size="small" status="exception" />
        <KitProgress percent={100} size="small" />
    </div>
);

export default App;
