import * as React from 'react';

const Maximize = () => {
    function maximizeApp() {
        const thisWindow = fin.desktop.Window.getCurrent();
        thisWindow.getState(state => {
            if (state === 'maximized') {
                thisWindow.restore();
            } else {
                thisWindow.maximize();
            }
        });

    }

    return (
        <img src='icons/maximize.png' alt='maximize' className='controls-icon' height='13px' width='13px' onClick={maximizeApp}/>
    );
};

export default Maximize;