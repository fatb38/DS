import {KitTag} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const App = () => (
    <KitSpace direction="vertical">
        <KitSpace>
            <KitTag idCardProps={{description: 'Tag with only description'}} />
            <KitTag
                idCardProps={{
                    avatarProps: {
                        label: 'Tag description and avatar'
                    },
                    description: 'Tag description and avatar'
                }}
            />
            <KitTag
                idCardProps={{
                    avatarProps: {
                        label: 'Tag description and avatar',
                        shape: 'square'
                    },
                    description: 'Tag description and avatar'
                }}
            />
            <KitTag
                idCardProps={{
                    avatarProps: {
                        src: url
                    },
                    description: 'Tag description and avatar'
                }}
            />
        </KitSpace>
    </KitSpace>
);

export default App;
