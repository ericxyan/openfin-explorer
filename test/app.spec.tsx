// import React from 'react';
import * as React from 'react';
import * as assert from 'assert';
import { mount, shallow } from 'enzyme';

import App from '../public/react/App.tsx';
import * as content from '../public/content.json';

describe('<App />', () => {
    const wrapper = mount(<App />);
    const uniqueSections = Array.from(new Set(content.map(contentItem => { return contentItem.section; })));
    const pathItems = content;

    it('Renders a nav bar and body', () => {
        assert.equal(wrapper.find('.side-nav').length, 1);
        assert.equal(wrapper.find('.page').length, 1);
    });
    it('Displays an of-list-section for each unique section in the content json', () => {
        assert.equal(wrapper.find('.of-list-section').length, uniqueSections.length);
    });
    it('Displays an of-list-item for each path in a section', () => {
        assert.equal(wrapper.find('.of-list-item').length, pathItems.length);
    });
});
