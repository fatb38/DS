import React from 'react';
import {KitButton, KitDivider, KitIcon, KitSpace} from '../../../../../src';
import {useKitNotification} from '@kit/Feedback/Notification/useKitNotification';
import {
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
    RadiusUpleftOutlined,
    RadiusUprightOutlined
} from '@ant-design/icons';

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
                    icon={<RadiusUpleftOutlined />}
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
                    icon={<RadiusUprightOutlined />}
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
                    icon={<RadiusBottomleftOutlined />}
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
                    icon={<RadiusBottomrightOutlined />}
                >
                    bottomRight
                </KitButton>
            </KitSpace>
        </>
    );
};

export default App;
