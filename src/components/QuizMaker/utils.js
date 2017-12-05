const handleClick = (e, c, correct) => {
  if (e) {
    e.preventDefault();
  }
  if (correct) {
    c.setState({
      current: { ...c.state.current, correct },
    });
  }
};

const handleSubmit = (e, c) => {
  if (e) {
    e.preventDefault();
  }
  const {
    submitQuiz,
  } = c.props;
  const {
    title,
    problems,
  } = c.state;
  submitQuiz({ title, problems });
};

const nextQuestion = (e, c, problem) => {
  if (e) {
    e.preventDefault();
  }
  if (!problem.question || !problem.choices || !problem.correct) {
    return;
  }
  c.setState({
    problems: [...c.state.problems, problem],
  });
  c.forceUpdate();
};




export default {
  handleClick,
  handleSubmit,
  nextQuestion,
};
