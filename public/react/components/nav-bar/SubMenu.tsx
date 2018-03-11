import * as React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const SubMenu = (props) => {
    const pages = props.pages.map(( page, index ) => {
        let contentBlocks;

        if (page.contentBlocks) {
            contentBlocks = page.contentBlocks.map(( contentBlock, index ) => {
                const hashPath = `${page.path}#${contentBlock.hashLink}`;
                return (
                    <HashLink to={hashPath} key={index}>
                        <li key={index}>{contentBlock.name}</li>
                    </HashLink>
                );
            });
        } else {
            contentBlocks = '';
        }

        return (
            <li key={index}>
                <Link to={page.path}>{page.name}</Link>
                <ol type='A' className='content-blocks-list'>{contentBlocks}</ol>
            </li>
        );
    });

    return <ol type='1' className='sub-menu'>{pages}</ol>;
};

export default SubMenu;
