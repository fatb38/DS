import {KitGrid} from '@kit/Layout';
import {EvenColumn, OddColumn} from './styles';
const {KitRow, KitCol} = KitGrid;

const App = () => (
    <div style={{width: '576px', height: '200px', padding: '10px', borderRadius: '16px', border: '2px solid black'}}>
        <KitRow style={{height: '100%'}} gutter={8}>
            <KitCol span={4}>
                <div style={EvenColumn}>1</div>
            </KitCol>
            <KitCol span={4}>
                <div style={OddColumn}>2</div>
            </KitCol>
            <KitCol span={4}>
                <div style={EvenColumn}>3</div>
            </KitCol>
            <KitCol span={4}>
                <div style={OddColumn}>4</div>
            </KitCol>
            <KitCol span={4}>
                <div style={EvenColumn}>5</div>
            </KitCol>
            <KitCol span={4}>
                <div style={OddColumn}>6</div>
            </KitCol>
        </KitRow>
    </div>
);

export default App;
