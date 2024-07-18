import React from 'react';
import {KitCollapse} from '@kit/DataDisplay/';
import {KitDivider} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPercent, faPlus} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;

    const items = [
        {
            key: '1',
            label: 'This is panel header 1',
            children: <p>{text}</p>
        }
    ];

    const itemsWithHeaderAndExtra = [
        {
            key: '1',
            label: (
                <KitCollapse.Header
                    imageSrc="/public/images/catalog.jpg"
                    title="Title 1"
                    description="This is a description 1"
                    tagProps={{idCardProps: {description: '#Sprint 6'}}}
                    onSwitchChange={checked => console.log(checked)}
                />
            ),
            children: <p>{text}</p>,
            isActive: true,
            extra: (
                <KitCollapse.HeaderExtra
                    actions={[
                        {
                            icon: <FontAwesomeIcon icon={faPlus} />,
                            label: 'Add',
                            onClick: () => console.log('onClick: Add')
                        },
                        {
                            icon: <FontAwesomeIcon icon={faMinus} />,
                            label: 'Subtract',
                            onClick: () => console.log('onClick: Subtract')
                        }
                    ]}
                />
            )
        },
        {
            key: '2',
            label: (
                <KitCollapse.Header
                    imageSrc="/public/images/catalog.jpg"
                    title="Title 2"
                    description="This is a description 2"
                    tagProps={{idCardProps: {description: '#Sprint 7'}}}
                    onSwitchChange={checked => console.log(checked)}
                />
            ),
            children: <p>{text}</p>,
            extra: (
                <KitCollapse.HeaderExtra
                    actions={[
                        {
                            icon: <FontAwesomeIcon icon={faPlus} />,
                            label: 'Add',
                            onClick: () => console.log('onClick: Add')
                        },
                        {
                            icon: <FontAwesomeIcon icon={faMinus} />,
                            label: 'Subtract',
                            onClick: () => console.log('onClick: Subtract')
                        },
                        {
                            icon: <FontAwesomeIcon icon={faPercent} />,
                            label: 'Percent',
                            onClick: () => console.log('onClick: Percent')
                        }
                    ]}
                />
            )
        }
    ];

    return (
        <div style={{width: '100%'}}>
            <KitDivider orientation="left">Header</KitDivider>
            <KitCollapse collapsible="header" items={items} />
            <br />
            <KitDivider orientation="left">Icon</KitDivider>
            <KitCollapse collapsible="icon" items={items} />
            <br />
            <KitDivider orientation="left">Disabled</KitDivider>
            <KitCollapse collapsible="disabled" items={items} />
            <br />
            <KitCollapse collapsible="disabled" items={itemsWithHeaderAndExtra} />
            <br />
        </div>
    );
};

export default App;
