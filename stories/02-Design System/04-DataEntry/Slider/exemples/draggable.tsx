import React from 'react';
import {KitSlider} from '@kit/DataEntry/';

const App = () => {
    return <KitSlider range={{draggableTrack: true}} style={{width: '300px'}} defaultValue={[20, 50]} />;
};

export default App;
