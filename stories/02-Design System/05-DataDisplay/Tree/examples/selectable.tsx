import {KitTree} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile, faFolder} from '@fortawesome/free-regular-svg-icons';

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        icon: <FontAwesomeIcon icon={faFolder} />,
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                icon: <FontAwesomeIcon icon={faFolder} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        icon: <FontAwesomeIcon icon={faFile} />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                        icon: <FontAwesomeIcon icon={faFile} />
                    }
                ]
            }
        ]
    }
];

const App = () => (
    <div style={{width: '300px'}}>
        <KitTree multiple treeData={treeData} defaultExpandAll />
    </div>
);

export default App;
