import React, {useMemo, useState} from 'react';
import {KitTooltip} from '@kit/DataDisplay';
import {KitButton} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {Segmented} from 'antd';

const App = () => {
    const [arrow, setArrow] = useState<string>('Show');
    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
            return false;
        }
        if (arrow === 'Show') {
            return true;
        }
        return {
            pointAtCenter: true
        };
    }, [arrow]);
    return (
        <>
            <Segmented
                value={arrow}
                options={['Show', 'Hide', 'Center']}
                onChange={val => {
                    setArrow(val as string);
                }}
            />
            <br />
            <br />
            <div style={{marginLeft: 70, whiteSpace: 'nowrap'}}>
                <KitSpace>
                    <KitTooltip placement="topLeft" title="prompt text" arrow={mergedArrow}>
                        <KitButton>TL</KitButton>
                    </KitTooltip>
                    <KitTooltip placement="top" title="prompt text" arrow={mergedArrow}>
                        <KitButton>Top</KitButton>
                    </KitTooltip>
                    <KitTooltip placement="topRight" title="prompt text" arrow={mergedArrow}>
                        <KitButton>TR</KitButton>
                    </KitTooltip>
                </KitSpace>
            </div>
            <div style={{width: 70, float: 'left'}}>
                <KitSpace direction="vertical">
                    <KitTooltip placement="leftTop" title="prompt text" arrow={mergedArrow}>
                        <KitButton>LT</KitButton>
                    </KitTooltip>
                    <KitTooltip placement="left" title="prompt text" arrow={mergedArrow}>
                        <KitButton>Left</KitButton>
                    </KitTooltip>
                    <KitTooltip placement="leftBottom" title="prompt text" arrow={mergedArrow}>
                        <KitButton>LB</KitButton>
                    </KitTooltip>
                </KitSpace>
            </div>
            <div style={{width: 70, marginLeft: 70 * 4 + 24}}>
                <KitSpace direction="vertical">
                    <KitTooltip placement="rightTop" title="prompt text" arrow={mergedArrow}>
                        <KitButton>RT</KitButton>
                    </KitTooltip>
                    <KitTooltip placement="right" title="prompt text" arrow={mergedArrow}>
                        <KitButton>Right</KitButton>
                    </KitTooltip>
                    <KitTooltip placement="rightBottom" title="prompt text" arrow={mergedArrow}>
                        <KitButton>RB</KitButton>
                    </KitTooltip>
                </KitSpace>
            </div>
            <div style={{marginLeft: 70, clear: 'both', whiteSpace: 'nowrap'}}>
                <KitSpace>
                    <KitTooltip placement="bottomLeft" title="prompt text" arrow={mergedArrow}>
                        <KitButton>BL</KitButton>
                    </KitTooltip>
                    <KitTooltip placement="bottom" title="prompt text" arrow={mergedArrow}>
                        <KitButton>Bottom</KitButton>
                    </KitTooltip>
                    <KitTooltip placement="bottomRight" title="prompt text" arrow={mergedArrow}>
                        <KitButton>BR</KitButton>
                    </KitTooltip>
                </KitSpace>
            </div>
        </>
    );
};

export default App;
