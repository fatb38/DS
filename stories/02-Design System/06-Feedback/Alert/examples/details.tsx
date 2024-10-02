import React from 'react';
import {KitAlert} from '@kit/index';

const details = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const App = () => <KitAlert type="success" message="Success Text" details={details} />;

export default App;
