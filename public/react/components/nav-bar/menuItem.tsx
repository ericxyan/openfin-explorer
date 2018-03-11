import * as React from 'react';
import SubMenu from './subMenu';
import { Link } from 'react-router-dom';

// TODO define this interface
interface MenuItemProps {
    section: any;
}

interface MenuItemState {
    active: boolean;
}

export default class MenuItem extends React.Component <MenuItemProps, MenuItemState> {
    private itemStyle;

    constructor(props: MenuItemProps) {
        super(props);

        this.state = {
            active: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick() {
        this.setState(previousState => {
            return { active: !previousState.active };
        });
    }

    public render() {
        return (
            <li className='menu-item'>
                <Link to={this.props.section.rootPath} onClick={this.handleClick}>
                    <img src={`icons/${this.props.section.iconName}.png`} className='section-icon' />
                    <span className='title'>{this.props.section.name}</span>
                    <img src='icons/right.png' className={this.state.active ? 'right right-active' : 'right right-inactive'} />
                </Link>
                {this.state.active && this.props.section.rootPath !== '/' ? <SubMenu pages={this.props.section.pages} /> : null }
            </li>
        );

    }
}
