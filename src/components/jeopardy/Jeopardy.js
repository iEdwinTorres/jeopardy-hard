import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as JeopardyActions from "../../actions";
import Display from "./Display";

const cleanString = (string) => {
	return string.toLowerCase().replace(/[^0-9a-z]/gi, "");
};

class Jeopardy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
			answer: "",
		};
	}

	componentDidMount() {
		this.props.getQuestion();
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleAnswer = (e) => {
		e.preventDefault();
		let score = this.state.score;
		const answer = cleanString(this.state.answer);
		const solution = cleanString(this.props.solution);
		if (answer === solution) {
			score += this.props.pointValue;
		} else {
			score -= this.props.pointValue;
		}
		//console.log(score)
		this.props.answeredQuestion(this.props.question, this.state.score, score);
		this.setState({ score, answer: "" });
		this.props.getQuestion();
	};

	handleSkip = (e) => {
		this.props.getQuestion();
	};

	render() {
		console.log(this.props);
		return (
			<div>
				<Display
					question={this.props.question}
					score={this.state.score}
					category={this.props.category}
					pv={this.props.pointValue}
					handleAnswer={this.handleAnswer}
					handleChange={this.handleChange}
					handleSkip={this.handleSkip}
				/>
				<div>
					<h5>{JSON.stringify(this.props.answeredQuestions)}</h5>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	question: state.question,
	score: state.score,
	category: state.category,
	pointValue: state.pointValue,
	solution: state.solution,
	answeredQuestions: state.answeredQuestions,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(JeopardyActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Jeopardy);
