import { call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { throwError } from 'redux-saga-test-plan/providers';
import * as actions from '../../../src/js/actions';
import * as api from '../../../src/js/api';
import { expectSaga } from 'redux-saga-test-plan';

import fetchVideosSaga from '../../../src/js/sagas/fetchVideosSaga';
import videoListReducer from '../../../src/js/reducers/videoListReducer';
import selectedVideoReducer from '../../../src/js/reducers/selectedVideoReducer';

// testSaga -- work the generator manually line by line
// expectSaga -- makes assertions on the saga.

describe('fetchVideosSaga', () => {
  describe('initial fetch', () => {
    it('tests success path', () => {
      return expectSaga(fetchVideosSaga, actions.getVideos('javascript', true))
        .provide([
          [call(api.youtube, 'javascript'), { items: [{}, {}] }],
          [call(delay, 1000)]
        ])
        .put(actions.fetchVideosAttempt())
        .put(actions.fetchVideosSuccess({ items: [{}, {}] }))
        .put(actions.selectVideo({}))
        .run();
    });

    it('tests fail path', () => {
      return expectSaga(fetchVideosSaga, actions.getVideos('javascript', true))
        .provide([
          [
            call(api.youtube, 'javascript'),
            throwError({ message: 'API Failure' })
          ],
          [call(delay, 1000)]
        ])
        .put(actions.fetchVideosAttempt())
        .put(actions.fetchVideosFail({ message: 'API Failure' }))
        .run();
    });

    describe('integration tests', () => {
      it('tests videoListReducer', () => {
        return expectSaga(
          fetchVideosSaga,
          actions.getVideos('javascript', true)
        )
          .provide([
            [
              call(api.youtube, 'javascript'),
              { items: [{ one: 1 }, { two: 2 }] }
            ],
            [call(delay, 1000)]
          ])
          .withReducer(videoListReducer)
          .hasFinalState({
            isLoading: false,
            error: null,
            videos: [{ one: 1 }, { two: 2 }]
          })
          .run();
      });
      it('tests selectVideo reducer', () => {
        return expectSaga(
          fetchVideosSaga,
          actions.getVideos('javascript', true)
        )
          .provide([
            [
              call(api.youtube, 'javascript'),
              { items: [{ one: 1 }, { two: 2 }] }
            ],
            [call(delay, 1000)]
          ])
          .withReducer(selectedVideoReducer)
          .hasFinalState({ one: 1 })
          .run();
      });
    });
  });

  describe('update videos', () => {
    it('tests success path', () => {
      return expectSaga(fetchVideosSaga, actions.getVideos('javascript'))
        .provide([
          [call(api.youtube, 'javascript'), { items: [{}, {}] }],
          [call(delay, 1000)]
        ])
        .put(actions.fetchVideosAttempt())
        .put(actions.fetchVideosSuccess({ items: [{}, {}] }))
        .run();
    });

    it('tests fail path', () => {
      return expectSaga(fetchVideosSaga, actions.getVideos('javascript'))
        .provide([
          [
            call(api.youtube, 'javascript'),
            throwError({ message: 'API Failure' })
          ],
          [call(delay, 1000)]
        ])
        .put(actions.fetchVideosAttempt())
        .put(actions.fetchVideosFail({ message: 'API Failure' }))
        .run();
    });
    describe('integration tests', () => {
      it('tests videoListReducer', () => {
        return expectSaga(fetchVideosSaga, actions.getVideos('javascript'))
          .provide([
            [
              call(api.youtube, 'javascript'),
              { items: [{ one: 1 }, { two: 2 }] }
            ],
            [call(delay, 1000)]
          ])
          .withReducer(videoListReducer)
          .hasFinalState({
            isLoading: false,
            error: null,
            videos: [{ one: 1 }, { two: 2 }]
          })
          .run();
      });
      it('tests selectVideo reducer', () => {
        return expectSaga(fetchVideosSaga, actions.getVideos('javascript'))
          .provide([
            [
              call(api.youtube, 'javascript'),
              { items: [{ one: 1 }, { two: 2 }] }
            ],
            [call(delay, 1000)]
          ])
          .withReducer(selectedVideoReducer)
          .hasFinalState({})
          .run();
      });
    });
  });
});
