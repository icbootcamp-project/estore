import React from 'react';
import Search from '../../../src/js/components/Search';

//Below are related to enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('Search Component', () => {
  let getVideos, wrapper;

  beforeEach(() => {
    getVideos = jest.fn();
    wrapper = shallow(<Search getVideos={getVideos} />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('runs getVideos on input handler', () => {
    wrapper.find('input').simulate('change', { target: { value: 'java' } });
    expect(getVideos.mock.calls[0]).toEqual(['java']);
  });
});
