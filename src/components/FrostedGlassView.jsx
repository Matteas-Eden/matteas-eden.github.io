import React from 'react';

export const FrostedGlassView = (props) => {
    return (
        <div
            style={{ backgroundColor: props.bg, backgroundImage: props.bg }}
            className={
                'bg frosted-glass ' + (props.className ? props.className : '')
            }
        >
            <div
                className="frosted-glass-content"
                style={props.mobile ? { minHeight: '95vh' } : {}}
            >
                {props.children}
            </div>
        </div>
    );
};
