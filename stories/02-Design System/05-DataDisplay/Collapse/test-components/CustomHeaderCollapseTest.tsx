import React, {FunctionComponent} from 'react';
import {KitCollapse} from '@kit/DataDisplay';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';

export const CustomHeaderCollapseTest: FunctionComponent = () => {
    const text =
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.';

    const items = [
        {
            key: '1',
            label: (
                <KitCollapse.Header
                    imageSrc="/public/images/catalog.jpg"
                    title="Title 2"
                    description="This is a description 2"
                    tagContent={'sprint #6'}
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
        }
    ];

    return (
        <div>
            <KitTypography.Title level="h3">Custom header collapse</KitTypography.Title>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitCollapse items={items} />
                <KitCollapse items={items} activeKey="1" />
                <KitCollapse items={items} collapsible="disabled" />
            </div>
        </div>
    );
};
