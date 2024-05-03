import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const App = () => (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="blue" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="blue" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="blue" active checked />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="green" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="green" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="green" active checked />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="mediumGrey" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="mediumGrey" active />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    color="mediumGrey"
                    active
                    checked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="orange" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="orange" active />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    color="orange"
                    active
                    checked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="pink" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="pink" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="pink" active checked />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="red" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="red" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="red" active checked />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="yellow" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="yellow" active />
                <KitButton
                    type="segmented"
                    icon={<FontAwesomeIcon icon={faPowerOff} />}
                    color="yellow"
                    active
                    checked
                />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="grey" active checked />
            </KitSpace>
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="black" />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="black" active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} color="black" active checked />
            </KitSpace>
        </KitSpace>
    );

export default App;
