import { Component } from "react";

const states = [
	{
		top: "red",
		middle: "black",
		bottom: "black",
	},
	{
		top: "black",
		middle: "yellow",
		bottom: "black",
	},
	{
		top: "black",
		middle: "black",
		bottom: "green",
	},
];

export class ClassTrafficLight extends Component {
	state = { count: 0 };

	changeLightColor = () => {
		if (this.state.count < states.length - 1) {
			this.setState({ count: this.state.count + 1 });
		} else if (this.state.count === states.length - 1) {
			this.setState({ count: 0 });
		}
	};
	render() {
		return (
			<div className="traffic-light-box">
				<h2>Class Traffic Light</h2>
				<div className="traffic-light">
					<div className={`circle ${states[this.state.count].top}`}></div>
					<div className={`circle ${states[this.state.count].middle}`}></div>
					<div className={`circle ${states[this.state.count].bottom}`}></div>
				</div>
				<button
					className="next-state-button"
					onClick={this.changeLightColor}
				>
					Next State
				</button>
			</div>
		);
	}
}
