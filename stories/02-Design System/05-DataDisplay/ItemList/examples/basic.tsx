import {KitSpace} from '@kit/Layout';
import {KitItemList} from '@kit/DataDisplay';
import {IKitAvatar} from '@kit/DataDisplay/Avatar/types';

const App = () => {
    const title = 'Tondeuse à gazon';
    const description = 'Tondeuse thermique Auto tractée 70 VL 55 TH';
    const avatarProps: IKitAvatar = {label: 'TG'};

    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '550px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitItemList idCardProps={{title}} />
                <KitItemList idCardProps={{title, description}} />
                <KitItemList idCardProps={{title, description, avatarProps}} />
            </div>
        </KitSpace>
    );
};

export default App;
