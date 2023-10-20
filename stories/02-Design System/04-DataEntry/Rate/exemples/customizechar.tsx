import React, {ReactNode} from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFaceFrown, faFaceMeh, faFaceSmile} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    const customIcons: Record<number, React.ReactNode> = {
        1: <FontAwesomeIcon icon={faFaceFrown} />,
        2: <FontAwesomeIcon icon={faFaceFrown} />,
        3: <FontAwesomeIcon icon={faFaceMeh} />,
        4: <FontAwesomeIcon icon={faFaceSmile} />,
        5: <FontAwesomeIcon icon={faFaceSmile} />
    };

    const charsNumber: (props) => ReactNode = ({index}: {index: number}) => index + 1;
    const charsIcons: (props) => ReactNode = ({index}: {index: number}) => customIcons[index + 1];

    return (
        <KitSpace direction="vertical">
            <KitRate defaultValue={2} character={charsNumber} />
            <KitRate defaultValue={2} character={charsIcons} />
        </KitSpace>
    );
};

export default App;
