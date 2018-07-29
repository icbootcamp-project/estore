import React from 'react';
import { Nav } from '../../../src/js/components/Nav';

//Below are related to enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('Nav Component', () => {
  let getVideos, wrapper;

  beforeEach(() => {
    getVideos = jest.fn();
    wrapper = shallow(<Nav getVideos={getVideos} />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('passes on getVideos', () => {
    expect(getVideos.mock.calls.length).toBe(0);
  });
});
