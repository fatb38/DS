import {KitSpace} from '@kit/Layout';
import {KitItemList} from '@kit/DataDisplay';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';

const App = () => {
    const idCardProps: IKitIdCard = {
        title: 'Tondeuse à gazon',
        description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
        avatarProps: {label: 'TG'}
    };

    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '350px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitItemList onSelect={console.log} idCardProps={idCardProps} />
                <KitItemList
                    onSelect={console.log}
                    onClick={() => alert('click sur l’item list')}
                    idCardProps={idCardProps}
                />
            </div>
        </KitSpace>
    );
};

export default App;
