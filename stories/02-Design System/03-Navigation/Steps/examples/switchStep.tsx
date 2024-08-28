import {useState} from 'react';
import {KitSteps} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {KitButton, KitTypography} from '@kit/General';

const steps = [
    {
        title: 'First',
        content: <KitTypography.Paragraph>Doing First</KitTypography.Paragraph>
    },
    {
        title: 'Second',
        content: <KitTypography.Paragraph>Doing Second</KitTypography.Paragraph>
    },
    {
        title: 'Last',
        content: <KitTypography.Paragraph>Doing Third</KitTypography.Paragraph>
    }
];

const done = <KitTypography.Paragraph>Done</KitTypography.Paragraph>;

const App = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map(item => ({key: item.title, title: item.title}));
    return (
        <>
            <KitSteps current={current} items={items} />
            <div
                style={{
                    height: '200px',
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.45)',
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    borderRadius: '8px',
                    border: '1px dashed rgb(217, 217, 217)',
                    marginTop: '16px',
                    paddingTop: '50px'
                }}
            >
                {current < steps.length ? steps[current].content : done}
            </div>
            <KitSpace style={{marginTop: 24}}>
                {current < steps.length && (
                    <KitButton type="primary" onClick={() => next()}>
                        Next
                    </KitButton>
                )}
                {current > 0 && (
                    <KitButton style={{margin: '0 8px'}} onClick={() => prev()}>
                        Previous
                    </KitButton>
                )}
            </KitSpace>
        </>
    );
};

export default App;
