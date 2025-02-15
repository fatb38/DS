import {KitTag} from '@kit/DataDisplay/';
import {IKitTagConfig} from '@kit/DataDisplay/Tag/types';

const App = () => {
    const tags: IKitTagConfig[] = [
        {idCardProps: {description: 'Tag 1'}, type: 'primary'},
        {idCardProps: {description: 'Tag 2'}, type: 'secondary'},
        {idCardProps: {description: 'Tag 3'}, type: 'secondary'},
        {idCardProps: {description: 'Tag 4 : Very long tag name'}}
    ];

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '100%'}}>
            <div style={{width: '100%', border: '1px solid black'}}>
                <KitTag.Group tags={tags} />
            </div>
            <div style={{width: '300px', border: '1px solid black'}}>
                <KitTag.Group tags={tags} />
            </div>
            <div style={{width: '300px', border: '1px solid black'}}>
                <KitTag.Group tags={tags} othersTagType="primary" />
            </div>
        </div>
    );
};

export default App;
