import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="blue" />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="blue"
                    segmentedActived
                />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="blue"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="green" />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="green"
                    segmentedActived
                />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="green"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="mediumGrey" />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="mediumGrey"
                    segmentedActived
                />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="mediumGrey"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="orange" />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="orange"
                    segmentedActived
                />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="orange"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="pink" />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="pink"
                    segmentedActived
                />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="pink"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="red" />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="red"
                    segmentedActived
                />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="red"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} segmentedColor="yellow" />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="yellow"
                    segmentedActived
                />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    segmentedColor="yellow"
                    segmentedActived
                    segmentedChecked
                />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
