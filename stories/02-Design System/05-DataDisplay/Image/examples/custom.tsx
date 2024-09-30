import {KitImage} from '@kit/DataDisplay';

const App = () => (
    <KitImage
        width={200}
        src="public/images/portraitBlur.png"
        preview={{
            src: 'public/images/portrait.png'
        }}
    />
);

export default App;
