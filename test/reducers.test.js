import * as actions from '../src/actions';
import * as types from '../src/constants';
import quizReducer from '../src/reducers/quiz';


describe('quiz reducer', () => {
  let oldState = undefined;
  let newState = {
    isFetching: false,
    quizlist: [],
    quizes: {},
    currentQuiz: null,
  }
  /*===============================================================*/
  it('should return the initial state', () => {
    expect(quizReducer(oldState, {})).toEqual(newState)
  })

  /*===============================================================*/

  it('should set isFetching to true when request starts ', () => {
  	oldState = { ...newState, };
    newState = {
      ...newState,
      isFetching: true,
    }
  	const action = actions.requestQuizes();
    expect(quizReducer(oldState, action)).toEqual(newState)
  })

  /*===============================================================*/
  it('should receive quizlist and set isFetching to false', () => {
  	oldState = { ...newState };
    newState = {
      ...newState,
      isFetching: false,
      quizlist: [
        { 'fakeId123KEY1':'Founders' },
        {'fakeId123KEY2': 'Math'},
      ],
    }
    const action = actions.receiveQuizes([
      { 'fakeId123KEY1': 'Founders' },
      { 'fakeId123KEY2': 'Math' },    
    ]);
    expect(quizReducer(oldState, action)).toEqual(newState);
  })

  /*===============================================================*/ 
  it('should set currentQuiz with quiz id', () => {
  	oldState = { ...newState, };
    newState = { ...newState, currentQuiz: 'fakeId123KEY1'}

    const action = actions.selectQuiz('fakeId123KEY1');
    expect(quizReducer(oldState, action)).toEqual(newState);
  })



  /*===============================================================*/
  it('should initiate quiz with the correct title', () => {
  	oldState = { ...newState, };
    newState = { ...newState, quizes: {
      'fakeId123KEY1': { 
        title: 'Founders',
        isInvalidated: false,
        isMyQuiz: false,
        problems:{},
        currentProblem: 0,  
        isFetching: false,
      }}
    }
    const action = actions.addQuiz('fakeId123KEY1', {title: 'Founders'});
    expect(quizReducer(oldState, action)).toEqual(newState);
  })

  /*===============================================================*/
  it('should set isMyQuiz to true through the permit edit action', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], isMyQuiz: true}}
    }
    const action = actions.permitEdit('fakeId123KEY1');
    expect(quizReducer(oldState, action)).toEqual(newState)
  })


  /*===============================================================*/
  it('should change the name of the quiz through the setTitle action', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], title: 'Founders of Tech Companies'}}
    }
    const action = actions.setTitle('fakeId123KEY1', 'Founders of Tech Companies');
    expect(quizReducer(oldState, action)).toEqual(newState)
  })

  /*===============================================================*/
  it('should change the isInvalidated flag to true', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], isInvalidated: true}}
    }
    const action = actions.invalidate('fakeId123KEY1');
    expect(quizReducer(oldState, action)).toEqual(newState);
  })

  /*===============================================================*/
  it('should add a new problem with index 0 to the quiz', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], 
    	  problems: { 0: {
            question: null,
            choices: {},
            correct: null,
            }
    	  }
      }
    }}

    const action = actions.addProblem('fakeId123KEY1');
    expect(quizReducer(oldState, action)).toEqual(newState)
  })

  /*===============================================================*/
  it('should add another problem with id 1 to the quiz', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], 
    	  problems: { ...newState.quizes['fakeId123KEY1'].problems, 1: {
            question: null,
            choices: {},
            correct: null,
            }
    	  }
        }
    }}
    const action = actions.addProblem('fakeId123KEY1');
    expect(quizReducer(oldState, action)).toEqual(newState)
  })

  /*===============================================================*/
  it('should remove problem 1', () => {
  	oldState = { ...newState };
    delete newState.quizes['fakeId123KEY1'].problems[1]

    const action = actions.removeProblem('fakeId123KEY1', 1,);
    expect(quizReducer(oldState, action)).toEqual(newState)
  })
  /*===============================================================*/
  it('should set currentProblem within a quiz', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], 
    	 currentProblem: 0,
      }
    }}
    const action = actions.setCurrentProblem('fakeId123KEY1', 0);
    expect(quizReducer(oldState, action)).toEqual(newState)
  })

  /*===============================================================*/
  it('should set text for question in problem 0', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], 
    	  problems: { ...newState.quizes['fakeId123KEY1'].problems,
    	    0: { ...newState.quizes['fakeId123KEY1'].problems[0], question:
    	      { ...newState.quizes['fakeId123KEY1'].problems[0].question, text: 'Who founded Amazon?'}}},
      }
    }}
    const action = actions.setQuestionText('fakeId123KEY1', 0, 'Who founded Amazon?');
    expect(quizReducer(oldState, action)).toEqual(newState)
  })

  /*===============================================================*/
  it('should add a new choice to problem 0', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], 
    	  problems: { ...newState.quizes['fakeId123KEY1'].problems,
    	    0: { ...newState.quizes['fakeId123KEY1'].problems[0], choices:
    	          { ...newState.quizes['fakeId123KEY1'].problems[0].choices,
    	            0: { text: null, media: {}}
    	          }
    	       }
    	  },
        }
    }}
    const action = actions.addChoice('fakeId123KEY1', 0);
    expect(quizReducer(oldState, action)).toEqual(newState)
  })



  /*===============================================================*/
  it('should set the text of choice 0 of problem 0', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], 
    	  problems: { ...newState.quizes['fakeId123KEY1'].problems,
    	    0: { ...newState.quizes['fakeId123KEY1'].problems[0], choices:
    	          { ...newState.quizes['fakeId123KEY1'].problems[0].choices, 0:
    	            { ...newState.quizes['fakeId123KEY1'].problems[0].choices[0], text: 'Jeff Bezos'}
    	          }
    	       },
          }
       }
    }}
    const action = actions.editChoiceText('fakeId123KEY1', 0, 0, 'Jeff Bezos');
    expect(quizReducer(oldState, action)).toEqual(newState)
  })

  /*===============================================================*/
  it('should set the correct choice problem 0', () => {
  	oldState = { ...newState };
    newState = { ...newState, quizes: { ...newState.quizes,
    	'fakeId123KEY1': { ...newState.quizes['fakeId123KEY1'], 
    	  problems: { ...newState.quizes['fakeId123KEY1'].problems,
    	    0: { ...newState.quizes['fakeId123KEY1'].problems[0], correct: 0 }
    	       },
          }
       }
    }
    const action = actions.setCorrect('fakeId123KEY1', 0, 0);
    expect(quizReducer(oldState, action)).toEqual(newState)
  })

});