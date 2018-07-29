import selectedVideoReducer from '../../../src/js/reducers/selectedVideoReducer';
import * as types from '../../../src/js/constants';

describe('selectedVideoReducer', () => {
  const initialState = {};

  it('should initialize', () => {
    let nextState = selectedVideoReducer(undefined, {});
    expect(nextState).toEqual(initialState);
  });

  it('tests case SELECT_VIDEO', () => {
    let video = { id: 'abcd' };
    let action = {
      type: types.SELECT_VIDEO,
      payload: video
    };
    let nextState = selectedVideoReducer(initialState, action);
    expect(nextState).toEqual(video);
  });
});
