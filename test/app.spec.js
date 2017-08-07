import React from 'react';
import * as assert from 'assert';
import { mount } from 'enzyme';

import App from '../public/react/App';
import content from '../public/content.json';

describe('<App />', () => {
    const wrapper = mount(<App />);
    const uniqueSection = Array.from(new Set(content.map(contentItem => { return contentItem.section })));
    const pathItemsCount = content.length;

    it('Renders a nav bar and body', () => {
        assert.equal(wrapper.find('.side-nav').length, 1);
        assert.equal(wrapper.find('.page').length, 1);
    })
    it('Displays an of-list-section for each unique section in the content json', () => {
        assert.equal(wrapper.find('.of-list-section').length, uniqueSection.length);
    })
    it('Displays an of-list-item for each path in a section', () => {
        assert.equal(wrapper.find('.of-list-item').length, pathItemsCount);
    })
})
