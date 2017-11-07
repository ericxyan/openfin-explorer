import * as React from 'react';
import SubMenu from './SubMenu';

interface MenuItemProps {
    section: any;
    listLength: number;
    itemNumber: any;
    active: any;
}

export default class MenuItem extends React.Component <MenuItemProps, {}> {
    private itemStyle;

    constructor(props: MenuItemProps) {
        super(props);
        const liStyle = {
            borderWidth: '0px 0px 1px',
            borderColor: '#55538B',
            borderStyle: 'solid'
        };
        const lastItemStyle = {
        };
        this.itemStyle = this.props.itemNumber !== this.props.listLength ? liStyle : lastItemStyle;
    }

    public render() {
        return (
            <li style={this.itemStyle} >
                <img src={`icons/${this.props.section.iconName}.png`}  height='16' width='16' />
                <span className='title'>{this.props.section.name}</span>
                <img src='icons/right.png' className={this.props.active ? 'right-active' : 'right-inactive'} height='10' width='10' />
                <SubMenu pages={this.props.section.pages} active={this.props.active}/>
            </li>
        );

    }
}
