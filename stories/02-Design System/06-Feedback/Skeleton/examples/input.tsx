import {KitSwitch} from '@kit/DataEntry';
import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {useState} from 'react';

const {KitInputSkeleton} = KitSkeleton;

const App = () => {
    const [active, setActive] = useState(true);

    return (
        <KitSpace direction="vertical" size="m">
            <KitSpace size="xs">
                <KitSwitch checked={active} onChange={setActive} />
                <KitTypography.Text>Active</KitTypography.Text>
            </KitSpace>
            <KitInputSkeleton active={active} />
        </KitSpace>
    );
};

export default App;
