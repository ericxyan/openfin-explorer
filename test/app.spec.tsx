// import React from 'react';
import * as React from 'react';
import * as assert from 'assert';
import { mount, shallow } from 'enzyme';

import App from '../public/react/App.tsx';
import PageComponent from '../public/react/components/Page.tsx';
import PageHeader from '../public/react/components/Page-Header.tsx';
import PageSection from '../public/react/components/Page-Section.tsx';
import * as content from '../public/content.json';

describe('<App />', () => {
  const wrapper = mount(<App />);
  const uniqueSections = Array.from(new Set(content.map(contentItem => { return contentItem.section; })));

  it('Renders a nav bar and page body', () => {
      assert.equal(wrapper.find('.side-nav').length, 1);
      assert.equal(wrapper.find('.page').length, 1);
  });

  describe('<SideNav />', () => {
    const pathItems = content;

    it('Displays section for each unique section in the content json', () => {
      assert.equal(wrapper.find('.of-list-section').length, uniqueSections.length);
    });

    it('Displays route link for each path in a section', () => {
      assert.equal(wrapper.find('.of-list-item').length, pathItems.length);
    });
  });
});

describe('<PageComponent /> and JSON Content Format', () => {
  for (let i = 0; i < content.length; i++) {
    const pageContent = content[i];
    const page = mount(<PageComponent data={pageContent} />);

    it(`page # ${i} should have 1 page header`, () => {
      assert.equal(page.find('.page-header').length, 1);
    });

    it(`page # ${i} should have correct number of sections`, () => {
      assert.equal(page.find('.of-section').length, pageContent.sections.length);
    });
  }
});

describe('<PageHeader />', () => {
  const pageContent = content[0];
  const header = shallow(
    <PageHeader
      header={pageContent.header}
      subHeader={pageContent.subHeader}
      description={pageContent.description}
      sectionIcon={pageContent.sectionIcon} />
  );

  it('should have the expected header html tags', () => {
    assert.equal(header.find('h2').length, 1);
    assert.equal(header.find('i').length, 1);
    assert.equal(header.find('h5').length, 1);
    assert.equal(header.find('p').length, 1);
  });
});

describe('<PageSection /> and JSON Content Format', () => {
  for (let i = 0; i < content.length; i++) {
    content[i];
    for (let j = 0; j < content[i].sections.length; j++) {
      const sectionContent = content[i].sections[j];
      const section = mount(<PageSection data={sectionContent} />);

      describe(`Page # ${i} and its sections`, () => {
        it('should display title and description', () => {
          assert.equal(section.find('.of-section-title-text').length, 1);
          assert.equal(section.find('.of-section-header').length, 1);
          assert.equal(section.find('.of-section-sub-header').length, 1);
        });

        it('should be closed by default', () => {
          assert.strictEqual(section.state('showContent'), false);
        });

        if (sectionContent.hasOwnProperty('subSections') && sectionContent.subSections.length > 0) {
          it('should toggle when clicked if it has content', () => {
            assert.strictEqual(section.state('showContent'), false);

            section.find('.of-section-title').simulate('click');
            assert.strictEqual(section.state('showContent'), true);

            section.find('.of-section-title').simulate('click');
            assert.strictEqual(section.state('showContent'), false);
          });

          it('should have correct number of sub-sections', () => {
            section.setState({showContent: true});
            assert.equal(section.find('.sub-section').length, sectionContent.subSections.length);
          });

          it('should format sub-section content types differently', () => {
            let typeCount = {code: 0, text: 0, markdown: 0};
            sectionContent.subSections.map((sub) => {
              typeCount[sub.type] += 1;
            });

            section.setState({showContent: true});

            assert.equal(section.find('.code').length, typeCount.code);
            assert.equal(section.find('.text').length, typeCount.text);
            assert.equal(section.find('.markdown').length, typeCount.markdown);
          });
        } else {
          it('should NOT toggle when clicked if it has NO content', () => {
            assert.strictEqual(section.state('showContent'), false);

            section.find('.of-section-title').simulate('click');
            assert.strictEqual(section.state('showContent'), false);
          });
        }
      });
    }
  }
});
