import {KitSwitch} from '@kit/DataEntry';
import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {useState} from 'react';

const {KitItemListSkeleton} = KitSkeleton;

const App = () => {
    const [active, setActive] = useState(true);

    return (
        <KitSpace direction="vertical" size="s" style={{width: '100%'}}>
            <KitSpace size="xs">
                <KitSwitch checked={active} onChange={setActive} />
                <KitTypography.Text>Active</KitTypography.Text>
            </KitSpace>
            <KitItemListSkeleton active={active} />
        </KitSpace>
    );
};

export default App;
