import React from 'react';
import renderer from 'react-test-renderer'
import MyNewComponent from "./MyNewComponent";

test('MyNewComponent  shows up when rendered', () => {
  
  const component = renderer.create(<MyNewComponent  initValue='hello world!' />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
