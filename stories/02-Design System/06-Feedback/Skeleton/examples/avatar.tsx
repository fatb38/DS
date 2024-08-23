import {KitSwitch} from '@kit/DataEntry';
import {KitSkeleton} from '@kit/Feedback';
import {KitTypography} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {useState} from 'react';

const {KitAvatarSkeleton} = KitSkeleton;

const App = () => {
    const [active, setActive] = useState(true);

    return (
        <KitSpace direction="vertical" size={16}>
            <KitSpace size="xs">
                <KitSwitch checked={active} onChange={setActive} />
                <KitTypography.Text>Active</KitTypography.Text>
            </KitSpace>

            <KitSpace wrap size={16}>
                <KitAvatarSkeleton active={active} size="small" />
                <KitAvatarSkeleton active={active} />
                <KitAvatarSkeleton active={active} size="large" />
                <KitAvatarSkeleton active={active} size={64} />
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatarSkeleton active={active} shape="square" size="small" />
                <KitAvatarSkeleton active={active} shape="square" />
                <KitAvatarSkeleton active={active} shape="square" size="large" />
                <KitAvatarSkeleton active={active} shape="square" size={64} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
