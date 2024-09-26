import {KitGrid} from '@kit/Layout';
import {EvenColumn, OddColumn} from '../examples/styles';
const {KitRow, KitCol} = KitGrid;

export const MdGridTest = () => (
        <div
            style={{width: '768px', height: '200px', padding: '10px', borderRadius: '16px', border: '2px solid black'}}
        >
            <KitRow style={{height: '100%'}} gutter={8}>
                <KitCol span={3}>
                    <div style={EvenColumn}>1</div>
                </KitCol>
                <KitCol span={3}>
                    <div style={OddColumn}>2</div>
                </KitCol>
                <KitCol span={3}>
                    <div style={EvenColumn}>3</div>
                </KitCol>
                <KitCol span={3}>
                    <div style={OddColumn}>4</div>
                </KitCol>
                <KitCol span={3}>
                    <div style={EvenColumn}>5</div>
                </KitCol>
                <KitCol span={3}>
                    <div style={OddColumn}>6</div>
                </KitCol>
                <KitCol span={3}>
                    <div style={EvenColumn}>7</div>
                </KitCol>
                <KitCol span={3}>
                    <div style={OddColumn}>8</div>
                </KitCol>
            </KitRow>
        </div>
    );
