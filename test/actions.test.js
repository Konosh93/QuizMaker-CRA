import * as actions from '../src/actions';
import * as types from '../src/constants';
console.log('test passed');

describe ('actions', () => {
  it('should create an action with type REQUEST_QUIZES', () => {
    const expectedAction = { type: types.REQUEST_QUIZES };

    expect(actions.requestQuizes()).toEqual(expectedAction);
  });
});
