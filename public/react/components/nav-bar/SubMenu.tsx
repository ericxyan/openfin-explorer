import * as React from 'react';

const SubMenu = (props) => {
    const pages = props.pages.map(page => {
        let contentBlocks;

        if (page.contentBlocks) {
            contentBlocks = page.contentBlocks.map(contentBlock => {
                return (
                    <li>{contentBlock.name}</li>
                );
            });
        } else {
            contentBlocks = '';
        }

        return (
            <li>
                {page.name}
                <ol type='A' className='content-blocks-list'>{contentBlocks}</ol>
            </li>
        );
    });

    return <ol type='1' className={ props.active ? 'active-sub-menu' : 'inactive-sub-menu'}>{pages}</ol>;
};

export default SubMenu;