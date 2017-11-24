import fetchMock from 'fetch-mock';
import * as actions from '../../src/actions';
import * as types from '../../src/constants';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk])


describe('fetching data and using two middlewares to update the store', () => {
  afterEach(() => {
  	fetchMock.reset();
  	fetchMock.restore();
  })

  it('should fetch data and send quizlist to the store', () => {
  	fetchMock.
  	  get('*', {
  	        quizlist: [
  	          { 'fakeId123KEY1':'Founders' },
  	          {'fakeId123KEY2': 'Math'},
  	        ]
  	  });
    const store = mockStore({});
    const expectedActions = [
      { type: types.REQUEST_QUIZES },
      { type: types.RECEIVE_QUIZES, payload: { quizlist: [
  	    {'fakeId123KEY1':'Founders' },
  	    {'fakeId123KEY2': 'Math'},
  	  ]}}
    ]
    console.log(actions.fetchQuizes())
    store.dispatch(actions.fetchQuizes()).then( () => 
      expect(store.getActions()).toEqual(expectedActions)
    );
  })
})

