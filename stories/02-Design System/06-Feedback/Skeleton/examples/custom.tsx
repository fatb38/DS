import {KitSwitch} from '@kit/DataEntry';
import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {useState} from 'react';

const {KitCustomSkeleton} = KitSkeleton;

const App = () => {
    const [active, setActive] = useState(true);

    return (
        <KitSpace direction="vertical" size="m" style={{width: '100%'}}>
            <KitSpace size="xs">
                <KitSwitch checked={active} onChange={setActive} />
                <KitTypography.Text>Active</KitTypography.Text>
            </KitSpace>
            <KitCustomSkeleton active={active} style={{width: '100%', height: '60px'}} />
            <KitCustomSkeleton active={active} style={{width: '100px', height: '100px'}} />
        </KitSpace>
    );
};

export default App;
