import {KitAlert} from '@kit/index';

const App = () => (
    <>
        <KitAlert type="warning" message="Warning Text" closable />
        <br />
        <KitAlert type="error" message="Error Text" closable />
    </>
);

export default App;
