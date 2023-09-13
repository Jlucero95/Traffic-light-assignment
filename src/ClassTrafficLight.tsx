import { Component } from "react";
import { lightState } from "./LightStates";

type ClassLightState = { lightStateIndex: number };

export class ClassTrafficLight extends Component<
	Record<string, never>,
	ClassLightState
> {
	state: ClassLightState = { lightStateIndex: 0 };

	changeLightColor = () => {
		if (this.state.lightStateIndex < lightState.length - 1) {
			this.setState({ lightStateIndex: this.state.lightStateIndex + 1 });
		} else if (this.state.lightStateIndex === lightState.length - 1) {
			this.setState({ lightStateIndex: 0 });
		}
	};
	render() {
		return (
			<div className="traffic-light-box">
				<h2>Class Traffic Light</h2>
				<div className="traffic-light">
					<div
						className={`circle ${lightState[this.state.lightStateIndex].top}`}
					></div>
					<div
						className={`circle ${
							lightState[this.state.lightStateIndex].middle
						}`}
					></div>
					<div
						className={`circle ${
							lightState[this.state.lightStateIndex].bottom
						}`}
					></div>
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
