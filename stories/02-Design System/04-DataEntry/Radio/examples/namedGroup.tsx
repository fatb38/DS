import {KitRadio} from '@kit/DataEntry/';

const App = () => (
    <KitRadio.Group name="radiogroup" defaultValue={1}>
        <KitRadio value={1}>A</KitRadio>
        <KitRadio value={2}>B</KitRadio>
        <KitRadio value={3}>C</KitRadio>
        <KitRadio value={4}>D</KitRadio>
    </KitRadio.Group>
);

export default App;
