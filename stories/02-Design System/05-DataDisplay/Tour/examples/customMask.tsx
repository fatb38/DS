import React, {useRef, useState} from 'react';
import {KitButton} from '@kit/General';
import {KitDivider, KitSpace} from '@kit/Layout';
import {KitTour} from '@kit/DataDisplay';
import {TourProps} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const [open, setOpen] = useState<boolean>(false);

    const steps: TourProps['steps'] = [
        {
            title: 'Upload File',
            description: 'Put your files here.',
            cover: (
                <img
                    alt="tour.png"
                    src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
                />
            ),
            target: () => ref1.current
        },
        {
            title: 'Save',
            description: 'Save your changes.',
            target: () => ref2.current,
            mask: {
                style: {
                    boxShadow: 'inset 0 0 15px #fff'
                },
                color: 'rgba(40, 0, 255, .4)'
            }
        },
        {
            title: 'Other Actions',
            description: 'Click to see other actions.',
            target: () => ref3.current,
            mask: false
        }
    ];

    return (
        <>
            <KitButton type="primary" onClick={() => setOpen(true)}>
                Begin Tour
            </KitButton>

            <KitDivider />

            <KitSpace>
                <KitButton ref={ref1}> Upload</KitButton>
                <KitButton ref={ref2} type="primary">
                    Save
                </KitButton>
                <KitButton ref={ref3} icon={<FontAwesomeIcon icon={faEllipsis} />} />
            </KitSpace>

            <KitTour
                open={open}
                onClose={() => setOpen(false)}
                steps={steps}
                mask={{
                    style: {
                        boxShadow: 'inset 0 0 15px #333'
                    },
                    color: 'rgba(80, 255, 255, .4)'
                }}
            />
        </>
    );
};

export default App;
