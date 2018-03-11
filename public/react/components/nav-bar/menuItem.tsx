import * as React from 'react';
import SubMenu from './subMenu';
import { Link } from 'react-router-dom';

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
        const liStyle = {
            borderWidth: '0px 0px 1px',
            borderColor: '#55538B',
            borderStyle: 'solid'
        };
        this.state = {
            active: false
        };
        //styling needs to be back into the menu
        this.itemStyle = liStyle;
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick() {
        this.setState(previousState => {
            return { active: !previousState.active }
        });
    }

    public render() {
        return (
            <li style={this.itemStyle} >
                <Link to={this.props.section.rootPath} onClick={this.handleClick}>
                    <img src={`icons/${this.props.section.iconName}.png`}  height='16' width='16' />
                    <span className='title'>{this.props.section.name}</span>
                    <img src='icons/right.png' className={this.state.active ? 'right-active' : 'right-inactive'} height='10' width='10' />
                </Link>
                {this.state.active && this.props.section.rootPath !== '/' ? <SubMenu pages={this.props.section.pages} /> : null }
            </li>
        );

    }
}
