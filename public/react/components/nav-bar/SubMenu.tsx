import * as React from 'react';

const SubMenu = (props) => {
    const pages = props.pages.map(( page, index ) => {
        let contentBlocks;

        if (page.contentBlocks) {
            contentBlocks = page.contentBlocks.map(( contentBlock, index ) => {
                return (
                    <li key={index}>{contentBlock.name}</li>
                );
            });
        } else {
            contentBlocks = '';
        }

        return (
            <li key={index}>
                {page.name}
                <ol type='A' className='content-blocks-list'>{contentBlocks}</ol>
            </li>
        );
    });

    return <ol type='1' >{pages}</ol>;
};

export default SubMenu;
