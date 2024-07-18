import {useState} from 'react';
import {KitTag} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General/';

const App = () => {
    const [isTagVisible, setIsTagVisible] = useState(true);

    const log = e => {
        console.log(e);
        setIsTagVisible(false);
    };

    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitTag idCardProps={{description: 'Tag 1'}} />
                {isTagVisible && <KitTag idCardProps={{description: 'Tag 2'}} onClose={log} />}
            </KitSpace>
            <br />
            <KitSpace>
                <KitButton type="primary" disableSecureClick onClick={() => setIsTagVisible(!isTagVisible)}>
                    {isTagVisible ? 'Hide Tag2' : 'Show Tag2'}
                </KitButton>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
