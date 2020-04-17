import request from "superagent";

const getQuestionAction = (question) => ({
	type: "GET_QUESTION",
	question,
});

export const answeredQuestion = (question, solution, answer, previousScore, newScore) => dispatch => (
	dispatch({
		type: "ANSWERED_QUESTION",
		question,
		solution,
		answer,
		previousScore,
		newScore,
	})
);

export const getQuestion = () => (dispatch) => {
	request
		.get("https://jservice.kenzie.academy/api/random-clue")
		.then((res) => {
			dispatch(getQuestionAction(res.body));
		})
		.catch((err) => {
			throw new err();
		});
};
