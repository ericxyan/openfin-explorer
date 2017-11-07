import * as React from 'react';
import MenuItem from './menuItem';
import menuSections from '../../../content/menu';
import { Link } from 'react-router-dom';

interface MenuState { activeMenuItem: number; }

export default class Menu extends React.Component <{}, MenuState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            activeMenuItem: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick (clickedMenuItem: number) {
        this.setState({ activeMenuItem: clickedMenuItem });
    }

    public render() {
        return (
            <ul className='menu'>
                {
                    menuSections.map((section, index, menuSections) => {
                        const arrayListLength = menuSections.length;
                        const active = this.state.activeMenuItem === index;
                        return (
                            <Link onClick={() => { this.handleClick(index); }} key={index} to={section.rootPath}>
                                <MenuItem section={section} listLength={arrayListLength} itemNumber={index + 1} active={active} />
                            </Link>
                        );
                    })
                }
            </ul>
        );
    }
}
