import React, {useState} from 'react';
import {KitCard} from '@kit/DataDisplay/Card';
import {KitSpace} from '@kit/Layout';
import {KitSwitch} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

const App = () => {
    const [isDisabled, setDisabled] = useState(false);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text>
                Disabled: <KitSwitch onChange={setDisabled} />
            </KitTypography.Text>

            <KitCard
                disabled={isDisabled}
                title="Card title"
                contentTitle="Content Title"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                cover={<img alt="example" src={window.location.origin + '/public/images/free-copyright.jpeg'} />}
            />
        </KitSpace>
    );
};

export default App;
