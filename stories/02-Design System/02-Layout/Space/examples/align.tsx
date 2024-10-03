import {KitSpace, KitButton} from '@kit/index';

const App = () => (
    <div className="space-align-container">
        <div className="space-align-block">
            <KitSpace align="center">
                center
                <KitButton type="primary">Primary</KitButton>
                <span className="mock-block">Block</span>
            </KitSpace>
        </div>
        <div className="space-align-block">
            <KitSpace align="start">
                start
                <KitButton type="primary">Primary</KitButton>
                <span className="mock-block">Block</span>
            </KitSpace>
        </div>
        <div className="space-align-block">
            <KitSpace align="end">
                end
                <KitButton type="primary">Primary</KitButton>
                <span className="mock-block">Block</span>
            </KitSpace>
        </div>
        <div className="space-align-block">
            <KitSpace align="baseline">
                baseline
                <KitButton type="primary">Primary</KitButton>
                <span className="mock-block">Block</span>
            </KitSpace>
        </div>
    </div>
);

export default App;
