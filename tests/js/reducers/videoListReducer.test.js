import videoListReducer from '../../../src/js/reducers/videoListReducer';
import * as types from '../../../src/js/constants';

describe('videoListReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      isLoading: false,
      error: null,
      videos: []
    };
  });

  it('should initialize', () => {
    let action = {};
    let nextState = videoListReducer(undefined, action);
    expect(nextState).toEqual(initialState);
  });

  it('tests case FETCH_VIDEOS_ATTEMPT', () => {
    let action = {
      type: types.FETCH_VIDEOS_ATTEMPT
    };
    let nextState = videoListReducer(initialState, action);
    let expectedState = {
      isLoading: true,
      error: null,
      videos: []
    };
    expect(nextState).toEqual(expectedState);
  });

  it('tests case FETCH_VIDEOS_SUCCESS', () => {
    let videos = { items: [{}, {}] };
    let action = {
      type: types.FETCH_VIDEOS_SUCCESS,
      payload: videos
    };
    let nextState = videoListReducer(initialState, action);
    let expectedState = {
      isLoading: false,
      error: null,
      videos: [{}, {}]
    };
    expect(nextState).toEqual(expectedState);
  });

  it('tests case FETCH_VIDEOS_FAIL', () => {
    let error = { message: 'API Failure' };
    let action = {
      type: types.FETCH_VIDEOS_FAIL,
      payload: error
    };
    let nextState = videoListReducer(initialState, action);
    let expectedState = {
      isLoading: false,
      error: { message: 'API Failure' },
      videos: []
    };
    expect(nextState).toEqual(expectedState);
  });
});
