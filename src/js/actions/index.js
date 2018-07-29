import * as types from '../constants';

export function testAction() {
  return {
    type: types.TEST_ACTION
  };
}

export function testActionAttempt() {
  return {
    type: types.TEST_ACTION_ATTEMPT
  };
}

export function testActionSuccess() {
  return {
    type: types.TEST_ACTION_SUCCESS
  };
}

export function testActionFail() {
  return {
    type: types.TEST_ACTION_FAIL
  };
}
