import React, {useState} from 'react';
import {KitSpace} from '@kit/Layout';
import {KitImage, KitItemList} from '@kit/DataDisplay';
import {KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    const [selectedItemList1, setSelectedItemList1] = useState(false);
    const [selectedItemList2, setSelectedItemList2] = useState(false);

    return (
        <KitSpace direction="vertical" size="m">
            <div style={{width: '350px'}}>
                <KitItemList
                    onSelect={() => setSelectedItemList1(prev => !prev)}
                    selected={selectedItemList1}
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
                    onSelect={() => setSelectedItemList2(prev => !prev)}
                    selected={selectedItemList2}
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
