import React from 'react';

const CustomCanvas = props => {
    return <div style={{border: '1px solid #ccc', borderRadius: '7px'}}>{props.children}</div>;
};

export default CustomCanvas;
