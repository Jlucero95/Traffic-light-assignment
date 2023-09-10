import { Component } from "react";
import { lightState } from "./LightStates";

export class ClassTrafficLight extends Component {
	state = { count: 0 };

	stateCount = this.state.count;

	changeLightColor = () => {
		if (this.state.count < lightState.length - 1) {
			this.setState({ count: this.state.count + 1 });
		} else if (this.state.count === lightState.length - 1) {
			this.setState({ count: 0 });
		}
	};
	render() {
		return (
			<div className="traffic-light-box">
				<h2>Class Traffic Light</h2>
				<div className="traffic-light">
					<div className={`circle ${lightState[this.stateCount].top}`}></div>
					<div className={`circle ${lightState[this.stateCount].middle}`}></div>
					<div className={`circle ${lightState[this.stateCount].bottom}`}></div>
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
