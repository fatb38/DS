import {KitGrid, KitSpace} from '@kit/Layout';
import {EvenColumn, OddColumn} from './styles';
const {KitRow, KitCol} = KitGrid;

const App = () => (
    <KitSpace direction="vertical" size="m" style={{width: '100%'}}>
        <KitRow>
            <KitCol span={24}>
                <div style={EvenColumn}>Col</div>
            </KitCol>
        </KitRow>
        <KitRow>
            <KitCol span={12}>
                <div style={EvenColumn}>col-12</div>
            </KitCol>
            <KitCol span={12}>
                <div style={OddColumn}>col-12</div>
            </KitCol>
        </KitRow>
        <KitRow>
            <KitCol span={8}>
                <div style={EvenColumn}>col-8</div>
            </KitCol>
            <KitCol span={8}>
                <div style={OddColumn}>col-8</div>
            </KitCol>
            <KitCol span={8}>
                <div style={EvenColumn}>col-8</div>
            </KitCol>
        </KitRow>
        <KitRow>
            <KitCol span={6}>
                <div style={EvenColumn}>col-6</div>
            </KitCol>
            <KitCol className="odd" span={6}>
                <div style={OddColumn}>col-6</div>
            </KitCol>
            <KitCol span={6}>
                <div style={EvenColumn}>col-6</div>
            </KitCol>
            <KitCol className="odd" span={6}>
                <div style={OddColumn}>col-6</div>
            </KitCol>
        </KitRow>
    </KitSpace>
);

export default App;
