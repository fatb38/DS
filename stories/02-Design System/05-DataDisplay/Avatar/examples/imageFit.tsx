import {KitAvatar} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';

const App = () => {
    const src = 'public/images/catalog.jpg';

    return (
        <KitSpace direction="horizontal" size={'l'}>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Cover</KitTypography.Text>
                <KitAvatar shape="square" size="large" imageFit="contain" src={src} />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Contain</KitTypography.Text>
                <KitAvatar shape="square" size="large" imageFit="cover" src={src} />
            </KitSpace>
            <KitSpace direction="vertical">
                <KitTypography.Text weight="bold">Fill</KitTypography.Text>
                <KitAvatar shape="square" size="large" imageFit="fill" src={src} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
