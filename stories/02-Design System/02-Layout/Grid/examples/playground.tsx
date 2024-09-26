import {ReactNode, useState} from 'react';
import {KitGrid} from '@kit/Layout';
import {Slider} from 'antd';
import {EvenColumn, OddColumn} from './styles';
import {KitTypography} from '@kit/General';
const {KitRow, KitCol} = KitGrid;

const createRecord = (values: number[]) => Object.fromEntries(values.map((value, index) => [index, value]));
const gutters = createRecord([8, 16, 24, 32, 40, 48]);
const vgutters = createRecord([8, 16, 24, 32, 40, 48]);
const colCounts = createRecord([2, 3, 4, 6, 8, 12]);

const App = () => {
    const [gutterKey, setGutterKey] = useState(3);
    const [vgutterKey, setVgutterKey] = useState(1);
    const [colCountKey, setColCountKey] = useState(2);

    const colCount = colCounts[colCountKey];
    const cols: ReactNode[] = Array.from({length: colCount}, (_, index) => (
        <KitCol key={index.toString()} span={24 / colCount}>
            <div style={index % 2 === 0 ? EvenColumn : OddColumn}>Column</div>
        </KitCol>
    ));

    return (
        <>
            <KitTypography.Paragraph>Horizontal Gutter (px): </KitTypography.Paragraph>
            <div style={{width: '50%'}}>
                <Slider
                    min={0}
                    max={Object.keys(gutters).length - 1}
                    value={gutterKey}
                    onChange={setGutterKey}
                    marks={gutters}
                    step={null}
                    tooltip={{formatter: value => gutters[value as number]}}
                />
            </div>
            <KitTypography.Paragraph>Vertical Gutter (px): </KitTypography.Paragraph>
            <div style={{width: '50%'}}>
                <Slider
                    min={0}
                    max={Object.keys(vgutters).length - 1}
                    value={vgutterKey}
                    onChange={setVgutterKey}
                    marks={vgutters}
                    step={null}
                    tooltip={{formatter: value => vgutters[value as number]}}
                />
            </div>
            <KitTypography.Paragraph>Column Count:</KitTypography.Paragraph>
            <div style={{width: '50%', marginBottom: 48}}>
                <Slider
                    min={0}
                    max={Object.keys(colCounts).length - 1}
                    value={colCountKey}
                    onChange={setColCountKey}
                    marks={colCounts}
                    step={null}
                    tooltip={{formatter: value => colCounts[value as number]}}
                />
            </div>
            <KitRow
                style={{width: '100%', marginLeft: '0px', marginRight: '0px'}}
                gutter={[gutters[gutterKey], vgutters[vgutterKey]]}
            >
                {cols}
                {cols}
            </KitRow>
        </>
    );
};

export default App;
