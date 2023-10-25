import React from 'react';
import {KitSpace} from '@kit/Layout';
import {KitImage, KitItemList} from '@kit/DataDisplay';
import {KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '350px'}}>
                <KitItemList
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    picture={<KitIcon icon={<FontAwesomeIcon icon={faUser} />} />}
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    tagNumber={4}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemlist')}
                />
            </div>
            <div style={{width: '350px'}}>
                <KitItemList
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    picture={<KitImage src="public/images/tondeuse.png" />}
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    tagNumber={4}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemlist')}
                />
            </div>
        </KitSpace>
    );
};

export default App;
