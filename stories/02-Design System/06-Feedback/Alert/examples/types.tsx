import {KitAlert} from '@kit/index';

const App = () => (
    <>
        <KitAlert type="success" message="Success Text" />
        <br />
        <KitAlert type="info" message="Info Text" />
        <br />
        <KitAlert type="warning" message="Warning Text" />
        <br />
        <KitAlert type="error" message="Error Text" />
    </>
);

export default App;
