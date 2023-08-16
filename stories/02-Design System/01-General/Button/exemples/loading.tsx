import React, {Fragment, useState} from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {PoweroffOutlined} from '@ant-design/icons';

const App = ({}) => {
    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = index => {
        setLoadings(prevLoadings => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings(prevLoadings => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    return (
        <Fragment>
            <KitSpace direction="vertical">
                <KitSpace wrap>
                    <KitButton type="primary" loading>
                        Loading
                    </KitButton>
                    <KitButton type="primary" loading>
                        Loading
                    </KitButton>
                    <KitButton type="primary" icon={<PoweroffOutlined />} loading />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                        Click me!
                    </KitButton>
                    <KitButton
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                        onClick={() => enterLoading(1)}
                    >
                        Click me!
                    </KitButton>
                    <KitButton
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[2]}
                        onClick={() => enterLoading(2)}
                    />
                </KitSpace>
            </KitSpace>
        </Fragment>
    );
};

export default App;
