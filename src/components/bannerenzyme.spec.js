import React from 'react'
import { shallow} from 'enzyme'
import Banner from './Banner'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

test('Banner renders', () => {
  const banner = shallow(<Banner banner="hello world!" />)
  
  expect(banner.find('h1').length).toEqual(1)
  expect(banner.find('h1').text()).toEqual("hello world!")

})
