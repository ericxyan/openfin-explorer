import * as React from 'react';
import { MenuSectionName, PageHeadline, PageHeadlineCaption, DividerLine } from './pageComponents';

const Page = (props) => {
    let sections;
    if (typeof props.content.sections !== 'undefined') {
        sections = props.content.sections.map((section, index) => {
            return (
                <li className='section-title' key={index} id={section.hashLink}>{section.title}
                    <div className='section-description'>{section.description}</div>
                    <div className='need-to-know'>
                        <div className='need-to-know-title'>Need to Know</div>
                        <div className='section-need-to-know'>{section.needToKnow}</div>
                    </div>
                    <code>{section.sampleCodeText}</code>
                    <button className='section-demo-button'>Click to demo</button>
                    <div className='section-jsdocs'>View our JSDocs</div>
                    <div className='section-demo-result'>Demo Result</div>
                </li>
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
