import React, { useState } from 'react';
import { KitModal } from "@kit/Feedback/";
import { KitButton } from '@kit/General';
import { KitSpace } from '@kit/Layout';
import { KitSelect, KitCheckbox } from '@kit/DataEntry';

const options = [
    {
        label: 'info',
        value:'info'
    },
    {
        label: 'success',
        value:'success'
    },
    {
        label: 'error',
        value:'error'
    },
    {
        label: 'warning',
        value:'warning'
    },
    {
        label: 'confirm',
        value:'confirm'
    },
];

const App= ({}) => {
    const [modalType, setModalType] = useState("confirm");
    const [showImage, setShowImage] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const [showSecondLine, setShowSecondLine] = useState(false);
    const [showSecondaryCta, setShowSecondaryCta] = useState(false);

    const showModal = () => {
        KitModal[modalType](
            {
                image: showImage
                    ? "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    : null,
                title: showTitle ? "Titre" : null,
                firstLine:"contenu",
                secondLine: showSecondLine ? "contenu 2" : null,
                icon: showIcon,
                showSecondaryCta
            });
        };

  return (
    <KitSpace direction="vertical">
        <KitSpace>
            <KitSelect options={options} 
                labelOnly 
                style={{width:'120px'}} 
                defaultValue={modalType} 
                onChange={(value) => setModalType(value as string)}
            />
            <KitCheckbox onChange={() => setShowImage(!showImage)}>Show Image</KitCheckbox>
            <KitCheckbox onChange={() => setShowIcon(!showIcon)}>Show Icon</KitCheckbox>
            <KitCheckbox onChange={() => setShowTitle(!showTitle)}>Show Title</KitCheckbox>
            <KitCheckbox onChange={() => setShowSecondLine(!showSecondLine)}>Show Second line</KitCheckbox>
            <KitCheckbox onChange={() => setShowSecondaryCta(!showSecondaryCta)}>Show Secondary Cta</KitCheckbox>
        </KitSpace>
        <KitButton type="primary" onClick={showModal}>
            Open Modal
        </KitButton>
    </KitSpace>
    );
};

export default App;