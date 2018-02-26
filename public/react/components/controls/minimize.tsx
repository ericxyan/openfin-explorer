import * as React from 'react';

const Minimize = () => {
    function minimizeApp() {
        fin.desktop.Window.getCurrent().minimize();
    }

    return (
        <img src='icons/minimize.png' alt='minimize' className='controls-icon' height='12px' width='12px' onClick={minimizeApp}/>
    );
};

export default Minimize;