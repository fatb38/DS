import React from 'react';
import {KitTooltip} from '@kit/DataDisplay';
import {KitButton} from '@kit/General';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace>
            <div>
                <div style={{marginLeft: 70, whiteSpace: 'nowrap'}}>
                    <KitSpace>
                        <KitTooltip placement="topLeft" title="promp text">
                            <KitButton>TL</KitButton>
                        </KitTooltip>
                        <KitTooltip placement="top" title="promp text">
                            <KitButton>Top</KitButton>
                        </KitTooltip>
                        <KitTooltip placement="topRight" title="promp text">
                            <KitButton>TR</KitButton>
                        </KitTooltip>
                    </KitSpace>
                </div>
                <div style={{width: 70, float: 'left'}}>
                    <KitSpace direction="vertical">
                        <KitTooltip placement="leftTop" title="promp text">
                            <KitButton>LT</KitButton>
                        </KitTooltip>
                        <KitTooltip placement="left" title="promp text">
                            <KitButton>Left</KitButton>
                        </KitTooltip>
                        <KitTooltip placement="leftBottom" title="promp text">
                            <KitButton>LB</KitButton>
                        </KitTooltip>
                    </KitSpace>
                </div>
                <div style={{width: 70, marginLeft: 70 * 4 + 24}}>
                    <KitSpace direction="vertical">
                        <KitTooltip placement="rightTop" title="promp text">
                            <KitButton>RT</KitButton>
                        </KitTooltip>
                        <KitTooltip placement="right" title="promp text">
                            <KitButton>Right</KitButton>
                        </KitTooltip>
                        <KitTooltip placement="rightBottom" title="promp text">
                            <KitButton>RB</KitButton>
                        </KitTooltip>
                    </KitSpace>
                </div>
                <div style={{marginLeft: 70, clear: 'both', whiteSpace: 'nowrap'}}>
                    <KitSpace>
                        <KitTooltip placement="bottomLeft" title="promp text">
                            <KitButton>BL</KitButton>
                        </KitTooltip>
                        <KitTooltip placement="bottom" title="promp text">
                            <KitButton>Bottom</KitButton>
                        </KitTooltip>
                        <KitTooltip placement="bottomRight" title="promp text">
                            <KitButton>BR</KitButton>
                        </KitTooltip>
                    </KitSpace>
                </div>
            </div>
        </KitSpace>
    );
};

export default App;
