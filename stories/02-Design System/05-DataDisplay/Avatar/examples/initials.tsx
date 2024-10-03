import {KitAvatar} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout';

const App = () => (
    <KitSpace direction="horizontal" size="l">
        <KitAvatar label="John Doe" />
        <KitAvatar label="Amélie Poulin" />
        <KitAvatar label="John Doe Smith" initialsMaxChars={3} />
    </KitSpace>
);

export default App;
