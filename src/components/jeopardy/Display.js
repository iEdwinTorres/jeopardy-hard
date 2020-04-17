import React, { Component } from "react";

class Display extends Component {
/* 	constructor(props) {
		super(props);
	} */

	render() {
		const question = this.props.question;
		const category = this.props.category;
		const pv = this.props.pv;

		return (
			<div>
				<div>
					<h3>{category}</h3>
				</div>
				<div className="Value">
					<h1>${pv}</h1>
				</div>
				<div className="Clue">
					<h4>{question}</h4>
				</div>
					<br/>
				<div>
					<strong>Winnings: </strong>${this.props.score}
				</div>
				<div>
					<strong>Answer This:</strong>
					<form onSubmit={this.props.handleAnswer}>
						<input onChange={this.props.handleChange} name="answer" />
						<button>Submit</button>
					</form>

					<button onClick={this.props.handleSkip}>Skip</button>
				</div>
			</div>
		);
	}
}

export default Display;
