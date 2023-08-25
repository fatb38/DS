import React from 'react';
import {KitImage, KitItemList} from '@kit/DataDisplay';

const App = () => {
    return (
        <>
            <div style={{width: '350px'}}>
                <KitItemList
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    picture={<KitImage src="images/tondeuse.png" />}
                    title="Container width: 350px"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    tagNumber={4}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemlist')}
                />
            </div>
            <br />
            <br />
            <div style={{width: '500px'}}>
                <KitItemList
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    picture={<KitImage src="images/tondeuse.png" />}
                    title="Container width: 500px"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    tagNumber={4}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemlist')}
                />
            </div>
            <br />
            <br />
            <div style={{width: '100%'}}>
                <KitItemList
                    onSelectChange={e => console.log('selected', e.target.checked)}
                    picture={<KitImage src="images/tondeuse.png" />}
                    title="Container width: 100%"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    tagNumber={4}
                    onRafterClick={() => console.log('click rafter')}
                    onClick={() => console.log('on click itemlist')}
                />
            </div>
        </>
    );
};

export default App;
