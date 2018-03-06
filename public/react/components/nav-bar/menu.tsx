import * as React from 'react';
import MenuItem from './menuItem';
import menuSections from '../../../content/menu';

interface MenuState { activeMenuItem: number; }

export default class Menu extends React.Component <{}, MenuState> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <ul className='menu'>
                {
                    menuSections.map((section, index, menuSections) => {
                        const arrayListLength = menuSections.length;
						return (
							<MenuItem section={section} key={index} />
						);
                    })
                }
            </ul>
        );
    }
}
                        // return (
                        //     <Link key={index} to={section.rootPath}>
                        //         <MenuItem section={section} listLength={arrayListLength} itemNumber={index + 1} />
                        //     </Link>
                        // );
