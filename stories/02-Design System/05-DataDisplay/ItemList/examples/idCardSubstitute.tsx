import {KitSpace} from '@kit/Layout';
import {KitIdCard, KitItemList, KitTag} from '@kit/DataDisplay';
import {KitProgress} from '@kit/Feedback';

const App = () => {
    const title = 'Tondeuse à gazon';
    const description = 'Tondeuse thermique Auto tractée 70 VL 55 TH';

    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '550px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitItemList
                    idCardSubstitute={
                        <>
                            <KitIdCard title={title} />
                            <KitProgress percent={50} />
                        </>
                    }
                />
                <KitItemList
                    idCardSubstitute={
                        <KitSpace direction="vertical" size="xs">
                            <KitIdCard title={title} description={description} />
                            <KitSpace direction="horizontal" size="none">
                                <KitTag type="secondary" idCardProps={{description: 'Jardin'}} />
                                <KitTag type="secondary" idCardProps={{description: 'Printemps 2024'}} />
                                <KitTag type="secondary" idCardProps={{description: 'Le retour des beaux jours'}} />
                            </KitSpace>
                        </KitSpace>
                    }
                />
            </div>
        </KitSpace>
    );
};

export default App;
