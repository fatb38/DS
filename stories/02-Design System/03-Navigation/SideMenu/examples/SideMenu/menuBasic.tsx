import {KitSideMenu} from '@kit/Navigation';

const App = () => (
    <div
        style={{
            width: '100%',
            padding: '5px',
            background: 'lightgrey',
            height: '500px',
            display: 'flex',
            gap: '32px'
        }}
    >
        <KitSideMenu />
        <KitSideMenu open />
    </div>
);

export default App;
