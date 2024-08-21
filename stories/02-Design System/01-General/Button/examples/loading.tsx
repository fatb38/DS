import React, {useState} from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faPowerOff, faWineBottle} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
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
        <>
            <KitSpace direction="vertical">
                <KitSpace wrap>
                    <KitButton type="primary" loading>
                        Loading
                    </KitButton>
                    <KitButton loading>Loading</KitButton>
                    <KitButton type="link" loading icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                        Loading
                    </KitButton>
                    <KitButton type="redirect" loading icon={<FontAwesomeIcon icon={faWineBottle} />}>
                        Loading
                    </KitButton>
                    <KitButton type="primary" icon={<FontAwesomeIcon icon={faPowerOff} />} loading />
                    <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} loading />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                        Click me!
                    </KitButton>
                    <KitButton
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        loading={loadings[1]}
                        onClick={() => enterLoading(1)}
                    >
                        Click me!
                    </KitButton>
                    <KitButton
                        type="link"
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        loading={loadings[2]}
                        onClick={() => enterLoading(2)}
                    >
                        Click me!
                    </KitButton>
                    <KitButton
                        type="redirect"
                        icon={<FontAwesomeIcon icon={faWineBottle} />}
                        loading={loadings[2]}
                        onClick={() => enterLoading(2)}
                    >
                        Click me!
                    </KitButton>
                    <KitButton
                        type="link"
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        loading={loadings[3]}
                        onClick={() => enterLoading(3)}
                    >
                        Click me!
                    </KitButton>
                    <KitButton
                        type="redirect"
                        icon={<FontAwesomeIcon icon={faWineBottle} />}
                        loading={loadings[4]}
                        onClick={() => enterLoading(4)}
                    >
                        Click me!
                    </KitButton>
                    <KitButton
                        type="primary"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        loading={loadings[5]}
                        onClick={() => enterLoading(5)}
                    />
                    <KitButton
                        type="segmented"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        loading={loadings[6]}
                        onClick={() => enterLoading(6)}
                    />
                </KitSpace>
            </KitSpace>
        </>
    );
};

export default App;
