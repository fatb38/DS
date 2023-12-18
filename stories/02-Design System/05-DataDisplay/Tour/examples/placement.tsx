import React, {useRef, useState} from 'react';
import {KitButton} from '@kit/General';
import {KitTour} from '@kit/DataDisplay';
import {TourProps} from 'antd';

const App = () => {
    const ref = useRef(null);

    const [open, setOpen] = useState<boolean>(false);

    const steps: TourProps['steps'] = [
        {
            title: 'Center',
            description: 'Displayed in the center of screen.',
            target: null
        },
        {
            title: 'Right',
            description: 'On the right of target.',
            placement: 'right',
            target: () => ref.current
        },
        {
            title: 'Top',
            description: 'On the top of target.',
            placement: 'top',
            target: () => ref.current
        }
    ];

    return (
        <>
            <KitButton ref={ref} type="primary" onClick={() => setOpen(true)}>
                Begin Tour
            </KitButton>

            <KitTour open={open} onClose={() => setOpen(false)} steps={steps} />
        </>
    );
};

export default App;
