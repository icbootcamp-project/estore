import YOUTUBE_KEY from '../../../src/js/config/youtubekey';
import * as types from '../../../src/js/constants';
import * as actions from '../../../src/js/actions';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Actions', () => {
  let store, video, videos, error, query, initial;
  beforeEach(() => {
    store = mockStore({});
  });
  describe('selectVideo', () => {
    beforeEach(() => {
      video = {};
      store.dispatch(actions.selectVideo(video));
    });

    it('should have correct length', () => {
      expect(store.getActions().length).toBe(1);
    });
    it('should dispatch correct type', () => {
      expect(store.getActions()[0].type).toBe(actions.selectVideo(video).type);
    });
    it('should dispatch correct payload', () => {
      expect(store.getActions()[0].payload).toEqual(video);
    });
  });

  describe('fetchVideosAttempt', () => {
    beforeEach(() => {
      store.dispatch(actions.fetchVideosAttempt());
    });

    it('should have correct length', () => {
      expect(store.getActions().length).toBe(1);
    });
    it('should dispatch correct type', () => {
      expect(store.getActions()[0].type).toBe(
        actions.fetchVideosAttempt().type
      );
    });
  });

  describe('fetchVideosSuccess', () => {
    beforeEach(() => {
      videos = [{}];
      store.dispatch(actions.fetchVideosSuccess(videos));
    });

    it('should have correct length', () => {
      expect(store.getActions().length).toBe(1);
    });
    it('should dispatch correct type', () => {
      expect(store.getActions()[0].type).toBe(
        actions.fetchVideosSuccess().type
      );
    });
    it('should dispatch correct payload', () => {
      expect(store.getActions()[0].payload).toEqual(videos);
    });
  });

  describe('fetchVideosFail', () => {
    beforeEach(() => {
      error = { message: 'Error fetching' };
      store.dispatch(actions.fetchVideosFail(error));
    });

    it('should have correct length', () => {
      expect(store.getActions().length).toBe(1);
    });
    it('should dispatch correct type', () => {
      expect(store.getActions()[0].type).toBe(actions.fetchVideosFail().type);
    });
    it('should dispatch correct payload', () => {
      expect(store.getActions()[0].payload).toEqual(error);
    });
  });

  describe('getVideos', () => {
    let query;
    beforeEach(() => {
      query = 'javascript';
      store.dispatch(actions.getVideos(query));
    });

    it('should have correct length', () => {
      expect(store.getActions().length).toBe(1);
    });
    it('should dispatch correct type', () => {
      expect(store.getActions()[0].type).toBe(actions.getVideos().type);
    });
    it('should dispatch correct payload', () => {
      expect(store.getActions()[0].payload).toEqual({
        query,
        initial: undefined
      });
    });
  });
});
