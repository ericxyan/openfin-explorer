import * as React from 'react';

const Close = () => {
    function closeApp() {
        fin.desktop.Application.getCurrent().close();
    }

    return (
        <img src='icons/close.png' alt='close' className='controls-icon' height='15px' width='15px' onClick={closeApp}/>
    );
};

export default Close;