import React from 'react';
import renderer from 'react-test-renderer'
import Banner from "./Banner";

test('banner shows up when rendered', () => {
  
  const banner = renderer.create(<Banner banner='hello world!' />)
  let tree = banner.toJSON();
  expect(tree).toMatchSnapshot();
})
