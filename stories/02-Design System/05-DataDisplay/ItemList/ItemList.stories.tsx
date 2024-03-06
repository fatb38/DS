import type {Meta, StoryObj} from '@storybook/react';
import {KitImage, KitItemList} from '@kit/DataDisplay';
import {argTypes} from './data';
import React from 'react';
import {KitIcon} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {Template} from './Template';

const meta: Meta<typeof KitItemList> = {
    component: KitItemList,
    title: 'Design System/DataDisplay/ItemList',
    argTypes: argTypes
};

export default meta;
type Story = StoryObj<typeof KitItemList>;

export const Api: Story = {
    render: Template,
    parameters: {
        chromatic: {disableSnapshot: true}
    }
};

export const ChromaticTest: Story = {
    render: () => (
        <div style={{width: '350px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitItemList
                onSelect={e => console.log('selected', e.target.checked)}
                picture={<KitIcon icon={<FontAwesomeIcon icon={faUser} />} />}
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                tagNumber={4}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemlist')}
            />
            <KitItemList
                onSelect={e => console.log('selected', e.target.checked)}
                picture={<KitImage src="public/images/tondeuse.png" />}
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                tagNumber={4}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemlist')}
            />
            <KitItemList
                draggable
                picture={<KitImage src="public/images/tondeuse.png" />}
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                tagNumber={4}
                onRafterClick={() => console.log('click rafter')}
            />
            <KitItemList
                onSelect={e => console.log('selected', e.target.checked)}
                picture={<KitIcon icon={<FontAwesomeIcon icon={faUser} />} />}
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                tagNumber={4}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemlist')}
                disabled
            />
            <KitItemList
                onSelect={e => console.log('selected', e.target.checked)}
                picture={<KitImage src="public/images/tondeuse.png" />}
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                tagNumber={4}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemlist')}
                disabled
            />

            <KitItemList
                draggable
                picture={<KitImage src="public/images/tondeuse.png" />}
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                tagNumber={4}
                onRafterClick={() => console.log('click rafter')}
                disabled
            />
            <KitItemList
                onSelect={e => console.log('selected', e.target.checked)}
                selected
                picture={<KitImage src="public/images/tondeuse.png" />}
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                tagNumber={4}
                onRafterClick={() => console.log('click rafter')}
                onClick={() => console.log('on click itemlist')}
            />
        </div>
    )
};
