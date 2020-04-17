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

	handelChange = (e) => {
		this.setState({ [e.target.name]: e.taget.value });
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
		this.props.answredQuestion(this.props.question, this.state.score, score);
		this.setState({ score, answer: "" });
		this.props.getQuestion();
	};

	render() {
		return (
			<div>
				<Display
					question={this.props.question}
					score={this.props.score}
					categoty={this.props.categoty}
					pointValue={this.props.pointValue}
					handleAnswer={this.handleAnswer}
					handleChange={this.handelChange}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	question: state.question,
	score: state.score,
	categoty: state.categoty,
	pointValue: state.pointValue,
	solution: state.solution,
	answredQuestions: state.answredQuestions,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(JeopardyActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Jeopardy);
