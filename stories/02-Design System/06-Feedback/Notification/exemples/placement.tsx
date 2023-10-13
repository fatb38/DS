import React from 'react';
import {KitButton} from '@kit/General/';
import {KitDivider, KitSpace} from '@kit/Layout/';
import {useKitNotification} from '@kit/Feedback/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBorderTopLeft} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const {kitNotification} = useKitNotification();

    return (
        <>
            <KitSpace>
                <KitButton
                    type="primary"
                    onClick={() =>
                        kitNotification.info({
                            message: 'Notification Title',
                            description:
                                'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.',
                            placement: 'topLeft'
                        })
                    }
                    icon={<FontAwesomeIcon icon={faBorderTopLeft} />}
                >
                    topLeft
                </KitButton>
                <KitButton
                    type="primary"
                    onClick={() =>
                        kitNotification.info({
                            message: 'Notification Title',
                            description:
                                'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.',
                            placement: 'topRight'
                        })
                    }
                    icon={<FontAwesomeIcon icon={faBorderTopLeft} style={{transform: 'rotateZ(90deg)'}} />}
                >
                    topRight
                </KitButton>
            </KitSpace>
            <KitDivider />
            <KitSpace>
                <KitButton
                    type="primary"
                    onClick={() =>
                        kitNotification.info({
                            message: 'Notification Title',
                            description:
                                'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.',
                            placement: 'bottomLeft'
                        })
                    }
                    icon={<FontAwesomeIcon icon={faBorderTopLeft} style={{transform: 'rotateZ(90deg) scale(-1)'}} />}
                >
                    bottomLeft
                </KitButton>
                <KitButton
                    type="primary"
                    onClick={() =>
                        kitNotification.info({
                            message: 'Notification Title',
                            description:
                                'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.',
                            placement: 'bottomRight'
                        })
                    }
                    icon={<FontAwesomeIcon icon={faBorderTopLeft} style={{transform: 'scale(-1)'}} />}
                >
                    bottomRight
                </KitButton>
            </KitSpace>
        </>
    );
};

export default App;
