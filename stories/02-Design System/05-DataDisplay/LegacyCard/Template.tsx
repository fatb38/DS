import {faEllipsis, faGear, faPencil} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitLegacyCard} from '@kit/DataDisplay';
import {KitSwitch} from '@kit/DataEntry';
import {KitIcon, KitTypography} from '@kit/General';
import KitLink from '@kit/General/Typography/Link';
import {KitSpace} from '@kit/Layout';
import React, {useState} from 'react';
import {IEditorTemplate} from '../../../types';
import IKitLegacyCard from '@kit/DataDisplay/LegacyCard/types';

export const Template = (args: IKitLegacyCard) => {
    const [isCover, setCover] = useState(true);
    const [isActions, setActions] = useState(true);
    const [isExtra, setExtra] = useState(true);

    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitTypography.Text>
                    Cover: <KitSwitch defaultChecked onChange={setCover} />
                </KitTypography.Text>
                <KitTypography.Text>
                    Actions: <KitSwitch defaultChecked onChange={setActions} />
                </KitTypography.Text>
                <KitTypography.Text>
                    Extra: <KitSwitch defaultChecked onChange={setExtra} />
                </KitTypography.Text>
            </KitSpace>
            <KitLegacyCard
                {...args}
                cover={isCover && <img alt="example" src="public/images/free-copyright.jpeg" />}
                extra={isExtra && <KitLink href="#">More</KitLink>}
                actions={
                    isActions
                        ? [
                              <KitIcon
                                  icon={<FontAwesomeIcon icon={faGear} />}
                                  key="setting"
                                  onClick={() => console.log('click button settings')}
                              />,
                              <KitIcon
                                  icon={<FontAwesomeIcon icon={faPencil} />}
                                  key="edit"
                                  onClick={() => console.log('click button edit')}
                              />,
                              <KitIcon
                                  icon={<FontAwesomeIcon icon={faEllipsis} />}
                                  key="ellipsis"
                                  onClick={() => console.log('click button ellipsis')}
                              />
                          ]
                        : undefined
                }
            />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => (
        <KitSpace direction="vertical">
            <KitLegacyCard
                title="Card Title"
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                cover={<img alt="example" src="public/images/free-copyright.jpeg" />}
            />
            <KitLegacyCard
                title="Card Title"
                contentTitle="Promos mai"
                contentDescription="Les promotions de mai démarrent bientôt. Pensez à télécharger vos PLV."
                cover={<img alt="example" src="public/images/free-copyright.jpeg" />}
                disabled
            />
        </KitSpace>
    );

EditorTemplate.path = 'components.LegacyCard';
EditorTemplate.title = 'LegacyCard';
