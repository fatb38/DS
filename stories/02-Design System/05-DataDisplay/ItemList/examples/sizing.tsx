import React, {useState} from 'react';
import {KitImage, KitItemList} from '@kit/DataDisplay';

const App = () => {
    const [selectedItemList1, setSelectedItemList1] = useState(false);
    const [selectedItemList2, setSelectedItemList2] = useState(false);
    const [selectedItemList3, setSelectedItemList3] = useState(false);

    return (
        <>
            <div style={{width: '350px'}}>
                <KitItemList
                    onSelect={() => setSelectedItemList1(prev => !prev)}
                    picture={<KitImage src="public/images/tondeuse.png" />}
                    title="Container width: 350px"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    tagNumber={4}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemlist')}
                    selected={selectedItemList1}
                />
            </div>
            <br />
            <br />
            <div style={{width: '500px'}}>
                <KitItemList
                    onSelect={() => setSelectedItemList2(prev => !prev)}
                    picture={<KitImage src="public/images/tondeuse.png" />}
                    title="Container width: 500px"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    tagNumber={4}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemlist')}
                    selected={selectedItemList2}
                />
            </div>
            <br />
            <br />
            <div style={{width: '100%'}}>
                <KitItemList
                    onSelect={() => setSelectedItemList3(prev => !prev)}
                    picture={<KitImage src="public/images/tondeuse.png" />}
                    title="Container width: 100%"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    tagNumber={4}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemlist')}
                    selected={selectedItemList3}
                />
            </div>
        </>
    );
};

export default App;
