import * as React from 'react';

const Title = () => {
    return <span className='title'>API EXPLORER</span>;
};

const Logo = () => {
    return (
        <div className='logo'>
            <img src='openfin-logo.png' alt='OpenFin Logo' height='30px' width='115px' />
            <Title />
        </div>
    );
};

export default Logo;
