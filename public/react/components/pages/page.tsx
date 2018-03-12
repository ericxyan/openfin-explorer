import * as React from 'react';
import { MenuSectionName, PageHeadline, PageHeadlineCaption, DividerLine, Section } from './pageComponents';

const Page = (props) => {
    let sections;
    if (typeof props.content.sections !== 'undefined') {
        sections = props.content.sections.map((section, index) => {
            return (
                <Section section={section} key={index} />
            );
        });
    }

    return (
        <div className='page'>
            <MenuSectionName sectionName={props.content.header} />
            <PageHeadline headline={props.content.headline} />
            <PageHeadlineCaption caption={props.content.headlineCaption} />
            <DividerLine />
            <ol type='A' className='sections'>
                {sections}
            </ol>
        </div>
    );
};

export default Page;
