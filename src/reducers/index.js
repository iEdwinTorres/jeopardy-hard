const defaultState = {
	question: "",
	score: 0,
	categoty: "",
	pointValue: 0,
	solution: "",
	answeredQuestions: [],
};

const jeopardy = (state = defaultState, action) => {
	switch (action.type) {
		case "GET_QUESTION":
			const newQuestionState = {
				question: action.question.question,
				pointValue: action.question.value,
				categoty: action.question.categoty && action.question.categoty.title || "",
				solution: action.question.answer

			}
			return Object.assign({}, state, newQuestionState);
		case "ANSWERD_QUESTIONS":
			const answeredQuestionState = {
				question: action.question,
				pointValue:action.pointValue,
				categoty:action.categoty,
				solution:action.solution,
				answer:action.answer,
				previousScore:action.previousScore,
				newScore:action.newScore,
			}
			state.answeredQuestions.push(answeredQuestionState)
			return Object.assign({}, state)
		default:
			return state;
	}
};

export { jeopardy, defaultState };
