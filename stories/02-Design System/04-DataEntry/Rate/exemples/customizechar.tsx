import React, {ReactNode} from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {FrownOutlined, MehOutlined, SmileOutlined} from '@ant-design/icons';

const App = ({}) => {
    const customIcons: Record<number, React.ReactNode> = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />
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
