import * as React from 'react';
import MenuItem from './menuItem';
import menuContent from './menuContent';

const Menu = () => {
    const menuItems = menuContent.map((item, index) => {
        return (
            <MenuItem section={item} key={index} />
        );
    });

    return (
        <ul className='menu'>
            {menuItems}
        </ul>
    );
};

export default Menu;
