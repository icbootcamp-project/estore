import React from 'react';
import { App } from '../../../src/js/components/App';

//Below are related to enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  let getVideos, wrapper;

  beforeEach(() => {
    getVideos = jest.fn();
    wrapper = shallow(<App getVideos={getVideos} />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run getVideos with correct args', () => {
    expect(getVideos.mock.calls[0]).toEqual(['javascript', true]);
  });
});
