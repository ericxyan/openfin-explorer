import * as React from 'react';

const titleStyle = {
    color: '#8E8CFF',
    fontSize: '11px'
};

const Title = () => {
    return <span style={titleStyle}>API EXPLORER</span>;
};

const logoStyle = {
    textAlign: 'center',
    paddingTop: '52px',
    paddingBottom: '52px'
};

const Logo = () => {
    return (
        <div style={logoStyle}>
            <img src='openfin-logo.png' alt='OpenFin Logo' height='30px' width='100.8px' />
            <Title />
        </div>
    );
};

export default Logo;
